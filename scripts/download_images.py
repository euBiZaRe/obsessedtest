import os
import requests
import json
import re

# List of products with their current CDN URLs
products = [
    {"id": "1", "name": "FOR THE LOVE OF CARS HOODIE", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/OBSESSEDBRANDtealmockup.png?v=1773784655"},
    {"id": "2", "name": "OBSESSED SIGNATURE T-SHIRT", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/tee_0298895a-cae9-4656-af7c-3132c56fc181.png?v=1773785604"},
    {"id": "3", "name": "NEON GREEN SUNSTRIP", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/products/Untitled-1_6aa7495a-cac9-4edf-bfa6-bd94eac15238.png?v=1649613635"},
    {"id": "4", "name": "FLIGHT TAG - OBSESSED", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/products/MOCKUP2_9cadc9cf-3025-4c67-ae17-ceca2c4068a5.jpg?v=1595107943"},
    {"id": "5", "name": "0-100 REAL QUICK SLAP", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/0-100REALQUICK.png"},
    {"id": "6", "name": "POM POM BEANIE - BLACK", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/products/hatblack.png"},
    {"id": "7", "name": "PURPLE CHERRY BLOSSOM HOODIE", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/products/HOODIEPRINTpurple.png"},
    {"id": "8", "name": "PASSENGER PRINCE KEYCHAIN", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/Blue_024e10df-aa30-450e-beab-307a88d26830.jpg"},
    {"id": "9", "name": "0 LIKES BLACK STICKER", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/products/blackmockup45x35mm.jpg"},
    {"id": "10", "name": "0-60 EVENTUALLY DECAL", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/0-60EVENTUALLY.png"},
    {"id": "11", "name": "OUTCASTED T-SHIRT", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/products/frontandbacktee_abf9a000-b9f6-464f-b80a-e33025e2992f.png"},
    {"id": "12", "name": "REFORMED AUTOMOTIVE HOODIE", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/products/frontlogohoodie.jpg"}
]

output_dir = "public/images/products"
os.makedirs(output_dir, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

for product in products:
    try:
        url = product["url"]
        # Determine file extension from URL or use a default
        ext = ".png"
        if ".jpg" in url: ext = ".jpg"
        if ".jpeg" in url: ext = ".jpeg"
        
        filename = f"product_{product['id']}{ext}"
        filepath = os.path.join(output_dir, filename)
        
        print(f"Downloading {product['name']}...")
        response = requests.get(url, headers=headers, timeout=10)
        
        if response.status_code == 200:
            with open(filepath, "wb") as f:
                f.write(response.content)
            print(f"Saved to {filepath}")
        else:
            print(f"Failed to download {product['name']}. Status: {response.status_code}")
            
    except Exception as e:
        print(f"Error downloading {product['name']}: {e}")

print("Migration complete!")
