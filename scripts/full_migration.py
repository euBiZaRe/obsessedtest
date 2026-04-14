import os
import requests
import json
import concurrent.futures
import time

# I'll simulate fetching all pages here by iterating 1-8 (assuming 100/page for 757 products)
# But I already have the extraction logic. I'll just write the downloader that fetches the JSON first.

BASE_URL = "https://obsessedbrand.uk/products.json?limit=250"
OUTPUT_DIR = "public/images/products"
DATA_FILE = "src/data/products.json"

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)

def fetch_all_products():
    all_products = []
    page = 1
    while True:
        print(f"Fetching page {page}...")
        try:
            r = requests.get(f"{BASE_URL}&page={page}", timeout=15)
            data = r.json()
            products = data.get("products", [])
            if not products:
                break
            all_products.extend(products)
            page += 1
            if page > 5: break # Safety exit if somehow it loops
        except Exception as e:
            print(f"Error fetching page {page}: {e}")
            break
    
    # Process products into our format
    processed = []
    for p in all_products:
        image_url = p.get("images", [{}])[0].get("src") if p.get("images") else ""
        price = p.get("variants", [{}])[0].get("price", "0.00") if p.get("variants") else "0.00"
        
        # Clean up category
        category = p.get("product_type", "OTHER").upper() or "OTHER"
        if "HOODIE" in category: category = "CLOTHING"
        if "TEE" in category or "TSHIRT" in category: category = "CLOTHING"
        if "STICKER" in category or "BANNER" in category: category = "STICKERS"
        if "LANYARD" in category or "TAG" in category: category = "ACCESSORIES"
        if category not in ["CLOTHING", "STICKERS", "ACCESSORIES", "CAR CLUBS"]:
            category = "ACCESSORIES" # Default for unknown
            
        processed.append({
            "id": str(p["id"]),
            "name": p["title"],
            "price": f"£{price}",
            "image": f"/images/products/product_{p['id']}.png",
            "category": category,
            "description": p.get("body_html", "").replace("<p>", "").replace("</p>", "")[:200] + "...",
            "original_image_url": image_url
        })
    
    with open(DATA_FILE, "w") as f:
        json.dump(processed, f, indent=2)
    
    return processed

def download_image(p):
    url = p.get("original_image_url")
    if not url: return
    
    filepath = os.path.join(OUTPUT_DIR, f"product_{p['id']}.png")
    if os.path.exists(filepath): return
    
    try:
        r = requests.get(url, timeout=10)
        if r.status_code == 200:
            with open(filepath, "wb") as f:
                f.write(r.content)
            return True
    except:
        return False

def main():
    print("Starting full catalog migration...")
    products = fetch_all_products()
    print(f"Found {len(products)} products. Starting asset download...")
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        results = list(executor.map(download_image, products))
    
    success_count = sum(1 for r in results if r)
    print(f"Migration complete! Downloaded {success_count} new images.")
    print(f"Total products in store: {len(products)}")

if __name__ == "__main__":
    main()
