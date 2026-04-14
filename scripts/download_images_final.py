import os
import requests

products = [
    "15419731575159", "15419729412471", "15418382221687", "15418360103287",
    "15418359120247", "15418355482999", "15418355089783", "15416174117239",
    "15415326048631", "15372571672951", "15354222051703"
]

# Map to URLs (from previous scrape)
urls = {
    "15419731575159": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/TEE_223a8689-6cf9-48ad-8991-ca0a25240bad.png?v=1773704314",
    "15419729412471": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/HOODIE.png?v=1773704170",
    "15418382221687": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/sticker_00c0acaf-b579-4bb1-b66c-9f10666b23d1.png?v=1773622697",
    "15418360103287": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/lanyardpersonalised.jpg?v=1773617958",
    "15418359120247": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/lanyard_1b0279d5-6f5f-4c3d-918c-a76f26e11962.jpg?v=1773617849",
    "15418355482999": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/tee_eab288c6-f7e0-41aa-a72e-8289a0fbe0b0.png?v=1773617214",
    "15418355089783": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/hoodiefront_backvieww_72661e08-7297-42e2-8ccc-9ad179a2aa04.png?v=1773617118",
    "15416174117239": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/personalisedlanyard.png?v=1773442963",
    "15415326048631": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/black_b6c3f07b-372e-49cf-a2e6-37ce78eef9df.jpg?v=1773353367",
    "15372571672951": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/obsessedbrand2026sticker_51b15fb7-daef-45a5-b7e0-3ce2502637c2.png?v=1770651163",
    "15354222051703": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/z.png?v=1769709176"
}

output_dir = "public/images/products"
os.makedirs(output_dir, exist_ok=True)

for pid, url in urls.items():
    filepath = os.path.join(output_dir, f"product_{pid}.png")
    try:
        r = requests.get(url, timeout=10)
        if r.status_code == 200:
            with open(filepath, "wb") as f:
                f.write(r.content)
            print(f"Downloaded {pid}")
    except:
        print(f"Failed {pid}")
