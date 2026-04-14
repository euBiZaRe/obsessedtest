import os
import requests
import json

# List of all products in PRODUCTS array
products = [
    {"id": "1", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/OBSESSEDBRANDtealmockup.png?v=1773784655"},
    {"id": "2", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/tee_0298895a-cae9-4656-af7c-3132c56fc181.png?v=1773785604"},
    {"id": "3", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/products/Untitled-1_6aa7495a-cac9-4edf-bfa6-bd94eac15238.png?v=1649613635"},
    {"id": "4", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/products/MOCKUP2_9cadc9cf-3025-4c67-ae17-ceca2c4068a5.jpg?v=1595107943"},
    {"id": "5", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/0-100REALQUICK.png"},
    {"id": "6", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/products/hatblack.png"},
    {"id": "7", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/products/HOODIEPRINTpurple.png"},
    {"id": "8", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/Blue_024e10df-aa30-450e-beab-307a88d26830.jpg"},
    {"id": "9", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/products/blackmockup45x35mm.jpg"},
    {"id": "10", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/0-60EVENTUALLY.png"},
    {"id": "11", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/products/frontandbacktee_abf9a000-b9f6-464f-b80a-e33025e2992f.png"},
    {"id": "12", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/products/frontlogohoodie.jpg"},
    {"id": "15420670181751", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/hoodie_7b4b340f-8251-44e2-886e-1fb27b659680.png?v=1773785641"},
    {"id": "15420669362551", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/tee_0298895a-cae9-4656-af7c-3132c56fc181.png?v=1773785604"},
    {"id": "15420663366007", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/OBSESSEDBRANDtealmockuptee.png?v=1773784893"},
    {"id": "15420661825911", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/OBSESSEDBRANDtealmockup.png?v=1773784655"},
    {"id": "15418382549367", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/sticker_eb68bc5f-b0e5-446e-a363-8678dcb94a0f.png?v=1773622814"},
    {"id": "15418382451063", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/sticker_d15c9b1d-5100-49d1-9cb1-6900df795a8f.png?v=1773622733"},
    {"id": "15418356629879", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/snap_back.png?v=1773615544"},
    {"id": "15372563939703", "url": "https://cdn.shopify.com/s/files/1/0269/1665/1106/files/lifestylebanner.png?v=1770650936"}
]

output_dir = "public/images/products"
os.makedirs(output_dir, exist_ok=True)

for p in products:
    filepath = os.path.join(output_dir, f"product_{p['id']}.png")
    if os.path.exists(filepath): continue
    
    try:
        r = requests.get(p["url"], timeout=10)
        if r.status_code == 200:
            with open(filepath, "wb") as f:
                f.write(r.content)
            print(f"Downloaded {p['id']}")
    except:
        print(f"Failed {p['id']}")
