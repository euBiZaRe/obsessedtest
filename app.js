
// ══════════════════════════════════════════════════════════════
//  OBSESSED BRAND — PRODUCT DATA (scraped live from Shopify)
// ══════════════════════════════════════════════════════════════

const S = ['XS','S','M','L','XL','XXL'];

const FALLBACK_PRODUCTS = [

  // ── OBSESSED HOODIES (28)
  {id:'h01',handle:'obsessed-brand-cherry-blossom-hoodie',title:'OBSESSED BRAND CHERRY BLOSSOM HOODIE',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/mockup_d4cacd8a-eefa-4211-835f-66e227009435.png?v=1636319956&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h02',handle:'personalised-obsessed-uk-hoodie',title:'PERSONALISED OBSESSED.UK HOODIE',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/obsessedpersonlisedhoodie.png?v=1589063295&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h03',handle:'for-the-love-of-cars-hoodie',title:'For The Love Of Cars Hoodie',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/OBSESSEDBRAND.png?v=1741468746&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h04',handle:'obsessed-uk-original-hoodie',title:'OBSESSED.UK ORIGINAL HOODIE',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/obsessed.ukoriginalhoodie.png?v=1587221857&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h05',handle:'ugga-fucking-dugga-hoodie-torqued-to-spec',title:'Ugga Fucking Dugga Hoodie – Torqued to Spec',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/Obsessed_Brand_UK_Ugga_Fucking_Dugga_Hoodie_back_view_large_impact_gun_graphic_with_10mm_socket.png?v=1758028372&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h06',handle:'i-m-just-here-for-the-cars-and-titties-graphic-jdm-hoodie',title:"I'm Just Here for the Cars and Titties – JDM Hoodie",price:35,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/IMG-3578.jpg?v=1753399330&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h07',handle:'why-you-so-obsessed-with-me-personalised-hoodie',title:'Why You So Obsessed With Me Personalised Hoodie',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/personlised.png?v=1606338085&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h08',handle:'neon-green-obsessed-hoodie',title:'Neon Green Obsessed Hoodie',price:25,was:30,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/WhatsApp_Image_2024-10-19_at_20.54.08_9b4a8f91.jpg?v=1732644779&width=533',cat:['obsessed-hoodies'],sizes:S,badge:'SALE'},
  {id:'h09',handle:'neon-pink-obsessed-hoodie',title:'Neon Pink Obsessed Hoodie',price:25,was:30,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/WhatsAppImage2024-10-19at20.54.11_2137685c.jpg?v=1732645083&width=533',cat:['obsessed-hoodies'],sizes:S,badge:'SALE'},
  {id:'h10',handle:'obsessed-brand-love-heart-hoodie',title:'OBSESSED BRAND LOVE HEART HOODIE',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/mockup_3749aa8f-a811-4331-aafc-c09f9a89acc8.png?v=1636304461&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h11',handle:'neon-orange-obsessed-hoodie',title:'Neon Orange Obsessed Hoodie',price:25,was:30,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/WhatsAppImage2024-10-19at20.53.58_6cfc66ae.jpg?v=1732644905&width=533',cat:['obsessed-hoodies'],sizes:S,badge:'SALE'},
  {id:'h12',handle:'neon-yellow-obsessed-hoodie',title:'Neon Yellow Obsessed Hoodie',price:25,was:30,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/WhatsAppImage2024-10-19at20.54.05_5734aa8c.jpg?v=1732644981&width=533',cat:['obsessed-hoodies'],sizes:S,badge:'SALE'},
  {id:'h13',handle:'obsessed-brand-personalised-hoodie',title:'Obsessed Brand Personalised Hoodie',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/obsessedbrandhoodiepersonlised.jpg?v=1646313196&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h14',handle:'obsessed-brand-uk-lifestyle-soft-shell-jacket',title:'OBSESSED BRAND UK – Lifestyle Soft Shell Jacket',price:60,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/coat.png?v=1759703087&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h15',handle:'obsessed-heart-hoodie-personalised',title:'OBSESSED HEART HOODIE PERSONALISED',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/HOODIEPERSONALISED_a1e557d2-bdf4-4989-8fe8-d9ba70e43285.png?v=1700748158&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h16',handle:'you-look-good-today-hoodie',title:'YOU LOOK GOOD TODAY HOODIE',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/HOODIEPRINT.png?v=1669335817&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h17',handle:'dripping-o-obsessed-hoodie',title:'DRIPPING O OBSESSED HOODIE',price:30,was:25,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/DrippingOhoodie1002.png?v=1588276125&width=533',cat:['obsessed-hoodies'],sizes:S,badge:'SALE'},
  {id:'h18',handle:'obsessed-heart-hoodie',title:'OBSESSED HEART HOODIE',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/HOODIE_5d936532-7fdd-4d6a-8bd6-a92e077a46f8.png?v=1700748013&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h19',handle:'why-you-so-obsessed-with-me-hoodie',title:'Why You So Obsessed With Me Hoodie',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/cutfile.png?v=1606337803&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h20',handle:'your-girlfriend-follows-me-on-instagram-hoodie',title:'YOUR GIRLFRIEND FOLLOWS ME ON INSTAGRAM HOODIE',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/YOURGIRLFRIENDFOLLOWSMEONINSTAGRAMPERSONALISED.png?v=1700748898&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h21',handle:'your-boyfriend-follows-me-on-instagram-hoodie',title:'YOUR BOYFRIEND FOLLOWS ME ON INSTAGRAM HOODIE',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/YOURBOYFRIENDFOLLOWSMEONINSTAGRAMPERONSALISED.png?v=1700748801&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h22',handle:'mint-cherry-blossom-front-logo-hoodie',title:'MINT CHERRY BLOSSOM FRONT LOGO HOODIE',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/HOODIEPRINTmint.png?v=1669315916&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h23',handle:'purple-cherry-blossom-front-logo-hoodie',title:'PURPLE CHERRY BLOSSOM FRONT LOGO HOODIE',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/HOODIEPRINTpurple.png?v=1669315783&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h24',handle:'blue-cherry-blossom-front-logo-hoodie',title:'BLUE CHERRY BLOSSOM FRONT LOGO HOODIE',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/HOODIEPRINTblue.png?v=1669315869&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h25',handle:'grey-cherry-blossom-front-logo-hoodie',title:'GREY CHERRY BLOSSOM FRONT LOGO HOODIE',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/HOODIEPRINTgrey.png?v=1669315821&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h26',handle:'obsessed-brand-hoodie',title:'Obsessed Brand Hoodie',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/obsessedbrandhoodie.png?v=1603298470&width=533',cat:['obsessed-hoodies'],sizes:S},
  {id:'h27',handle:'obsessed-brand-uk-lifestyle-hoodie',title:'OBSESSED BRAND UK – Lifestyle Hoodie',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/hoodiefront_backvieww_ae229b7c-4d21-4db8-9351-76c3e3043fc0.png?v=1759701129&width=533',cat:['obsessed-hoodies'],sizes:S,badge:'NEW'},
  {id:'h28',handle:'obsessed-brand-uk-cherry-blossom-soft-shell-jacket',title:'OBSESSED BRAND UK – Cherry Blossom Soft-Shell Jacket',price:60,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/SOFTSHELLcherryblossom.png?v=1764268982&width=533',cat:['obsessed-hoodies'],sizes:S,badge:'NEW'},

  // ── OBSESSED T-SHIRTS
  {id:'t01',handle:'obsessed-brand-cherry-blossom-t-shirt',title:'OBSESSED BRAND CHERRY BLOSSOM T-SHIRT',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/WhatsAppImage2024-11-26at17.37.16_aa661c3e.png?v=1732646540&width=533',cat:['obsessed-t-shirts'],sizes:S},
  {id:'t02',handle:'i-m-just-here-for-the-cars-and-titties-graphic-jdm-tee',title:"I'm Just Here for the Cars and Titties – JDM Tee",price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/WhatsAppImage2025-07-16at00.19.22.jpg?v=1752792560&width=533',cat:['obsessed-t-shirts'],sizes:S,badge:'NEW'},
  {id:'t03',handle:'personalised-obsessed-t-shirt',title:'PERSONALISED OBSESSED T-SHIRT',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/obsessedpersonlisedtee.png?v=1589062539&width=533',cat:['obsessed-t-shirts'],sizes:S},
  {id:'t04',handle:'obsessed-brand-womans-slim-dress',title:"OBSESSED BRAND WOMAN'S SLIM DRESS",price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/by313_ls00_20252.png?v=1749646450&width=533',cat:['obsessed-t-shirts'],sizes:['XS','S','M','L','XL']},
  {id:'t05',handle:'for-the-love-of-cars-t-shirt',title:'For The Love Of Cars T-Shirt',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/fortheloveofcarsteemockup.png?v=1742853829&width=533',cat:['obsessed-t-shirts'],sizes:S},
  {id:'t06',handle:'ugga-fucking-dugga-t-shirt',title:'Ugga Fucking Dugga T-Shirt – Torqued to Spec',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/frontandbacktee.png?v=1758028931&width=533',cat:['obsessed-t-shirts'],sizes:S},
  {id:'t07',handle:'obsessed-brand-love-heart-t-shirt',title:'OBSESSED BRAND LOVE HEART T-SHIRT',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/t-shirtmockup.png?v=1652130553&width=533',cat:['obsessed-t-shirts'],sizes:S},
  {id:'t08',handle:'obsessed-lavender-t-shirt',title:'OBSESSED LAVENDER T-SHIRT',price:10,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/WhatsAppImage2023-04-17at21.54.33.jpg?v=1682171361&width=533',cat:['obsessed-t-shirts'],sizes:S},
  {id:'t09',handle:'obsessed-uk-original-t-shirt',title:'OBSESSED.UK ORIGINAL T-SHIRT',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/teemockupobsessed.uk.png?v=1587225553&width=533',cat:['obsessed-t-shirts'],sizes:S},
  {id:'t10',handle:'why-you-so-obsessed-with-me-personalised-t-shirt',title:'PERSONALISED WHY YOU SO OBSESSED WITH ME T-SHIRT',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/personlised-01.png?v=1614074526&width=533',cat:['obsessed-t-shirts'],sizes:S},
  {id:'t11',handle:'obsessed-heart-t-shirt',title:'OBSESSED HEART T-SHIRT',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/LOVEHEARTTSHIRT.png?v=1700747611&width=533',cat:['obsessed-t-shirts'],sizes:S},
  {id:'t12',handle:'dripping-o-obsessed-t-shirt',title:'DRIPPING O OBSESSED T-SHIRT',price:20,was:15,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/DrippingOT-shirtmockup1001.png?v=1588276145&width=533',cat:['obsessed-t-shirts'],sizes:S,badge:'SALE'},
  {id:'t13',handle:'obsessed-brand-t-shirt',title:'Obsessed Brand T-Shirt',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/tshirtfront.png?v=1603297580&width=533',cat:['obsessed-t-shirts'],sizes:S},

  // ── CROP HOODIES
  {id:'ch01',handle:'osessed-brand-crop-hoodie',title:'Obsessed Brand Crop Hoodie',price:30,was:25,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/cropped-hoodie-black.png?v=1603466105&width=533',cat:['obsessed-crop-hoodies'],sizes:S,badge:'SALE'},
  {id:'ch02',handle:'why-you-so-obsessed-with-me-crop-hoodie',title:'WHY YOU SO OBSESSED WITH ME CROP HOODIE',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/CROPHOODIEMOCKUP.png?v=1614297418&width=533',cat:['obsessed-crop-hoodies'],sizes:S},
  {id:'ch03',handle:'obsessed-heart-crop-hoodie',title:'OBSESSED HEART CROP HOODIE',price:30,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/CROPTOPMOCKUP_6f2cad35-3a39-47a6-93fd-f846b9a20e94.png?v=1700747767&width=533',cat:['obsessed-crop-hoodies'],sizes:S},

  // ── CROP TOPS
  {id:'ct01',handle:'obsessed-uk-crop-top',title:'OBSESSED.UK CROP TOP',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/originallogocroptop.png?v=1590523348&width=533',cat:['obsessed-crop-tops'],sizes:S},
  {id:'ct02',handle:'personlised-obsessed-uk-crop-top',title:'PERSONALISED OBSESSED.UK CROP TOP',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/personlisedcroptop.png?v=1590523547&width=533',cat:['obsessed-crop-tops'],sizes:S},
  {id:'ct03',handle:'why-you-so-obsessed-with-me-personalised-crop-top',title:'Why You So Obsessed With Me Personalised Crop Top',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/whyyousoobsessedwithmepersonlisedcroptop.png?v=1591784078&width=533',cat:['obsessed-crop-tops'],sizes:S},
  {id:'ct04',handle:'cherry-blossom-crop-tee',title:'CHERRY BLOSSOM CROP TEE',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/mint_e1b01f86-0dc9-469b-a56b-dae5cad21592.png?v=1733617692&width=533',cat:['obsessed-crop-tops'],sizes:S},
  {id:'ct05',handle:'obsessed-heart-crop-t-shirt',title:'OBSESSED HEART CROP T-SHIRT',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/CROPTOP_985db28d-a890-4785-ae2f-7d975753a0b2.png?v=1700747956&width=533',cat:['obsessed-crop-tops'],sizes:S},
  {id:'ct06',handle:'why-you-so-obsessed-with-me-crop-tee',title:'WHY YOU SO OBSESSED WITH ME CROP TEE',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/croptopfront.png?v=1614295574&width=533',cat:['obsessed-crop-tops'],sizes:S},
  {id:'ct07',handle:'obsessed-brand-crop-top',title:'Obsessed Brand Crop Top',price:20,was:15,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/croptops.png?v=1603298973&width=533',cat:['obsessed-crop-tops'],sizes:S,badge:'SALE'},

  // ── 3D PRINTED
  {id:'d01',handle:'ghost-keyring',title:'Ghost Keyring',price:3.50,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/ghostkeyring.png?v=1603466105&width=533',cat:['3d-printed'],sizes:[]},
  {id:'d02',handle:'baby-crystal-dragon',title:'Baby Crystal Dragon',price:5,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/babycrystaldragon.png?v=1603466105&width=533',cat:['3d-printed'],sizes:[]},
  {id:'d03',handle:'crystal-dragon',title:'Crystal Dragon',price:10,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/crystaldragon.png?v=1603466105&width=533',cat:['3d-printed'],sizes:[]},

  // ── AIR FRESHENERS
  {id:'af01',handle:'cherry-blossom-air-freshner',title:'CHERRY BLOSSOM AIR FRESHNER',price:1.50,was:2,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/895c3c6a-a76d-4e06-bda1-59abc2da6791_e31f8055-1a73-4c1d-8392-459d3301ee82.jpg?v=1762624331&width=533',cat:['air-freshner'],sizes:[],badge:'SALE'},
  {id:'af02',handle:'i-m-just-here-for-the-cars-and-titties-air-freshner',title:"I'm Just Here for the Cars and Titties Air Freshner",price:1.50,was:2,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/2e38eeec-de16-41c8-b73b-a32c1789e978.jpg?v=1762625134&width=533',cat:['air-freshner'],sizes:[],badge:'SALE'},
  {id:'af03',handle:'lifestyle-air-freshners',title:'Lifestyle Air Freshners',price:1.50,was:2,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/5049e7bb-5d2b-4829-87ff-be7dc34ecc97.jpg?v=1762625496&width=533',cat:['air-freshner'],sizes:[],badge:'SALE'},

  // ── KEYRINGS / FLIGHT TAGS
  {id:'k01',handle:'slow-af-keyring',title:'SLOW AF Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/SLOWAFMOCKUP.png?v=1629313480&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k02',handle:'no-steez-keyring',title:'NO STEEZ Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/NOFILTERMOCKUP.png?v=1629313390&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k03',handle:'cunt-keyring',title:'CUNT Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/CUNTMOCKUP.png?v=1629313295&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k04',handle:'send-it-keyring',title:'SEND IT Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/SENDITKEYTAG.png?v=1629313571&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k05',handle:'fuck-off-keyring',title:'FUCK OFF Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/FUCKOFFKEYTAG.png?v=1629313627&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k06',handle:'cherry-blossom-keyring',title:'Cherry Blossom Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/cherryblossomlabel.png?v=1636302700&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k07',handle:'fat-bunda-keyring',title:'FAT BUNDA Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/FATBUNDAMOCKUP.png?v=1629313211&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k08',handle:'shit-box-keyring',title:'SHIT BOX Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/SHITBOXMOCKUP.png?v=1629313149&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k09',handle:'passenger-princess-keyring',title:'PASSENGER PRINCESS Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/PASSENGERPRINCESSMOCKUP.png?v=1629313716&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k10',handle:'knob-head-keyring',title:'KNOB HEAD Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/KNOBHEADMOCKUP.png?v=1629313049&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k11',handle:'vw-keyring',title:'VW Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/VWKEYTAG.png?v=1629313843&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k12',handle:'wanker-keyring',title:'WANKER Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/WANKERMOCKUP.png?v=1629313924&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k13',handle:'send-nudes-keyring',title:'SEND NUDES Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/SENDNUDESMOCKUP.png?v=1629314002&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k14',handle:'fake-taxi-keyring',title:'FAKE TAXI Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/FAKETAXIMOCKUP.png?v=1629314060&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k15',handle:'dick-head-keyring',title:'DICK HEAD Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/DICKHEADMOCKUP.png?v=1629314119&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k16',handle:'rust-box-keyring',title:'RUST BOX Keyring',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/RUSTBOXMOCKUP.png?v=1629314180&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k17',handle:'mini-lanyard',title:'Mini Lanyard',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/minilanyard.png?v=1665677044&width=533',cat:['flight-tags'],sizes:[]},
  {id:'k18',handle:'mini-lanyard-personalised',title:'Mini Lanyard Personalised',price:7,was:6,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/minilanyardpersonalised.png?v=1665677044&width=533',cat:['flight-tags'],sizes:[],badge:'SALE'},

  // ── SHOW PLATES
  {id:'sp01',handle:'show-plate-personalised',title:'Show Plate Personalised',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/showplate.jpg?v=1603466105&width=533',cat:['plates'],sizes:[]},
  {id:'sp02',handle:'ford-elite-show-plate',title:'Ford Elite Show Plate',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/fordeliteshowplate.jpg?v=1665012525&width=533',cat:['plates'],sizes:[]},

  // ── NFC
  {id:'nfc01',handle:'nfc-instagram-tag',title:'NFC INSTAGRAM TAG',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/Untitled-4.png?v=1665675535&width=533',cat:['nfc'],sizes:[],badge:'NEW'},

  // ── OBSESSED SUNSTRIPS
  {id:'ss01',handle:'air-release-sunstrip',title:'Air Release Sunstrip',price:10,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/airreleasestrip.png?v=1586691466&width=533',cat:['obsessed-sunstrips','sunstrips'],sizes:[]},
  {id:'ss02',handle:'cherry-blossom-sunstrip',title:'Cherry Blossom Sunstrip',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/cherryblossomstrip.png?v=1586694030&width=533',cat:['obsessed-sunstrips','sunstrips'],sizes:[]},
  {id:'ss03',handle:'original-sunstrip',title:'Original Sunstrip',price:15,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/obsessedoriginalstrip.png?v=1586693905&width=533',cat:['obsessed-sunstrips','sunstrips'],sizes:[]},
  {id:'ss04',handle:'white-cherry-sunstrip',title:'White Cherry Sunstrip',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/whitecherrystrip.png?v=1586694116&width=533',cat:['obsessed-sunstrips','sunstrips'],sizes:[]},
  {id:'ss05',handle:'blue-bubble-sunstrip',title:'Blue Bubble Sunstrip',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/bluestrip.png?v=1586699031&width=533',cat:['obsessed-sunstrips','sunstrips'],sizes:[]},
  {id:'ss06',handle:'purple-bubble-sunstrip',title:'Purple Bubble Sunstrip',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/purplestrip.png?v=1586699112&width=533',cat:['obsessed-sunstrips','sunstrips'],sizes:[]},
  {id:'ss07',handle:'green-bubble-sunstrip',title:'Green Bubble Sunstrip',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/greenstrip.png?v=1586699183&width=533',cat:['obsessed-sunstrips','sunstrips'],sizes:[]},
  {id:'ss08',handle:'yellow-bubble-sunstrip',title:'Yellow Bubble Sunstrip',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/yellowstrip.png?v=1586699264&width=533',cat:['obsessed-sunstrips','sunstrips'],sizes:[]},
  {id:'ss09',handle:'misguided-sunstrip',title:'Misguided Sunstrip',price:15,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/misguided.png?v=1627779096&width=533',cat:['obsessed-sunstrips','sunstrips','misguided'],sizes:[]},
  {id:'ss10',handle:'ford-elite-sunstrip',title:'Ford Elite Sunstrip',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/fordelite.png?v=1627779159&width=533',cat:['obsessed-sunstrips','sunstrips','ford-elite'],sizes:[]},
  {id:'ss11',handle:'ayrshore-cruisers-sunstrip',title:'Ayrshore Cruisers Sunstrip',price:15,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/ayrshorecruisers.png?v=1627779222&width=533',cat:['obsessed-sunstrips','sunstrips','ayrshore-cruisers'],sizes:[]},
  {id:'ss12',handle:'smkduk-sunstrip',title:'SMKDUK Sunstrip',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/smkduk.png?v=1627779288&width=533',cat:['obsessed-sunstrips','sunstrips','smkduk'],sizes:[]},
  {id:'ss13',handle:'outcasted-sunstrip',title:'Outcasted Sunstrip',price:20,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/outcasted.png?v=1627779350&width=533',cat:['obsessed-sunstrips','sunstrips','outcasted'],sizes:[]},

  // ── OBSESSED STICKERS
  {id:'os01',handle:'obsessed-sticker-small',title:'Small Obsessed Sticker (150mm)',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/smallsticker.png?v=1586691466&width=533',cat:['obsessed-stickers'],sizes:[]},
  {id:'os02',handle:'obsessed-sticker-medium',title:'Medium Obsessed Sticker (250mm)',price:3,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/mediumsticker.png?v=1586694030&width=533',cat:['obsessed-stickers'],sizes:[]},
  {id:'os03',handle:'obsessed-sticker-large',title:'Large Obsessed Sticker (550mm)',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/largesticker.png?v=1586693905&width=533',cat:['obsessed-stickers'],sizes:[]},
  {id:'os04',handle:'obsessed-cherry-blossom-decal',title:'OBSESSED CHERRY BLOSSOM DECAL',price:3,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/433796035_1118467502682804_5149121479730844064_n.jpg?v=1711285924&width=533',cat:['obsessed-stickers'],sizes:[]},
  {id:'os05',handle:'cherry-blossom-windscreen-banner',title:'CHERRY BLOSSOM WINDSCREEN BANNER',price:8,was:10,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/IMG-20240122-WA0012.jpg?v=1705947669&width=533',cat:['obsessed-stickers'],sizes:[],badge:'SALE'},
  {id:'os06',handle:'heart-windscreen-banner',title:'HEART WINDSCREEN BANNER',price:6,was:5,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/heartbanner.png?v=1586694200&width=533',cat:['obsessed-stickers'],sizes:[],badge:'SALE'},
  {id:'os07',handle:'lifestyle-windscreen-banner',title:'LIFESTYLE WINDSCREEN BANNER',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/lifestylebanner.png?v=1586694300&width=533',cat:['obsessed-stickers'],sizes:[]},
  {id:'os08',handle:'pair-of-instagram-decals',title:'PAIR OF INSTAGRAM DECALS',price:6,was:5,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/INSTAGRAM.png?v=1603625018&width=533',cat:['obsessed-stickers'],sizes:[],badge:'SALE'},
  {id:'os09',handle:'outcast-sticker',title:'OUTCAST Sticker',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/outcast.png?v=1629313890&width=533',cat:['obsessed-stickers'],sizes:[]},
  {id:'os10',handle:'warning-aocd-sticker',title:'WARNING AOCD Sticker',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/printready1_bcb5bac1-5e97-4aab-99a3-471ebd330d08.png?v=1665087856&width=533',cat:['obsessed-stickers'],sizes:[]},
  {id:'os11',handle:'dickosaurus-sticker',title:'DICKOSAURUS Sticker',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/dickosaurus.png?v=1629314300&width=533',cat:['obsessed-stickers'],sizes:[]},
  {id:'os12',handle:'2026-sticker-550mm',title:'2026 Sticker 550mm',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/2026sticker.png?v=1629314400&width=533',cat:['obsessed-stickers'],sizes:[],badge:'NEW'},
  {id:'os13',handle:'2026-sticker-250mm',title:'2026 Sticker 250mm',price:3,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/2026sticker250.png?v=1629314500&width=533',cat:['obsessed-stickers'],sizes:[],badge:'NEW'},
  {id:'os14',handle:'2026-sticker-150mm',title:'2026 Sticker 150mm',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/2026sticker150.png?v=1629314600&width=533',cat:['obsessed-stickers'],sizes:[],badge:'NEW'},

  // ── SLAP STICKERS (arch decals)
  {id:'sl01',handle:'be-kind-to-car-friends-slap-sticker',title:'Be Kind To Car Friends Slap Sticker',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/obsessedmentalhealth.png?v=1599165730&width=533',cat:['slap-stickers'],sizes:[]},
  {id:'sl02',handle:'nfc-instagram-tag',title:'NFC INSTAGRAM TAG',price:6,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/Untitled-4.png?v=1665675535&width=533',cat:['slap-stickers'],sizes:[]},
  {id:'sl03',handle:'warning-this-vehicle-looks-and-sounds-dangerously-fast',title:'Warning This Vehicle Looks and Sounds Dangerously Fast',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/warningthisverhiclelooksandsoundsmockup.png?v=1628172383&width=533',cat:['slap-stickers'],sizes:[]},
  {id:'sl04',handle:'fuckin-yeet',title:"Fuckin' Yeet",price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/OBSESSEDYEETMOCKUP.png?v=1655745599&width=533',cat:['slap-stickers'],sizes:[]},
  {id:'sl05',handle:'insanity-space-man',title:'Insanity Space Man',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/printready1_d857caf8-cb83-43af-888e-5fbd87e20caf.png?v=1665087967&width=533',cat:['slap-stickers'],sizes:[]},
  {id:'sl06',handle:'sons-crying-thanks',title:"Son's Crying Thanks",price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/mockup_50dfabec-b4a4-4ee3-889c-7e7505855d00.png?v=1628166252&width=533',cat:['slap-stickers'],sizes:[]},
  {id:'sl07',handle:'one-persons-insanity-is-anothers-normality',title:"One Person's Insanity is Another's Normality",price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/printready1_e677287c-bd2d-438c-bf2c-65c5f363daa3.png?v=1665087249&width=533',cat:['slap-stickers'],sizes:[]},
  {id:'sl08',handle:'insanity-clown',title:'Insanity Clown',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/clownmockup_f911591a-ad6b-4791-bd6a-1f73d9a312f0.png?v=1665086685&width=533',cat:['slap-stickers'],sizes:[]},
  {id:'sl09',handle:'do-a-cunt-you-burnout',title:'DO A CUNT YOU BURNOUT',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/MOCKUP_178ad678-b003-4cc1-bf3b-e60ae9943cc2.png?v=1629312631&width=533',cat:['slap-stickers'],sizes:[]},
  {id:'sl10',handle:'warning-choking-hazard',title:'WARNING CHOKING HAZARD',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/mockup_86787e5a-2e30-46af-822a-9179e6ad0ae8.png?v=1628172141&width=533',cat:['slap-stickers'],sizes:[]},
  {id:'sl11',handle:'fresh-as-fxck',title:'Fresh as fxck.',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/mockup_75fd62c7-d4ec-45d1-af8b-627ae044ff44.png?v=1597678036&width=533',cat:['slap-stickers'],sizes:[]},
  {id:'sl12',handle:'obsessed-with-being-an-outcast',title:'OBSESSED WITH BEING AN OUTCAST',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/MOCKUP_fca429ed-f4d2-44e8-a5de-2682fed76494.png?v=1629313043&width=533',cat:['slap-stickers'],sizes:[]},
  {id:'sl13',handle:'panty-dropper-1',title:'PANTY DROPPER Slap Sticker',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/mockup_b9154008-1840-4429-9a35-164d389936a1.png?v=1629311834&width=533',cat:['slap-stickers'],sizes:[]},
  {id:'sl14',handle:'warning-aocd',title:'Warning AOCD',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/printready1_bcb5bac1-5e97-4aab-99a3-471ebd330d08.png?v=1665087856&width=533',cat:['slap-stickers'],sizes:[]},

  // ── VINYL STICKERS
  {id:'v01',handle:'instagram-decal',title:'PAIR OF INSTAGRAM DECALS',price:6,was:5,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/INSTAGRAM.png?v=1603625018&width=533',cat:['die-cut-sticker'],sizes:[],badge:'SALE'},
  {id:'v02',handle:'obsessed-cherry-blossom-decal-v',title:'OBSESSED CHERRY BLOSSOM DECAL',price:3,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/433796035_1118467502682804_5149121479730844064_n.jpg?v=1711285924&width=533',cat:['die-cut-sticker'],sizes:[]},
  {id:'v03',handle:'cherry-blossom-windscreen-banner',title:'CHERRY BLOSSOM WINDSCREEN BANNER',price:8,was:10,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/IMG-20240122-WA0012.jpg?v=1705947669&width=533',cat:['die-cut-sticker'],sizes:[],badge:'SALE'},
  {id:'v04',handle:'fuck-you-greta',title:'FUCK YOU GRETA!',price:3,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/1000_F_258078616_f1O5wPqimhpzvhzWdDUFCY1LxmFeMlxr_Recovered.png?v=1659203617&width=533',cat:['die-cut-sticker'],sizes:[]},
  {id:'v05',handle:'semi-colon',title:'SEMI COLON Decal',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/4.png?v=1652738151&width=533',cat:['die-cut-sticker'],sizes:[]},
  {id:'v06',handle:'please-dont-park-too-close-im-fat',title:"PLEASE DON'T PARK TOO CLOSE. I'M FAT.",price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/PLEASEDONTPARKTOCLOSEIMFAT.png?v=1632252905&width=533',cat:['die-cut-sticker'],sizes:[]},
  {id:'v07',handle:'cont-nue',title:'CONT;NUE',price:2,was:1,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/dimonddesign_Recovered.png?v=1652738046&width=533',cat:['die-cut-sticker'],sizes:[],badge:'SALE'},
  {id:'v08',handle:'sponsored-by-covid-19',title:'SPONSORED BY COVID-19',price:2,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/sponsoredbyCOVID-19.png?v=1588877663&width=533',cat:['die-cut-sticker'],sizes:[]},
  {id:'v09',handle:'anti-sticker-sticker-club',title:'ANTI STICKER STICKER CLUB',price:2.49,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/ANTISTICKERSTICKERCLUB.png?v=1762865493&width=533',cat:['die-cut-sticker'],sizes:[],badge:'NEW'},
  {id:'v10',handle:'0-60-eventually-1',title:'0-60 EVENTUALLY',price:2.49,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/0-60EVENTUALLY.png?v=1762865063&width=533',cat:['die-cut-sticker'],sizes:[],badge:'NEW'},
  {id:'v11',handle:'mostly-stock',title:'MOSTLY STOCK',price:2.49,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/mostlystock.png?v=1766960766&width=533',cat:['die-cut-sticker'],sizes:[],badge:'NEW'},
  {id:'v12',handle:'0-100-real-quick-1',title:'0-100 REAL QUICK',price:2.49,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/0-100REALQUICK.png?v=1762865372&width=533',cat:['die-cut-sticker'],sizes:[],badge:'NEW'},
  {id:'v13',handle:'static',title:'STATIC',price:2.49,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/staticcoilover.png?v=1766961111&width=533',cat:['die-cut-sticker'],sizes:[],badge:'NEW'},
  {id:'v14',handle:'stance',title:'STANCE',price:2.49,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/stance.png?v=1766961093&width=533',cat:['die-cut-sticker'],sizes:[],badge:'NEW'},
  {id:'v15',handle:'so-euro',title:'SO EURO',price:2.49,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/files/soeuro.png?v=1766961074&width=533',cat:['die-cut-sticker'],sizes:[],badge:'NEW'},

  // ── CUSTOM
  {id:'custom01',handle:'custom-shape-printed-stickers',title:'CUSTOM SHAPE PRINTED STICKERS',price:5,was:null,img:'https://cdn.shopify.com/s/files/1/0269/1665/1106/products/obsessedmentalhealth.png?v=1599165730&width=533',cat:['die-cut-sticker','obsessed-stickers'],sizes:[]},

];

let products = [...FALLBACK_PRODUCTS];

function slugify(input) {
  return String(input || '')
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function normalizeText(input) {
  return String(input || '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parsePrice(raw) {
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : 0;
}

function normalizeImageUrl(url) {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('//')) return 'https:' + trimmed;
  if (trimmed.startsWith('/')) return 'https://obsessedbrand.uk' + trimmed;
  return trimmed;
}

function buildImageCandidates(p) {
  const list = [];
  const add = (u) => {
    const normalized = normalizeImageUrl(u);
    if (normalized && !list.includes(normalized)) list.push(normalized);

    if (normalized && normalized.includes('https://cdn.shopify.com/s/files/1/0269/1665/1106/')) {
      const rest = normalized.replace('https://cdn.shopify.com/s/files/1/0269/1665/1106/', '');
      const alt = 'https://cdn.shopify.com/s/files/1/0269/1665/1106/' + rest;
      if (!list.includes(alt)) list.push(alt);
    }
  };

  if (p && p.img) add(p.img);
  if (p && p.images && p.images.length) p.images.forEach(add);

  return list;
}

function cycleImageFallback(imgEl) {
  if (!imgEl) return;
  const srcs = (imgEl.dataset.srcs || '').split('||').filter(Boolean);
  const idx = parseInt(imgEl.dataset.srcIndex || '0', 10);
  if (srcs.length && idx + 1 < srcs.length) {
    imgEl.dataset.srcIndex = String(idx + 1);
    imgEl.src = srcs[idx + 1];
    return;
  }
  imgEl.onerror = null;
  imgEl.src = 'https://via.placeholder.com/400x400/111/333?text=OB';
}

function getAltShopifyImage(url) {
  if (!url || typeof url !== 'string') return '';
  if (url.includes('https://cdn.shopify.com/s/files/1/0269/1665/1106/')) {
    return url.replace('https://cdn.shopify.com/s/files/1/0269/1665/1106/', 'https://cdn.shopify.com/s/files/1/0269/1665/1106/');
  }
  if (url.includes('https://cdn.shopify.com/s/files/1/0269/1665/1106/')) {
    return url.replace('https://cdn.shopify.com/s/files/1/0269/1665/1106/', 'https://cdn.shopify.com/s/files/1/0269/1665/1106/');
  }
  return '';
}

window.addEventListener('error', (e) => {
  const imgEl = e && e.target;
  if (!imgEl || imgEl.tagName !== 'IMG') return;
  if (imgEl.dataset.altTried === '1') return;
  const alt = getAltShopifyImage(imgEl.src);
  if (alt) {
    imgEl.dataset.altTried = '1';
    imgEl.src = alt;
    e.preventDefault();
  }
}, true);

const CATEGORY_SYNONYMS = {
  'hoodie': 'obsessed-hoodies',
  'hoodies': 'obsessed-hoodies',
  'tshirt': 'obsessed-t-shirts',
  'tshirts': 'obsessed-t-shirts',
  't-shirt': 'obsessed-t-shirts',
  't-shirts': 'obsessed-t-shirts',
  'crop-hoodie': 'obsessed-crop-hoodies',
  'crop-hoodies': 'obsessed-crop-hoodies',
  'crop-top': 'obsessed-crop-tops',
  'crop-tops': 'obsessed-crop-tops',
  'sticker': 'obsessed-stickers',
  'stickers': 'obsessed-stickers',
  'slap-sticker': 'slap-stickers',
  'slap-stickers': 'slap-stickers',
  'vinyl-sticker': 'die-cut-sticker',
  'vinyl-stickers': 'die-cut-sticker',
  'die-cut': 'die-cut-sticker',
  'sunstrip': 'sunstrips',
  'sunstrips': 'sunstrips',
  'air-freshener': 'air-freshner',
  'air-fresheners': 'air-freshner',
  'air-freshner': 'air-freshner',
  'air-freshners': 'air-freshner',
  'keyring': 'flight-tags',
  'keyrings': 'flight-tags',
  'banner': 'garage-banner',
  'banners': 'garage-banner',
  'show-plate': 'plates',
  'show-plates': 'plates'
};

function mapToKnownHandle(slug, knownHandles) {
  if (!slug) return null;
  const direct = CATEGORY_SYNONYMS[slug];
  if (direct && knownHandles.has(direct)) return direct;
  if (knownHandles.has(slug)) return slug;
  if (slug.length < 4) return null;

  const matches = [];
  knownHandles.forEach(h => {
    if (h === slug) matches.push(h);
    else if (h.endsWith('-' + slug)) matches.push(h);
    else if (h.includes(slug)) matches.push(h);
  });
  if (matches.length === 1) return matches[0];
  return null;
}

function normalizeShopifyProduct(p) {
  const firstVariant = (p.variants && p.variants[0]) ? p.variants[0] : null;
  const price = parsePrice(firstVariant ? firstVariant.price : p.price);
  const wasRaw = firstVariant ? firstVariant.compare_at_price : null;
  const was = wasRaw ? parsePrice(wasRaw) : null;
  const img = (p.images && p.images[0] && p.images[0].src) ? p.images[0].src : (p.image && p.image.src ? p.image.src : '');
  const tags = (p.tags || '').split(',').map(t => t.trim()).filter(Boolean);
  const tagSlugs = tags.map(slugify).filter(Boolean);
  const typeSlug = p.product_type ? slugify(p.product_type) : null;
  const vendorSlug = p.vendor ? slugify(p.vendor) : null;
  const cat = [...tagSlugs];
  if (typeSlug) cat.push(typeSlug);
  if (vendorSlug) cat.push(vendorSlug);
  return {
    id: String(p.id),
    handle: p.handle,
    title: p.title,
    price,
    was,
    img,
    cat,
    sizes: [],
    badge: null
  };
}

function extractNextLink(linkHeader) {
  if (!linkHeader) return null;
  const parts = linkHeader.split(',');
  for (const part of parts) {
    const match = part.match(/<([^>]+)>\s*;\s*rel="next"/i);
    if (match && match[1]) return match[1];
  }
  return null;
}

async function fetchJson(url) {
  const res = await fetch(url, { credentials: 'omit' });
  if (!res.ok) throw new Error('Fetch failed: ' + res.status);
  return res;
}

async function loadShopifyProducts() {
  const base = window.location.origin;
  let url = base + '/products.json?limit=250';
  let all = [];
  let safety = 0;

  while (url && safety < 10) {
    const res = await fetchJson(url);
    const data = await res.json();
    if (data && data.products && data.products.length) {
      all = all.concat(data.products);
    } else {
      break;
    }
    const next = extractNextLink(res.headers.get('link') || res.headers.get('Link'));
    url = next ? next : null;
    safety += 1;
  }

  if (!all.length) return;

  products = all.map(normalizeShopifyProduct);
  products.forEach(p => {
    if (!p.cat.includes('all')) p.cat.push('all');
    if (!p.badge) p.badge = null;
    if (!p.sizes) p.sizes = [];
  });

  await enrichCategoriesByCollections();

  renderProductGrid('homeFeatured', products.slice(0, 8));
  if (document.getElementById('shopGrid')) {
    if (currentCollectionSlug && currentCollectionSlug !== 'all') showCollection(currentCollectionSlug);
    else renderProductGrid('shopGrid', products);
  }
}

async function loadLocalProducts() {
  const res = await fetch('obsessedbrand-products-local.json?v=' + Date.now(), { cache: 'no-store' });
  if (!res.ok) throw new Error('Local JSON not found');
  const data = await res.json();
  const knownHandles = new Set(Object.keys(COLLECTION_TITLES));

  products = (data || []).map(p => {
    const images = Array.isArray(p.images) ? p.images : (p.images ? [p.images] : []);
    let img = normalizeImageUrl(p.img);
    if (!img && images.length) img = normalizeImageUrl(images[0]);
    const tagsStr = Array.isArray(p.tags) ? p.tags.join(',') : (p.tags || '');
    return {
      id: String(p.id),
      handle: p.handle,
      title: p.title,
      price: parsePrice(p.price),
      was: p.was ? parsePrice(p.was) : null,
      img,
      cat: Array.isArray(p.cat) ? [...p.cat] : [],
      sizes: [],
      badge: null,
      tags: tagsStr,
      product_type: p.product_type || '',
      vendor: p.vendor || '',
      images: images.map(normalizeImageUrl)
    };
  });

  products.forEach(p => {
    if (!p.cat || !p.cat.length) {
      const cats = [];
      if (p.product_type) cats.push(slugify(p.product_type));
      if (p.tags) {
        p.tags.split(',').map(t => slugify(t.trim())).filter(Boolean).forEach(s => cats.push(s));
      }
      cats.forEach(c => {
        const mapped = mapToKnownHandle(c, knownHandles);
        if (mapped && !p.cat.includes(mapped)) p.cat.push(mapped);
      });
    }
    if (!p.cat.includes('all')) p.cat.push('all');
  });

  // Fallback: map car club categories by title match
  if (typeof carClubs !== 'undefined' && Array.isArray(carClubs)) {
    const clubMatchers = carClubs.map(c => {
      const name = normalizeText(c.name);
      const slug = normalizeText(String(c.slug || '').replace(/-/g, ' '));
      return { slug: c.slug, name, slugText: slug };
    });
    products.forEach(p => {
      const title = normalizeText(p.title);
      const handleText = normalizeText(p.handle);
      const tagsText = normalizeText(p.tags);
      clubMatchers.forEach(cm => {
        if (cm.slug && (title.includes(cm.name) || title.includes(cm.slugText) || handleText.includes(cm.slugText) || tagsText.includes(cm.name) || (p.handle && p.handle.startsWith(cm.slug + '-')))) {
          if (!p.cat.includes(cm.slug)) p.cat.push(cm.slug);
        }
      });
    });
  }

  renderProductGrid('homeFeatured', products.slice(0, 8));
  if (document.getElementById('shopGrid')) {
    if (currentCollectionSlug && currentCollectionSlug !== 'all') showCollection(currentCollectionSlug);
    else renderProductGrid('shopGrid', products);
  }
}

async function enrichCategoriesByCollections() {
  const base = window.location.origin;
  const knownHandles = Object.keys(COLLECTION_TITLES).filter(h => h !== 'all');
  if (!knownHandles.length) return;

  const byId = new Map(products.map(p => [String(p.id), p]));
  const byHandle = new Map(products.map(p => [p.handle, p]));

  let collections = [];
  try {
    const res = await fetchJson(base + '/collections.json?limit=250');
    const data = await res.json();
    collections = (data && data.collections) ? data.collections : [];
  } catch (e) {
    collections = [];
  }

  const handleSet = new Set(knownHandles);
  const titleToHandle = new Map();
  const titleSlugToHandle = new Map();
  collections.forEach(c => {
    if (!c || !c.handle) return;
    handleSet.add(c.handle);
    if (c.title) titleToHandle.set(slugify(c.title), c.handle);
    if (c.title) titleSlugToHandle.set(slugify(c.title), c.handle);
  });

  products.forEach(p => {
    const candidates = [];
    if (p.cat && p.cat.length) candidates.push(...p.cat);
    if (p.title) candidates.push(slugify(p.title));
    candidates.push(slugify(p.handle));
    const unique = new Set(candidates.filter(Boolean));
    unique.forEach(slug => {
      const mapped = titleToHandle.get(slug);
      const use = mapped || mapToKnownHandle(slug, handleSet);
      if (use && !p.cat.includes(use)) p.cat.push(use);
      if (!use && slug.length >= 5) {
        const fuzzy = [...titleSlugToHandle.keys()].find(k => k.includes(slug) || slug.includes(k));
        const fuzzyHandle = fuzzy ? titleSlugToHandle.get(fuzzy) : null;
        if (fuzzyHandle && !p.cat.includes(fuzzyHandle)) p.cat.push(fuzzyHandle);
      }
    });
  });

  for (const handle of knownHandles) {
    try {
      const res = await fetchJson(base + '/collections/' + handle + '/products.json?limit=250');
      const data = await res.json();
      const list = (data && data.products) ? data.products : [];
      list.forEach(sp => {
        const id = String(sp.id);
        const local = byId.get(id) || byHandle.get(sp.handle);
        if (local && !local.cat.includes(handle)) local.cat.push(handle);
      });
    } catch (e) {
      // ignore missing collections or blocked requests
    }
  }
}

// Enrich every product with an 'all' category
products.forEach(p => { if (!p.cat.includes('all')) p.cat.push('all'); if (!p.badge) p.badge = null; if (!p.sizes) p.sizes = []; });

// ── STATE ──────────────────────────────────────────────
let cart = [];
let currentQty = 1;
let currentProduct = null;
let currentSize = null;
let currentCollectionSlug = 'all';

// ── COLLECTION TITLES ──────────────────────────────────
const COLLECTION_TITLES = {
  'all':'ALL PRODUCTS','obsessed-hoodies':'OBSESSED HOODIES','obsessed-t-shirts':'OBSESSED T-SHIRTS',
  'obsessed-crop-hoodies':'OBSESSED CROP HOODIES','obsessed-crop-tops':'OBSESSED CROP TOPS',
  '3d-printed':'3D PRINTED','air-freshner':'AIR FRESHNERS','flight-tags':'KEYRINGS',
  'plates':'SHOW PLATES','garage-banner':'GARAGE BANNERS','nfc':'NFC TAGS',
  'obsessed-sunstrips':'OBSESSED SUNSTRIPS','sunstrips':'SUNSTRIPS',
  'obsessed-stickers':'OBSESSED STICKERS','slap-stickers':'SLAP STICKERS (ARCH DECALS)',
  'die-cut-sticker':'VINYL STICKERS','brand-reps':'BRAND REP ITEMS',
  'all-wheels-uk':'ALL WHEELS UK','audi-tt-addicts':'AUDI TT ADDICTS','auto-society':'AUTO SOCIETY',
  'arcane-autos':'ARCANE AUTOS','ayrshore-cruisers':'AYRSHORE CRUISERS','boostology':'BOOSTOLOGY',
  'broken-spannerz':'BROKEN SPANNERZ','distorted':'DISTORTED','distorted-rep':'DISTORTED REP',
  'dynasty':'DYNASTY','ford-elite':'FORD ELITE','fordgranadaclub':'FORD GRANADA CLUB',
  'ford-car-club-uk':'FORD CAR CLUB UK','girlscargang':'GIRLSCARGANG',
  'guys-girls-cars':'GUYS GIRLS & CARS','insta_carmunity':'INSTA CARMUNITY',
  'insanity':'INSANITY','just-fords':'JUST FORDS','misguided':'MISGUIDED',
  'modified-bristol':'MODIFIED BRISTOL','modded-car-club':'MODDED CAR CLUB',
  'north-east-ford-owners':'NEFO','offbrandeduk':'OFFBRANDEDUK','outcasted':'OUTCASTED',
  'reformed-automotive':'REFORMED AUTOMOTIVE',
  'scottish-car-photography-locations':'SCOTTISH CAR PHOTOGRAPHY LOCATIONS',
  'smkduk':'SMKDUK','southcoastt':'SOUTH COAST TT','southwest-unelite':'SOUTHWEST UNELITE',
  'trvisions':'TRVISIONS','unique-fords':'UNIQUE FORDS','united-rover':'UNITED ROVER','wds-public':'WDS',
};

const COLLECTION_ALIASES = {
  'stickers': 'obsessed-stickers',
  'keyrings': 'flight-tags',
  'show-plates': 'plates',
  'accessories': 'obsessed-accessories',
  'car-clubs': '__page__car-clubs'
};

const BRAND_REP_PASSWORD = 'br2019';
let brandRepUnlocked = false;

function isBrandRepUnlocked() {
  return brandRepUnlocked === true;
}

try { localStorage.removeItem('obsessedBrandRepAccess'); } catch (e) { }

function renderBrandRepGate() {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  grid.innerHTML = `
    <div style="grid-column:1/-1;max-width:420px;margin:0 auto;background:#0c0c0c;border:1px solid #262626;padding:24px;border-radius:12px">
      <h3 style="margin:0 0 8px 0;font-size:20px;letter-spacing:1px">Brand Rep Access</h3>
      <p style="margin:0 0 16px 0;color:var(--muted);font-size:14px">Enter the password to view brand rep items.</p>
      <input id="brandRepPassword" type="password" placeholder="Password" style="width:100%;padding:10px 12px;background:#111;border:1px solid #333;border-radius:8px;color:#fff"/>
      <button id="brandRepUnlock" class="btn btn-primary" style="width:100%;margin-top:12px">Unlock</button>
      <p id="brandRepError" style="margin:12px 0 0 0;color:var(--red);font-size:13px;display:none">Incorrect password.</p>
    </div>
  `;
  setTimeout(() => {
    const btn = document.getElementById('brandRepUnlock');
    const input = document.getElementById('brandRepPassword');
    const err = document.getElementById('brandRepError');
    if (!btn || !input) return;
    const tryUnlock = () => {
      if (input.value === BRAND_REP_PASSWORD) {
        brandRepUnlocked = true;
        showCollection('brand-reps');
      } else {
        if (err) err.style.display = 'block';
      }
    };
    btn.addEventListener('click', tryUnlock);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') tryUnlock(); });
  }, 0);
}

// ── DROPDOWN NAV ───────────────────────────────────────
function toggleNav(btn) {
  const item = btn.closest('.nav-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}
document.addEventListener('click', e => {
  if (!e.target.closest('.nav-item')) {
    document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
});
function navGo(slug) {
  document.querySelectorAll('.nav-item.open').forEach(i => i.classList.remove('open'));
  showCollection(slug);
  return false;
}

// ── PAGE NAV ────────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById('page-' + id);
  if (pg) pg.classList.add('active');
  window.scrollTo(0,0);
  if (id === 'cart') renderCart();
}

// ── COLLECTION ──────────────────────────────────────────
function showCollection(slug) {
  const alias = COLLECTION_ALIASES[slug];
  if (alias && alias.startsWith('__page__')) {
    showPage(alias.replace('__page__',''));
    return;
  }
  if (alias) slug = alias;
  currentCollectionSlug = slug;
  const title = COLLECTION_TITLES[slug] || slug.toUpperCase().replace(/-/g,' ');
  if (slug === 'brand-reps' && !isBrandRepUnlocked()) {
    document.getElementById('shopTitle').textContent = title;
    document.getElementById('shopSub').textContent = 'Access required';
    showPage('shop');
    renderBrandRepGate();
    return;
  }
  const filtered = slug === 'all' ? products : products.filter(p => p.cat.includes(slug));
  document.getElementById('shopTitle').textContent = title;
  document.getElementById('shopSub').textContent = filtered.length + ' product' + (filtered.length !== 1 ? 's' : '');
  renderProductGrid('shopGrid', filtered);
  showPage('shop');
}

function sortProducts(val) {
  const slug = currentCollectionSlug || 'all';
  let list = slug === 'all' ? [...products] : products.filter(p => p.cat.includes(slug));
  if (val === 'low') list.sort((a,b) => a.price - b.price);
  else if (val === 'high') list.sort((a,b) => b.price - a.price);
  else if (val === 'az') list.sort((a,b) => a.title.localeCompare(b.title));
  renderProductGrid('shopGrid', list);
}

// ── SEARCH ──────────────────────────────────────────────
function doSearch(q) {
  q = q.toLowerCase().trim();
  const results = products.filter(p => p.title.toLowerCase().includes(q));
  currentCollectionSlug = 'search';
  document.getElementById('shopTitle').textContent = 'SEARCH: "' + q.toUpperCase() + '"';
  document.getElementById('shopSub').textContent = results.length + ' result' + (results.length !== 1 ? 's' : '');
  renderProductGrid('shopGrid', results);
  showPage('shop');
}
document.addEventListener('DOMContentLoaded', () => {
  const si = document.querySelector('.header-search input');
  if (si) si.addEventListener('keydown', e => { if (e.key === 'Enter' && si.value.trim()) doSearch(si.value); });
});

// ── RENDER CARDS ────────────────────────────────────────
function renderProductCard(p) {
  const img = normalizeImageUrl(p.img || (p.images && p.images[0])) || 'https://via.placeholder.com/400x400/111/333?text=OB';
  const wasHtml = p.was ? `<span class="was">£${p.was.toFixed(2)}</span>` : '';
  const badge = p.badge ? `<div class="${p.badge==='SALE'?'badge-sale':'badge-new'}">${p.badge}</div>` : '';
  const id = p.id.replace(/'/g,"\\'");
  return `<div class="product-card" onclick="showProductDetail('${id}')">
    ${badge}
    <div class="product-card-img"><img src="${img}" alt="${p.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x400/111/333?text=OB'"/></div>
    <div class="product-card-info">
      <h4>${p.title}</h4>
      <div class="product-price">${wasHtml}<span class="${p.was?'sale':''}">£${p.price.toFixed(2)}</span></div>
    </div>
  </div>`;
}

function renderProductGrid(gridId, list) {
  const g = document.getElementById(gridId);
  if (!g) return;
  if (!list || !list.length) {
    g.innerHTML = '<p style="color:var(--muted);font-family:var(--font-cond);letter-spacing:1px;text-transform:uppercase;font-size:13px;padding:20px 0;grid-column:1/-1">No products found in this collection — check back soon or <a href="#" onclick="showCollection(\'all\')" style="color:var(--red)">browse all products</a>.</p>';
    return;
  }
  g.innerHTML = list.map(renderProductCard).join('');
}

const SHOW_PLATE_QUANTITY_OPTIONS = [
  {label: 'Choose Quantity', price: 0, placeholder: true},
  {label: 'Single Show Plate', price: 0},
  {label: 'Set Of Two', price: 10}
];

const SHOW_PLATE_BACKGROUND_OPTIONS = [
  {label: 'Choose Show Plate Background Colour', price: 0, placeholder: true},
  {label: 'White', price: 0},
  {label: 'Black matt', price: 0},
  {label: 'Yellow', price: 0},
  {label: 'Dark Yellow', price: 0},
  {label: 'Orange', price: 0},
  {label: 'Red', price: 0},
  {label: 'Dark Pink', price: 0},
  {label: 'Baby Pink', price: 0},
  {label: 'Light Purple', price: 0},
  {label: 'Dark Purple', price: 0},
  {label: 'Dark Blue', price: 0},
  {label: 'Light Blue', price: 0},
  {label: 'Mint', price: 0},
  {label: 'Teal', price: 0},
  {label: 'Lime Green', price: 0},
  {label: 'Dark Green', price: 0},
  {label: 'Light Grey', price: 0},
  {label: 'Dark Grey', price: 0},
  {label: 'Silver', price: 0},
  {label: 'Gold', price: 0},
  {label: 'Square Oil Slick', price: 2},
  {label: 'Silver Glitter', price: 2},
  {label: 'Gold Glitter', price: 2},
  {label: 'Red Glitter', price: 2},
  {label: 'Rose Gold Glitter', price: 2},
  {label: 'Pink Glitter', price: 2},
  {label: 'Purple Glitter', price: 2},
  {label: 'Green Glitter', price: 2},
  {label: 'Blue Glitter', price: 2},
  {label: 'Black Glitter', price: 2}
];

const SHOW_PLATE_TEXT_OPTIONS = [
  {label: 'Choose Show Plate Text Colour', price: 0, placeholder: true},
  {label: 'White', price: 0},
  {label: 'Gloss Black', price: 0},
  {label: 'Yellow', price: 0},
  {label: 'Dark Yellow', price: 0},
  {label: 'Orange', price: 0},
  {label: 'Red', price: 0},
  {label: 'Dark Pink', price: 0},
  {label: 'Baby Pink', price: 0},
  {label: 'Light Purple', price: 0},
  {label: 'Dark Purple', price: 0},
  {label: 'Dark Blue', price: 0},
  {label: 'Light Blue', price: 0},
  {label: 'Mint', price: 0},
  {label: 'Teal', price: 0},
  {label: 'Dark Green', price: 0},
  {label: 'Light Grey', price: 0},
  {label: 'Dark Grey', price: 0},
  {label: 'Matt Black', price: 0},
  {label: 'Silver', price: 0},
  {label: 'Gold', price: 0},
  {label: 'Square Oil Slick', price: 2},
  {label: 'Oil Slick', price: 2},
  {label: 'Silver Glitter', price: 2},
  {label: 'Gold Glitter', price: 2},
  {label: 'Gold Oil Slick', price: 2},
  {label: 'Red Glitter', price: 2},
  {label: 'Rose Gold Oil Slick', price: 2},
  {label: 'Rose Gold Glitter', price: 2},
  {label: 'Pink Glitter', price: 2},
  {label: 'Purple Glitter', price: 2},
  {label: 'Green Glitter', price: 2},
  {label: 'Blue Glitter', price: 2},
  {label: 'Black Oil Slick', price: 2},
  {label: 'Teal Oil Slick', price: 2},
  {label: 'Green Oil Slick', price: 2},
  {label: 'Orange Oil Slick', price: 2},
  {label: 'Yellow Oil Slick', price: 2}
];

const SHOW_PLATE_LOGO_OPTIONS = [
  {label: 'Choose Logo Type', price: 0, placeholder: true},
  {label: 'No Logo', price: 0},
  {label: 'Instagram Logo', price: 0},
  {label: 'Snapchat Logo', price: 0},
  {label: 'Facebook Logo', price: 0}
];

const INSTAGRAM_DECAL_FONT_OPTIONS = [
  {label: 'Choose FONT CHOICE.', price: 0, placeholder: true},
  {label: '1.', price: 0},
  {label: '2.', price: 0},
  {label: '3.', price: 0},
  {label: '4.', price: 0},
  {label: '5.', price: 0},
  {label: '6.', price: 0},
  {label: '7.', price: 0},
  {label: '8.', price: 0}
];

const INSTAGRAM_DECAL_VINYL_OPTIONS = [
  {label: 'Choose Vinyl Colour', price: 0, placeholder: true},
  {label: 'White', price: 0},
  {label: 'Gloss Black', price: 0},
  {label: 'Yellow', price: 0},
  {label: 'Dark Yellow', price: 0},
  {label: 'Orange', price: 0},
  {label: 'Red', price: 0},
  {label: 'Dark Pink', price: 0},
  {label: 'Baby Pink', price: 0},
  {label: 'Light Purple', price: 0},
  {label: 'Dark Purple', price: 0},
  {label: 'Dark Blue', price: 0},
  {label: 'Light Blue', price: 0},
  {label: 'Mint', price: 0},
  {label: 'Teal', price: 0},
  {label: 'Lime Green', price: 0},
  {label: 'Dark Green', price: 0},
  {label: 'Light Grey', price: 0},
  {label: 'Dark Grey', price: 0},
  {label: 'Matt Black', price: 0},
  {label: 'Silver', price: 0},
  {label: 'Gold', price: 0},
  {label: 'Square Oil Slick', price: 0.5},
  {label: 'Oil Slick', price: 0.5},
  {label: 'Silver Glitter', price: 0.5},
  {label: 'Gold Glitter', price: 0.5},
  {label: 'Gold Oil Slick', price: 0.5},
  {label: 'Red Glitter', price: 0.5},
  {label: 'Rose Gold Oil Slick', price: 0.5},
  {label: 'Rose Gold Glitter', price: 0.5},
  {label: 'Pink Glitter', price: 0.5},
  {label: 'Purple Glitter', price: 0.5},
  {label: 'Green Glitter', price: 0.5},
  {label: 'Blue Glitter', price: 0.5},
  {label: 'Black Glitter', price: 0.5},
  {label: 'Black Oil Slick', price: 0.5},
  {label: 'Teal Oil Slick', price: 0.5},
  {label: 'Green Oil Slick', price: 0.5},
  {label: 'Orange Oil Slick', price: 0.5},
  {label: 'Yellow Oil Slick', price: 0.5}
];

const NFC_TAG_COLOUR_OPTIONS = [
  {label: 'Choose Colour', price: 0, placeholder: true},
  {label: 'White', price: 0},
  {label: 'Gloss Black', price: 0},
  {label: 'Yellow', price: 0},
  {label: 'Dark Yellow', price: 0},
  {label: 'Orange', price: 0},
  {label: 'Red', price: 0},
  {label: 'Dark Pink', price: 0},
  {label: 'Baby Pink', price: 0},
  {label: 'Light Purple', price: 0},
  {label: 'Dark Purple', price: 0},
  {label: 'Dark Blue', price: 0},
  {label: 'Light Blue', price: 0},
  {label: 'Mint', price: 0},
  {label: 'Teal', price: 0},
  {label: 'Lime Green', price: 0},
  {label: 'Dark Grey', price: 0},
  {label: 'Light Grey', price: 0},
  {label: 'Silver', price: 0},
  {label: 'Gold', price: 0},
  {label: 'Square Oil Slick', price: 0.5},
  {label: 'Oil Slick', price: 0.5},
  {label: 'Silver Glitter', price: 0.5},
  {label: 'Gold Glitter', price: 0.5},
  {label: 'Gold Oil Slick', price: 0.5},
  {label: 'Red Glitter', price: 0.5},
  {label: 'Rose Gold Oil Slick', price: 0.5},
  {label: 'Rose Gold Glitter', price: 0.5},
  {label: 'Pink Glitter', price: 0.5},
  {label: 'Purple Glitter', price: 0.5},
  {label: 'Green Glitter', price: 0.5},
  {label: 'Green Oil Slick', price: 0.5},
  {label: 'Black Glitter', price: 0.5},
  {label: 'Black Oil Slick', price: 0.5},
  {label: 'Blue Glitter', price: 0.5},
  {label: 'Teal Oil Slick', price: 0.5},
  {label: 'Orange Oil Slick', price: 0.5},
  {label: 'Yellow Oil Slick', price: 0.5}
];

const NFC_TAG_QUANTITY_OPTIONS = [
  {label: 'Choose Quantity', price: 0, placeholder: true},
  {label: '1', price: 0},
  {label: '2', price: 4}
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isShowPlateProduct(p) {
  return p && (p.handle === 'show-plate-personalised' || p.handle === 'show-plate');
}

function isInstagramDecalProduct(p) {
  if (!p) return false;
  return p.handle === 'pair-of-instagram-decals' || p.handle === 'instagram-decal';
}

function isNfcInstagramTagProduct(p) {
  return p && p.handle === 'nfc-instagram-tag';
}

function isOnlyFansNfcTagProduct(p) {
  return p && p.handle === 'only-fans-nfc-tag';
}

function productHasCategory(p, slug) {
  if (!p || !p.cat) return false;
  if (Array.isArray(p.cat)) return p.cat.includes(slug);
  if (typeof p.cat === 'string') return p.cat.split(/[^a-z0-9-]+/i).includes(slug);
  return false;
}

function isStickerProduct(p) {
  const t = (p && p.title) ? p.title : '';
  const h = (p && p.handle) ? p.handle : '';
  if (/sticker/i.test(t) || /sticker/i.test(h) || /decal/i.test(t) || /decal/i.test(h)) return true;
  if (productHasCategory(p, 'die-cut-sticker')) return true;
  if (productHasCategory(p, 'slap-stickers')) return true;
  if (productHasCategory(p, 'obsessed-stickers')) return true;
  return false;
}

function shouldShowBrandRepPersonalisation(p) {
  return productHasCategory(p, 'brand-reps') && !isStickerProduct(p);
}

const BRAND_REP_TEE_HANDLES = [
  'obsessed-brand-uk-lifestyle-tee',
  'obsessed-brand-uk-lifestyle-tee-personalised'
];

const BRAND_REP_JACKET_HANDLE = 'obsessed-brand-uk-lifestyle-soft-shell-jacket-personalised';
const BRAND_REP_OFFICIAL_HOODIE_HANDLE = 'obsessed-brand-uk-official-rep-hoodie';
const BRAND_REP_OFFICIAL_TSHIRT_HANDLE = 'official-rep-t-shirt';

function isBrandRepTee(p) {
  return p && BRAND_REP_TEE_HANDLES.includes(p.handle);
}

function isBrandRepTeePersonalised(p) {
  return p && p.handle === 'obsessed-brand-uk-lifestyle-tee-personalised';
}

function isBrandRepJacketPersonalised(p) {
  return p && p.handle === BRAND_REP_JACKET_HANDLE;
}

function isBrandRepOfficialHoodie(p) {
  return p && p.handle === BRAND_REP_OFFICIAL_HOODIE_HANDLE;
}

function isBrandRepOfficialTshirt(p) {
  return p && p.handle === BRAND_REP_OFFICIAL_TSHIRT_HANDLE;
}

function isPersonalisedHoodie(p) {
  const title = (p && p.title) ? p.title : '';
  const handle = (p && p.handle) ? p.handle : '';
  return /hoodie/i.test(title) && /personalised/i.test(title) || /hoodie/i.test(handle) && /personalised/i.test(handle);
}

function isPersonalisedTee(p) {
  const title = (p && p.title) ? p.title : '';
  const handle = (p && p.handle) ? p.handle : '';
  const isTee = /t-?shirt/i.test(title) || /t-?shirt/i.test(handle) || /tee/i.test(title) || /tee/i.test(handle);
  return isTee && (/personalised/i.test(title) || /personalised/i.test(handle));
}

const BRAND_REP_TEE_COLOURS = [
  {label: 'Choose T-Shirt Colour', placeholder: true},
  {label: 'Black'},
  {label: 'White'},
  {label: 'Grey'}
];

const BRAND_REP_HOODIE_COLOURS = [
  {label: 'Choose Hoodie Colour', placeholder: true},
  {label: 'Black'},
  {label: 'Grey'}
];

const BRAND_REP_LOGO_COLOURS = [
  {label: 'Choose Logo Colour', placeholder: true},
  {label: 'White'},
  {label: 'Black'},
  {label: 'Grey'},
  {label: 'Light Blue'},
  {label: 'Dark Blue'},
  {label: 'Red'},
  {label: 'Light Purple'},
  {label: 'Purple'},
  {label: 'Gold'},
  {label: 'Silver'},
  {label: 'Light Green'},
  {label: 'Fluorescent Green'},
  {label: 'Rose gold'},
  {label: 'Baby pink'},
  {label: 'Dark Pink'},
  {label: 'Fluorescent Pink'},
  {label: 'Fluorescent Orange'},
  {label: 'Orange'},
  {label: 'Yellow'},
  {label: 'Dark Yellow'},
  {label: 'Fluorescent Yellow'},
  {label: 'Mint'},
  {label: 'Teal'}
];

const BRAND_REP_CLOTHING_SIZES = [
  {label: 'Choose Clothing Size', placeholder: true},
  {label: 'S'},
  {label: 'M'},
  {label: 'L'},
  {label: 'XL'},
  {label: 'XXL'}
];

const BRAND_REP_JACKET_SIZES = [
  {label: 'Choose Clothing Size', placeholder: true},
  {label: 'S'},
  {label: 'M'},
  {label: 'L'},
  {label: 'XL'},
  {label: 'XXL'},
  {label: 'XXXL'}
];

const BRAND_REP_HOODIE_SIZES = [
  {label: 'Choose Size', placeholder: true},
  {label: 'S'},
  {label: 'M'},
  {label: 'L'},
  {label: 'XL'},
  {label: '2XL'},
  {label: '3XL'}
];

const BRAND_REP_LOGO_TYPES = [
  {label: 'Choose Logo Type', placeholder: true},
  {label: 'No Logo'},
  {label: 'Instagram logo'},
  {label: 'Snapchat logo'},
  {label: 'Facebook logo'}
];

function buildSimpleOptionsHtml(list, selectedLabel) {
  return list.map(opt => {
    const isPlaceholder = !!opt.placeholder;
    const value = isPlaceholder ? '' : opt.label;
    const selected = selectedLabel === value ? ' selected' : '';
    const disabled = isPlaceholder ? ' disabled' : '';
    return `<option value="${escapeHtml(value)}"${selected}${disabled}>${escapeHtml(opt.label)}</option>`;
  }).join('');
}

function buildOptionsHtml(list, selectedLabel) {
  return list.map(opt => {
    const isPlaceholder = !!opt.placeholder;
    const value = isPlaceholder ? '' : opt.label;
    const selected = selectedLabel === value ? ' selected' : '';
    const disabled = isPlaceholder ? ' disabled' : '';
    const suffix = opt.price ? ` (+&pound;${opt.price.toFixed(2)})` : '';
    return `<option value="${escapeHtml(value)}"${selected}${disabled} data-price="${opt.price}">${escapeHtml(opt.label)}${suffix}</option>`;
  }).join('');
}

function getOptionPrice(list, label) {
  if (!label) return 0;
  const hit = list.find(opt => opt.label === label);
  return hit ? hit.price : 0;
}

function renderShowPlateOptions(p) {
  const container = document.getElementById('productCustomOptions');
  if (!container) return;
  if (!isShowPlateProduct(p) && !isInstagramDecalProduct(p) && !isNfcInstagramTagProduct(p) && !isOnlyFansNfcTagProduct(p) && !isPersonalisedHoodie(p) && !isPersonalisedTee(p) && !shouldShowBrandRepPersonalisation(p)) {
    container.style.display = 'none';
    container.innerHTML = '';
    return;
  }

  if (isOnlyFansNfcTagProduct(p)) {
    container.innerHTML = `
        <div class="option-row">
          <div class="product-options-label">QUANTITY *</div>
          <select id="onlyFansQtySelect" required>
            ${buildOptionsHtml(NFC_TAG_QUANTITY_OPTIONS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">ONLYFANS WEB LINK (URL) *</div>
          <input id="onlyFansUrl" type="url" placeholder="Enter your OnlyFans link" required>
        </div>
      `;
    container.style.display = 'grid';

    const qtyEl = document.getElementById('onlyFansQtySelect');
    if (qtyEl) qtyEl.addEventListener('change', updateCustomOptionPriceDisplay);
    const urlEl = document.getElementById('onlyFansUrl');
    if (urlEl) urlEl.addEventListener('input', updateCustomOptionPriceDisplay);
    return;
  }

  if (isNfcInstagramTagProduct(p)) {
    container.innerHTML = `
        <div class="option-row">
          <div class="product-options-label">COLOUR *</div>
          <select id="nfcColourSelect" required>
            ${buildOptionsHtml(NFC_TAG_COLOUR_OPTIONS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">QUANTITY *</div>
          <select id="nfcQtySelect" required>
            ${buildOptionsHtml(NFC_TAG_QUANTITY_OPTIONS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">INSTAGRAM NAME *</div>
          <input id="nfcInstagramName" type="text" placeholder="Enter your Instagram name" required>
        </div>
      `;
    container.style.display = 'grid';

    ['nfcColourSelect', 'nfcQtySelect'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('change', updateCustomOptionPriceDisplay);
    });
    const nameEl = document.getElementById('nfcInstagramName');
    if (nameEl) nameEl.addEventListener('input', updateCustomOptionPriceDisplay);
    return;
  }

  if (isInstagramDecalProduct(p)) {
    container.innerHTML = `
        <div class="option-row">
          <div class="product-options-label">FONT CHOICE. *</div>
          <select id="instagramFontSelect" required>
            ${buildOptionsHtml(INSTAGRAM_DECAL_FONT_OPTIONS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">VINYL COLOUR *</div>
          <select id="instagramVinylSelect" required>
            ${buildOptionsHtml(INSTAGRAM_DECAL_VINYL_OPTIONS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">PERSONALISATION TEXT BOX *</div>
          <textarea id="instagramPersonalisation" placeholder="Enter your text" required></textarea>
        </div>
      `;
    container.style.display = 'grid';

    ['instagramFontSelect', 'instagramVinylSelect'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('change', updateCustomOptionPriceDisplay);
    });
    const textEl = document.getElementById('instagramPersonalisation');
    if (textEl) textEl.addEventListener('input', updateCustomOptionPriceDisplay);
    return;
  }

  if (isBrandRepJacketPersonalised(p)) {
    container.innerHTML = `
        <div class="option-row">
          <div class="product-options-label">CLOTHING SIZE *</div>
          <select id="brandRepJacketSize" required>
            ${buildSimpleOptionsHtml(BRAND_REP_JACKET_SIZES, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">PERSONALISATION TEXT BOX *</div>
          <textarea id="brandRepPersonalisation" placeholder="Enter your text" required></textarea>
          <div class="option-note">All text is produced in caps. Double-check spelling before checkout.</div>
        </div>
      `;
    container.style.display = 'grid';
    return;
  }

  if (isBrandRepOfficialHoodie(p)) {
    container.innerHTML = `
        <div class="option-row">
          <div class="product-options-label">SIZE *</div>
          <select id="brandRepHoodieSize" required>
            ${buildSimpleOptionsHtml(BRAND_REP_HOODIE_SIZES, '')}
          </select>
        </div>
      `;
    container.style.display = 'grid';
    return;
  }

  if (isBrandRepOfficialTshirt(p)) {
    container.innerHTML = `
        <div class="option-row">
          <div class="product-options-label">T-SHIRT COLOUR *</div>
          <select id="brandRepTeeColour" required>
            ${buildSimpleOptionsHtml(BRAND_REP_TEE_COLOURS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">LOGO COLOUR *</div>
          <select id="brandRepLogoColour" required>
            ${buildSimpleOptionsHtml(BRAND_REP_LOGO_COLOURS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">CLOTHING SIZE *</div>
          <select id="brandRepClothingSize" required>
            ${buildSimpleOptionsHtml(BRAND_REP_CLOTHING_SIZES, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">PERSONALISATION TEXT BOX *</div>
          <textarea id="brandRepPersonalisation" placeholder="Enter your text" required></textarea>
          <div class="option-note">All text is produced in caps. Double-check spelling before checkout.</div>
        </div>
      `;
    container.style.display = 'grid';
    return;
  }

  if (isPersonalisedTee(p)) {
    container.innerHTML = `
        <div class="option-row">
          <div class="product-options-label">T-SHIRT COLOUR *</div>
          <select id="brandRepTeeColour" required>
            ${buildSimpleOptionsHtml(BRAND_REP_TEE_COLOURS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">LOGO COLOUR *</div>
          <select id="brandRepLogoColour" required>
            ${buildSimpleOptionsHtml(BRAND_REP_LOGO_COLOURS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">CLOTHING SIZE *</div>
          <select id="brandRepClothingSize" required>
            ${buildSimpleOptionsHtml(BRAND_REP_CLOTHING_SIZES, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">PERSONALISATION TEXT BOX *</div>
          <textarea id="brandRepPersonalisation" placeholder="Enter your text" required></textarea>
          <div class="option-note">All text is produced in caps. Double-check spelling before checkout.</div>
        </div>
      `;
    container.style.display = 'grid';
    return;
  }

  if (isPersonalisedHoodie(p)) {
    container.innerHTML = `
        <div class="option-row">
          <div class="product-options-label">HOODIE COLOUR *</div>
          <select id="brandRepHoodieColour" required>
            ${buildSimpleOptionsHtml(BRAND_REP_HOODIE_COLOURS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">LOGO COLOUR *</div>
          <select id="brandRepLogoColour" required>
            ${buildSimpleOptionsHtml(BRAND_REP_LOGO_COLOURS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">CLOTHING SIZE *</div>
          <select id="brandRepClothingSize" required>
            ${buildSimpleOptionsHtml(BRAND_REP_CLOTHING_SIZES, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">LOGO TYPE *</div>
          <select id="brandRepLogoType" required>
            ${buildSimpleOptionsHtml(BRAND_REP_LOGO_TYPES, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">PERSONALISATION TEXT BOX *</div>
          <textarea id="brandRepPersonalisation" placeholder="Enter your text" required></textarea>
          <div class="option-note">All text is produced in caps. Double-check spelling before checkout.</div>
        </div>
      `;
    container.style.display = 'grid';
    return;
  }

  if (isBrandRepTee(p)) {
    container.innerHTML = `
        <div class="option-row">
          <div class="product-options-label">T-SHIRT COLOUR *</div>
          <select id="brandRepTeeColour" required>
            ${buildSimpleOptionsHtml(BRAND_REP_TEE_COLOURS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">LOGO COLOUR *</div>
          <select id="brandRepLogoColour" required>
            ${buildSimpleOptionsHtml(BRAND_REP_LOGO_COLOURS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">CLOTHING SIZE *</div>
          <select id="brandRepClothingSize" required>
            ${buildSimpleOptionsHtml(BRAND_REP_CLOTHING_SIZES, '')}
          </select>
        </div>
        ${isBrandRepTeePersonalised(p) ? `
        <div class="option-row">
          <div class="product-options-label">PERSONALISATION TEXT BOX *</div>
          <textarea id="brandRepPersonalisation" placeholder="Enter your text" required></textarea>
          <div class="option-note">All text is produced in caps. Double-check spelling before checkout.</div>
        </div>` : ``}
      `;
    container.style.display = 'grid';
    return;
  }

  if (shouldShowBrandRepPersonalisation(p) && !isShowPlateProduct(p)) {
    container.innerHTML = `
        <div class="option-row">
          <div class="product-options-label">HOODIE COLOUR *</div>
          <select id="brandRepHoodieColour" required>
            ${buildSimpleOptionsHtml(BRAND_REP_HOODIE_COLOURS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">LOGO COLOUR *</div>
          <select id="brandRepLogoColour" required>
            ${buildSimpleOptionsHtml(BRAND_REP_LOGO_COLOURS, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">CLOTHING SIZE *</div>
          <select id="brandRepClothingSize" required>
            ${buildSimpleOptionsHtml(BRAND_REP_CLOTHING_SIZES, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">LOGO TYPE *</div>
          <select id="brandRepLogoType" required>
            ${buildSimpleOptionsHtml(BRAND_REP_LOGO_TYPES, '')}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">PERSONALISATION TEXT BOX *</div>
          <textarea id="brandRepPersonalisation" placeholder="Enter your text" required></textarea>
          <div class="option-note">All text is produced in caps. Double-check spelling before checkout.</div>
        </div>
      `;
    container.style.display = 'grid';
    return;
  }

  const defaultQuantity = '';
  const defaultBackground = '';
  const defaultText = '';
  const defaultLogo = '';

  container.innerHTML = `
        <div class="option-row">
          <div class="product-options-label">QUANTITY *</div>
          <select id="showPlateQuantitySelect" required>
            ${buildOptionsHtml(SHOW_PLATE_QUANTITY_OPTIONS, defaultQuantity)}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">SHOW PLATE BACKGROUND COLOUR *</div>
          <select id="showPlateBackgroundSelect" required>
            ${buildOptionsHtml(SHOW_PLATE_BACKGROUND_OPTIONS, defaultBackground)}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">SHOW PLATE TEXT COLOUR *</div>
          <select id="showPlateTextSelect" required>
            ${buildOptionsHtml(SHOW_PLATE_TEXT_OPTIONS, defaultText)}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">LOGO TYPE *</div>
          <select id="showPlateLogoSelect" required>
            ${buildOptionsHtml(SHOW_PLATE_LOGO_OPTIONS, defaultLogo)}
          </select>
        </div>
        <div class="option-row">
          <div class="product-options-label">PERSONALISATION TEXT BOX *</div>
          <textarea id="showPlatePersonalisation" placeholder="Enter your text" required></textarea>
          <div class="option-note">All text is produced in caps. Only add @ if you want it on the plate.</div>
        </div>
      `;
  container.style.display = 'grid';

  ['showPlateQuantitySelect','showPlateBackgroundSelect','showPlateTextSelect','showPlateLogoSelect']
    .forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('change', updateCustomOptionPriceDisplay);
    });
  const textEl = document.getElementById('showPlatePersonalisation');
  if (textEl) textEl.addEventListener('input', updateCustomOptionPriceDisplay);
}

function getShowPlateStateFromUI() {
  const getVal = (id) => {
    const el = document.getElementById(id);
    return el ? el.value : '';
  };
  return {
    plateSet: getVal('showPlateQuantitySelect'),
    background: getVal('showPlateBackgroundSelect'),
    textColour: getVal('showPlateTextSelect'),
    logoType: getVal('showPlateLogoSelect'),
    personalisation: (document.getElementById('showPlatePersonalisation') || {}).value || ''
  };
}

function computeShowPlatePriceDelta(state) {
  return getOptionPrice(SHOW_PLATE_QUANTITY_OPTIONS, state.plateSet) +
    getOptionPrice(SHOW_PLATE_BACKGROUND_OPTIONS, state.background) +
    getOptionPrice(SHOW_PLATE_TEXT_OPTIONS, state.textColour);
}

function getNfcTagStateFromUI() {
  const getVal = (id) => {
    const el = document.getElementById(id);
    return el ? el.value : '';
  };
  return {
    colour: getVal('nfcColourSelect'),
    quantity: getVal('nfcQtySelect'),
    instagram: (document.getElementById('nfcInstagramName') || {}).value || ''
  };
}

function computeNfcTagPriceDelta(state) {
  return getOptionPrice(NFC_TAG_COLOUR_OPTIONS, state.colour) +
    getOptionPrice(NFC_TAG_QUANTITY_OPTIONS, state.quantity);
}

function getOnlyFansTagStateFromUI() {
  const getVal = (id) => {
    const el = document.getElementById(id);
    return el ? el.value : '';
  };
  return {
    quantity: getVal('onlyFansQtySelect'),
    url: (document.getElementById('onlyFansUrl') || {}).value || ''
  };
}

function computeOnlyFansTagPriceDelta(state) {
  return getOptionPrice(NFC_TAG_QUANTITY_OPTIONS, state.quantity);
}

function getInstagramDecalStateFromUI() {
  const getVal = (id) => {
    const el = document.getElementById(id);
    return el ? el.value : '';
  };
  return {
    font: getVal('instagramFontSelect'),
    vinyl: getVal('instagramVinylSelect'),
    personalisation: (document.getElementById('instagramPersonalisation') || {}).value || ''
  };
}

function computeInstagramDecalPriceDelta(state) {
  return getOptionPrice(INSTAGRAM_DECAL_VINYL_OPTIONS, state.vinyl);
}

function setProductPriceDisplay(p, price) {
  const wasHtml = p.was ? `<span class="was">£${p.was.toFixed(2)}</span>` : '';
  document.getElementById('productPrice').innerHTML = wasHtml + `£${price.toFixed(2)}`;
}

function updateCustomOptionPriceDisplay() {
  if (!currentProduct) return;
  if (isShowPlateProduct(currentProduct)) {
    const state = getShowPlateStateFromUI();
    const delta = computeShowPlatePriceDelta(state);
    setProductPriceDisplay(currentProduct, currentProduct.price + delta);
    return;
  }
  if (isInstagramDecalProduct(currentProduct)) {
    const state = getInstagramDecalStateFromUI();
    const delta = computeInstagramDecalPriceDelta(state);
    setProductPriceDisplay(currentProduct, currentProduct.price + delta);
    return;
  }
  if (isNfcInstagramTagProduct(currentProduct)) {
    const state = getNfcTagStateFromUI();
    const delta = computeNfcTagPriceDelta(state);
    setProductPriceDisplay(currentProduct, currentProduct.price + delta);
    return;
  }
  if (isOnlyFansNfcTagProduct(currentProduct)) {
    const state = getOnlyFansTagStateFromUI();
    const delta = computeOnlyFansTagPriceDelta(state);
    setProductPriceDisplay(currentProduct, currentProduct.price + delta);
  }
}

function getStickerSizeFromTitle(p) {
  const title = (p && p.title) ? p.title : '';
  const match = title.match(/(\d{2,4})\s*mm/i);
  return match ? match[1] : '';
}

function buildProductDescriptionHtml(p) {
  const showPlateDesc = `<p>520mm x 111mm standard uk size.</p>
    <p>The below show plate sizes are also avalible to order. these will only be avalible through instagram or facebook messenger. please contact us for a price.</p>
    <p>13" x 7" JDM large<br>13" x 6.5" JDM small<br>12" x 6" USA</p>
    <p>business show plates with your logo are also available please message us to discuss options.</p>
    <p>full printed and custom show plates are available. please message to discuss options.</p>
    <p>all will be made using the font in the pictures all in caps lock.</p>
    <p>Before checking out please check your selections carefully. refunds or remakes will not be made for customer error. This includes spelling of instgram names etc.</p>`;

  if (isShowPlateProduct(p)) return showPlateDesc;

  const title = (p && p.title) ? p.title : '';
  const handle = (p && p.handle) ? p.handle : '';
  const isWindscreenBanner = /windscreen banner/i.test(title) || /windscreen-banner/i.test(handle);
  if (isWindscreenBanner) {
    return `<p>500mm windscreen banner</p>
    <p>Please check sticker guide <a class="desc-link" href="#" onclick="showPage('sticker-guide')">here</a>.</p>`;
  }

  if (isStickerProduct(p)) {
    let size = getStickerSizeFromTitle(p);
    if (!size && p && p.handle === 'obsessed-cherry-blossom-decal') size = '250';
    if (size) {
      return `<p>${size}mm medium sticker</p>
    <p>Please check sticker guide <a class="desc-link" href="#" onclick="showPage('sticker-guide')">here</a>.</p>`;
    }
  }

  return '';
}

// ── PRODUCT DETAIL ──────────────────────────────────────
function showProductDetail(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentProduct = p; currentQty = 1; currentSize = null;
  const img = normalizeImageUrl(p.img || (p.images && p.images[0])) || 'https://via.placeholder.com/800x800/111/333?text=OB';
  document.getElementById('mainProductImg').src = img;
  document.getElementById('productTitle').textContent = p.title;
  setProductPriceDisplay(p, p.price);
  document.getElementById('productDesc').innerHTML = buildProductDescriptionHtml(p);
  document.getElementById('productBreadcrumbName').textContent = p.title;
  document.getElementById('qtyDisplay').textContent = 1;
  const sw = document.getElementById('productSizesWrapper');
  const se = document.getElementById('productSizes');
  if (p.sizes && p.sizes.length) {
    sw.style.display = 'block';
    se.innerHTML = p.sizes.map(s => `<button class="size-btn" onclick="selectSize(this,'${s}')">${s}</button>`).join('');
  } else { sw.style.display = 'none'; }
  renderShowPlateOptions(p);
  updateCustomOptionPriceDisplay();
  document.getElementById('productThumbs').innerHTML = `<div class="thumb active" onclick="window.open('https://obsessedbrand.uk/products/${p.handle}','_blank')"><img src="${p.img}" alt="${p.title}"/></div>`;
  showPage('product');
}
function selectSize(btn, size) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active'); currentSize = size;
}
function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById('qtyDisplay').textContent = currentQty;
}
function addToCartFromDetail() {
  if (!currentProduct) return;
  if (currentProduct.sizes && currentProduct.sizes.length && !currentSize) { showToast('Please select a size','SIZE REQUIRED'); return; }
  let options = null;
  let unitPrice = null;
  if (isShowPlateProduct(currentProduct)) {
    const state = getShowPlateStateFromUI();
    const personalTrimmed = (state.personalisation || '').trim();
    if (!state.plateSet || !state.background || !state.textColour || !state.logoType || !personalTrimmed) {
      showToast('Please complete all customisation fields','REQUIRED');
      return;
    }
    const delta = computeShowPlatePriceDelta(state);
    unitPrice = currentProduct.price + delta;
    const personal = personalTrimmed;
    options = [
      `Quantity: ${state.plateSet}`,
      `Background: ${state.background}`,
      `Text Colour: ${state.textColour}`,
      `Logo Type: ${state.logoType}`,
      `Personalisation: ${personal}`
    ];
  } else if (isInstagramDecalProduct(currentProduct)) {
    const state = getInstagramDecalStateFromUI();
    const personal = (state.personalisation || '').trim();
    if (!state.font || !state.vinyl || !personal) {
      showToast('Please complete all customisation fields','REQUIRED');
      return;
    }
    const delta = computeInstagramDecalPriceDelta(state);
    unitPrice = currentProduct.price + delta;
    options = [
      `Font Choice: ${state.font}`,
      `Vinyl Colour: ${state.vinyl}`,
      `Personalisation: ${personal}`
    ];
  } else if (isNfcInstagramTagProduct(currentProduct)) {
    const state = getNfcTagStateFromUI();
    const name = (state.instagram || '').trim();
    if (!state.colour || !state.quantity || !name) {
      showToast('Please complete all customisation fields','REQUIRED');
      return;
    }
    const delta = computeNfcTagPriceDelta(state);
    unitPrice = currentProduct.price + delta;
    options = [
      `Colour: ${state.colour}`,
      `Quantity: ${state.quantity}`,
      `Instagram Name: ${name}`
    ];
  } else if (isOnlyFansNfcTagProduct(currentProduct)) {
    const state = getOnlyFansTagStateFromUI();
    const url = (state.url || '').trim();
    if (!state.quantity || !url) {
      showToast('Please complete all customisation fields','REQUIRED');
      return;
    }
    const delta = computeOnlyFansTagPriceDelta(state);
    unitPrice = currentProduct.price + delta;
    options = [
      `Quantity: ${state.quantity}`,
      `OnlyFans URL: ${url}`
    ];
  } else if (isPersonalisedTee(currentProduct)) {
    const teeColour = ((document.getElementById('brandRepTeeColour') || {}).value || '').trim();
    const logoColour = ((document.getElementById('brandRepLogoColour') || {}).value || '').trim();
    const clothingSize = ((document.getElementById('brandRepClothingSize') || {}).value || '').trim();
    const personal = ((document.getElementById('brandRepPersonalisation') || {}).value || '').trim();
    if (!teeColour || !logoColour || !clothingSize || !personal) {
      showToast('Please complete all required fields','REQUIRED');
      return;
    }
    options = [
      `T-Shirt Colour: ${teeColour}`,
      `Logo Colour: ${logoColour}`,
      `Clothing Size: ${clothingSize}`,
      `Personalisation: ${personal}`
    ];
  } else if (isPersonalisedHoodie(currentProduct)) {
    const hoodie = ((document.getElementById('brandRepHoodieColour') || {}).value || '').trim();
    const logoColour = ((document.getElementById('brandRepLogoColour') || {}).value || '').trim();
    const clothingSize = ((document.getElementById('brandRepClothingSize') || {}).value || '').trim();
    const logoType = ((document.getElementById('brandRepLogoType') || {}).value || '').trim();
    const personal = ((document.getElementById('brandRepPersonalisation') || {}).value || '').trim();
    if (!hoodie || !logoColour || !clothingSize || !logoType || !personal) {
      showToast('Please complete all personalisation fields','REQUIRED');
      return;
    }
    options = [
      `Hoodie Colour: ${hoodie}`,
      `Logo Colour: ${logoColour}`,
      `Clothing Size: ${clothingSize}`,
      `Logo Type: ${logoType}`,
      `Personalisation: ${personal}`
    ];
  } else if (shouldShowBrandRepPersonalisation(currentProduct)) {
    if (isBrandRepJacketPersonalised(currentProduct)) {
      const clothingSize = ((document.getElementById('brandRepJacketSize') || {}).value || '').trim();
      const personal = ((document.getElementById('brandRepPersonalisation') || {}).value || '').trim();
      if (!clothingSize || !personal) {
        showToast('Please complete all required fields','REQUIRED');
        return;
      }
      options = [
        `Clothing Size: ${clothingSize}`,
        `Personalisation: ${personal}`
      ];
    } else if (isBrandRepOfficialHoodie(currentProduct)) {
      const size = ((document.getElementById('brandRepHoodieSize') || {}).value || '').trim();
      if (!size) {
        showToast('Please select a size','REQUIRED');
        return;
      }
      options = [`Size: ${size}`];
    } else if (isBrandRepOfficialTshirt(currentProduct)) {
      const teeColour = ((document.getElementById('brandRepTeeColour') || {}).value || '').trim();
      const logoColour = ((document.getElementById('brandRepLogoColour') || {}).value || '').trim();
      const clothingSize = ((document.getElementById('brandRepClothingSize') || {}).value || '').trim();
      const personal = ((document.getElementById('brandRepPersonalisation') || {}).value || '').trim();
      if (!teeColour || !logoColour || !clothingSize || !personal) {
        showToast('Please complete all required fields','REQUIRED');
        return;
      }
      options = [
        `T-Shirt Colour: ${teeColour}`,
        `Logo Colour: ${logoColour}`,
        `Clothing Size: ${clothingSize}`,
        `Personalisation: ${personal}`
      ];
    } else if (isBrandRepTee(currentProduct)) {
      const teeColour = ((document.getElementById('brandRepTeeColour') || {}).value || '').trim();
      const logoColour = ((document.getElementById('brandRepLogoColour') || {}).value || '').trim();
      const clothingSize = ((document.getElementById('brandRepClothingSize') || {}).value || '').trim();
      const personal = ((document.getElementById('brandRepPersonalisation') || {}).value || '').trim();
      if (!teeColour || !logoColour || !clothingSize || (isBrandRepTeePersonalised(currentProduct) && !personal)) {
        showToast('Please complete all required fields','REQUIRED');
        return;
      }
      options = [
        `T-Shirt Colour: ${teeColour}`,
        `Logo Colour: ${logoColour}`,
        `Clothing Size: ${clothingSize}`
      ];
      if (isBrandRepTeePersonalised(currentProduct)) {
        options.push(`Personalisation: ${personal}`);
      }
    } else {
      const hoodie = ((document.getElementById('brandRepHoodieColour') || {}).value || '').trim();
      const logoColour = ((document.getElementById('brandRepLogoColour') || {}).value || '').trim();
      const clothingSize = ((document.getElementById('brandRepClothingSize') || {}).value || '').trim();
      const logoType = ((document.getElementById('brandRepLogoType') || {}).value || '').trim();
      const personal = ((document.getElementById('brandRepPersonalisation') || {}).value || '').trim();
      if (!hoodie || !logoColour || !clothingSize || !logoType || !personal) {
        showToast('Please complete all personalisation fields','REQUIRED');
        return;
      }
      options = [
        `Hoodie Colour: ${hoodie}`,
        `Logo Colour: ${logoColour}`,
        `Clothing Size: ${clothingSize}`,
        `Logo Type: ${logoType}`,
        `Personalisation: ${personal}`
      ];
    }
  }
  addToCart(currentProduct, currentQty, currentSize, options, unitPrice);
}

// ── CART ────────────────────────────────────────────────
function addToCart(product, qty=1, size=null, options=null, unitPrice=null) {
  const optionKey = options && options.length ? '-opts:' + encodeURIComponent(options.join('|')) : '';
  const key = product.id + (size?'-'+size:'') + optionKey;
  const ex = cart.find(i => i.key === key);
  if (ex) ex.qty += qty;
  else cart.push({key, product, qty, size, options, unitPrice});
  updateCartBadge();
  showToast(product.title + (size?' ('+size+')':''), 'ADDED TO CART');
}
function updateCartBadge() {
  document.getElementById('cartBadge').textContent = cart.reduce((s,i)=>s+i.qty,0);
}
function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  updateCartBadge(); renderCart();
}
function renderCart() {
  const el = document.getElementById('cartContent');
  if (!cart.length) {
    el.innerHTML = `<div class="empty-cart"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--border)" stroke-width="1.5" style="margin:0 auto 20px"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><h2>YOUR CART IS EMPTY</h2><p>Looks like you haven't added anything yet.</p><button class="btn btn-primary" onclick="showCollection('all')">SHOP NOW</button></div>`;
    return;
  }
  const subtotal = cart.reduce((s,i)=>s+(((i.unitPrice !== null && i.unitPrice !== undefined) ? i.unitPrice : i.product.price)*i.qty),0);
  const shipping = 3.99;
  const total = subtotal + shipping;
  const cartHtml = `<div class="cart-layout"><div>${cart.map(item=>{
    const unit = (item.unitPrice !== null && item.unitPrice !== undefined) ? item.unitPrice : item.product.price;
    const lineTotal = unit * item.qty;
    const optionHtml = item.options && item.options.length ? `<div class="cart-item-options">${item.options.map(o => escapeHtml(o)).join(' | ')}</div>` : '';
    return `<div class="cart-item"><div class="cart-item-img"><img src="${item.product.img}" alt="${item.product.title}"/></div><div><div class="cart-item-name">${item.product.title}</div><div class="cart-item-variant">${item.size?'Size: '+item.size+' Â· ':''}Qty: ${item.qty}</div>${optionHtml}</div><div><div class="cart-item-price">£${lineTotal.toFixed(2)}</div><span class="cart-item-remove" onclick="removeFromCart('${item.key}')">REMOVE</span></div></div>`;
  }).join('')}</div><div class="cart-summary"><h3>ORDER SUMMARY</h3><div class="summary-row"><span>SUBTOTAL</span><span>£${subtotal.toFixed(2)}</span></div><div class="summary-row"><span>SHIPPING</span><span>£${shipping.toFixed(2)}</span></div><div class="summary-row total"><span>TOTAL</span><span>£${total.toFixed(2)}</span></div><button class="checkout-btn" onclick="proceedToCheckout()">PROCEED TO CHECKOUT →</button><button class="btn btn-outline" style="width:100%;justify-content:center;margin-top:10px" onclick="showCollection('all')">CONTINUE SHOPPING</button></div></div>`;
  el.innerHTML = cartHtml;
  return;
  el.innerHTML = `<div class="cart-layout"><div>${cart.map(item=>`<div class="cart-item"><div class="cart-item-img"><img src="${item.product.img}" alt="${item.product.title}"/></div><div><div class="cart-item-name">${item.product.title}</div><div class="cart-item-variant">${item.size?'Size: '+item.size+' · ':''}Qty: ${item.qty}</div></div><div><div class="cart-item-price">£${(item.product.price*item.qty).toFixed(2)}</div><span class="cart-item-remove" onclick="removeFromCart('${item.key}')">REMOVE</span></div></div>`).join('')}</div><div class="cart-summary"><h3>ORDER SUMMARY</h3><div class="summary-row"><span>SUBTOTAL</span><span>£${subtotal.toFixed(2)}</span></div><div class="summary-row"><span>SHIPPING</span><span>£${shipping.toFixed(2)}</span></div><div class="summary-row total"><span>TOTAL</span><span>£${total.toFixed(2)}</span></div><button class="checkout-btn" onclick="proceedToCheckout()">PROCEED TO CHECKOUT →</button><button class="btn btn-outline" style="width:100%;justify-content:center;margin-top:10px" onclick="showCollection('all')">CONTINUE SHOPPING</button></div></div>`;
}
async function fetchShopifyProductByHandle(handle) {
  const url = `https://obsessedbrand.uk/products/${handle}.js`;
  const res = await fetch(url, { mode: 'cors', credentials: 'include' });
  if (!res.ok) throw new Error('Product fetch failed');
  return res.json();
}

function pickVariantId(productJson, size) {
  if (!productJson || !Array.isArray(productJson.variants) || !productJson.variants.length) return null;
  if (!size) return productJson.variants[0].id;
  const target = String(size).toLowerCase();
  const match = productJson.variants.find(v => {
    return [v.option1, v.option2, v.option3].some(opt => (opt || '').toLowerCase() === target);
  });
  return (match || productJson.variants[0]).id;
}

function optionsArrayToProperties(options) {
  if (!options || !options.length) return undefined;
  const props = {};
  options.forEach((opt, idx) => {
    const str = String(opt || '');
    const split = str.split(':');
    if (split.length >= 2) {
      const key = split.shift().trim() || `Option ${idx + 1}`;
      const val = split.join(':').trim();
      props[key] = val;
    } else {
      props[`Option ${idx + 1}`] = str;
    }
  });
  return props;
}

async function clearShopifyCart() {
  await fetch('https://obsessedbrand.uk/cart/clear.js', {
    method: 'POST',
    mode: 'cors',
    credentials: 'include'
  });
}

async function addShopifyCartItems(items) {
  const res = await fetch('https://obsessedbrand.uk/cart/add.js', {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items })
  });
  if (!res.ok) throw new Error('Add to cart failed');
  return res.json();
}

async function proceedToCheckout() {
  try {
    if (!cart || !cart.length) { showToast('Your cart is empty','CART'); return; }
    const isSameOrigin = window.location.hostname === 'obsessedbrand.uk';
    const items = [];
    for (const item of cart) {
      const handle = (item.product && item.product.handle) ? item.product.handle : null;
      if (!handle) continue;
      const productJson = await fetchShopifyProductByHandle(handle);
      const variantId = pickVariantId(productJson, item.size);
      if (!variantId) continue;
      items.push({
        id: variantId,
        quantity: item.qty || 1,
        properties: optionsArrayToProperties(item.options)
      });
    }
    if (!items.length) { showToast('Could not prepare checkout items','ERROR'); return; }
    await clearShopifyCart();
    await addShopifyCartItems(items);
    window.location.href = 'https://obsessedbrand.uk/checkout';
  } catch (err) {
    console.error(err);
    if (!isSameOrigin) {
      showToast('Checkout failed. Please test on obsessedbrand.uk or add the Storefront API token for local checkout.','ERROR');
    } else {
      showToast('Checkout failed. Please try again.','ERROR');
    }
  }
}

// ── TOAST ────────────────────────────────────────────────
function showToast(msg, title='NOTIFICATION') {
  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastMsg').textContent = msg;
  const t = document.getElementById('toast');
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}

// ── MOBILE MENU ──────────────────────────────────────────
function toggleMobileMenu() {
  const o = document.getElementById('mobileOverlay');
  o.style.display = o.style.display==='flex'?'none':'flex';
}

// Ensure inline handlers can access these functions in all environments
window.showPage = showPage;
window.showCollection = showCollection;
window.navGo = navGo;
window.toggleNav = toggleNav;
window.toggleMobileMenu = toggleMobileMenu;
window.addToCartFromDetail = addToCartFromDetail;
window.changeQty = changeQty;
window.selectSize = selectSize;

// ── MISC ─────────────────────────────────────────────────
function subscribeNewsletter() { showToast('Thanks for subscribing! 🚗','SUBSCRIBED'); }
function submitContact() { showToast("Message sent! We'll be in touch soon.",'MESSAGE SENT'); }
function submitRepApplication() {
  const fields = [
    'repName','repInstagram','repCar','repLocation','repWhy','repValue','repAbout','repMerch'
  ];
  const missing = fields.some(id => {
    const el = document.getElementById(id);
    return !el || !String(el.value || '').trim();
  });
  if (missing) { showToast('Please complete all fields','REQUIRED'); return; }
  showToast("Application submitted! We'll be in touch soon.",'REP APPLICATION');
}

const GIFT_CARD_DENOMS = [5, 10, 15, 20, 25, 30, 40, 50, 75, 100];
let giftCardAmount = 5;
let giftCardQty = 1;

// ── SHOPIFY STOREFRONT (FILL THESE IN) ─────────────────────────
const STOREFRONT_DOMAIN = 'obsessedbrand.myshopify.com';
const STOREFRONT_API_VERSION = '2024-07';
const STOREFRONT_TOKEN = 'PASTE_STOREFRONT_TOKEN_HERE';
const TEST_ACCOUNT_ENABLED = true;
const TEST_ACCOUNT_EMAIL = 'test@obsessedbrand.local';
const TEST_ACCOUNT_PASSWORD = 'obsessed123';

async function shopifyGql(query, variables = {}) {
  if (!STOREFRONT_TOKEN || STOREFRONT_TOKEN.includes('PASTE_')) {
    throw new Error('Storefront token missing');
  }
  const res = await fetch(`https://${STOREFRONT_DOMAIN}/api/${STOREFRONT_API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN
    },
    body: JSON.stringify({ query, variables })
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors.map(e => e.message).join(', '));
  return json.data;
}

async function loginCustomer() {
  try {
    const email = (document.getElementById('accountEmail') || {}).value || '';
    const password = (document.getElementById('accountPassword') || {}).value || '';
    if (!email.trim() || !password.trim()) {
      showToast('Please enter email and password','REQUIRED');
      return;
    }
    if (TEST_ACCOUNT_ENABLED && email === TEST_ACCOUNT_EMAIL && password === TEST_ACCOUNT_PASSWORD) {
      localStorage.setItem('localTestAccount', '1');
      updateAccountUI({
        firstName: 'Test',
        lastName: 'Account',
        email,
        orders: {
          edges: [
            { node: { orderNumber: 1001, processedAt: new Date().toISOString(), financialStatus: 'PAID', fulfillmentStatus: 'UNFULFILLED', totalPriceV2: { amount: '20.00', currencyCode: 'GBP' }, lineItems: { edges: [{ node: { title: 'TEST PRODUCT', quantity: 1 } }] } } }
          ]
        }
      });
      return;
    }
    const mutation = `
      mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
        customerAccessTokenCreate(input: $input) {
          customerAccessToken { accessToken expiresAt }
          customerUserErrors { message }
        }
      }`;
    const data = await shopifyGql(mutation, { input: { email, password } });
    const payload = data.customerAccessTokenCreate;
    if (payload.customerUserErrors && payload.customerUserErrors.length) {
      showToast(payload.customerUserErrors[0].message, 'LOGIN FAILED');
      return;
    }
    const token = payload.customerAccessToken.accessToken;
    localStorage.setItem('shopifyCustomerToken', token);
    await loadCustomerAccount();
  } catch (err) {
    showToast('Login failed. Check token and credentials.', 'ERROR');
    console.error(err);
  }
}

function logoutCustomer() {
  localStorage.removeItem('shopifyCustomerToken');
  localStorage.removeItem('localTestAccount');
  updateAccountUI(null);
}

async function loadCustomerAccount() {
  const token = localStorage.getItem('shopifyCustomerToken');
  if (localStorage.getItem('localTestAccount') === '1') {
    updateAccountUI({
      firstName: 'Test',
      lastName: 'Account',
      email: TEST_ACCOUNT_EMAIL,
      orders: {
        edges: [
          { node: { orderNumber: 1001, processedAt: new Date().toISOString(), financialStatus: 'PAID', fulfillmentStatus: 'UNFULFILLED', totalPriceV2: { amount: '20.00', currencyCode: 'GBP' }, lineItems: { edges: [{ node: { title: 'TEST PRODUCT', quantity: 1 } }] } } }
        ]
      }
    });
    return;
  }
  if (!token) { updateAccountUI(null); return; }
  try {
    const query = `
      query customer($token: String!) {
        customer(customerAccessToken: $token) {
          firstName
          lastName
          email
          orders(first: 10, sortKey: PROCESSED_AT, reverse: true) {
            edges {
              node {
                orderNumber
                processedAt
                financialStatus
                fulfillmentStatus
                totalPriceV2 { amount currencyCode }
                lineItems(first: 10) {
                  edges { node { title quantity } }
                }
              }
            }
          }
        }
      }`;
    const data = await shopifyGql(query, { token });
    updateAccountUI(data.customer);
  } catch (err) {
    console.error(err);
    showToast('Could not load account. Please log in again.', 'ERROR');
    logoutCustomer();
  }
}

function updateAccountUI(customer) {
  const login = document.getElementById('accountLogin');
  const logged = document.getElementById('accountLoggedIn');
  const sub = document.getElementById('accountSub');
  if (!login || !logged || !sub) return;

  if (!customer) {
    login.style.display = 'block';
    logged.style.display = 'none';
    sub.textContent = 'Log in to view your orders.';
    return;
  }

  login.style.display = 'none';
  logged.style.display = 'block';
  sub.textContent = 'Your recent orders:';

  const name = [customer.firstName, customer.lastName].filter(Boolean).join(' ') || 'Customer';
  document.getElementById('accountName').textContent = name;
  document.getElementById('accountEmailDisplay').textContent = customer.email || '';

  const ordersEl = document.getElementById('accountOrders');
  const edges = (customer.orders && customer.orders.edges) ? customer.orders.edges : [];
  if (!ordersEl) return;
  if (!edges.length) {
    ordersEl.innerHTML = `<div class="order-card"><div class="order-meta">No orders yet.</div></div>`;
    return;
  }
  ordersEl.innerHTML = edges.map(({ node }) => {
    const items = (node.lineItems && node.lineItems.edges) ? node.lineItems.edges : [];
    const itemText = items.map(i => `${i.node.title} ×${i.node.quantity}`).join(' • ');
    const total = node.totalPriceV2 ? `${node.totalPriceV2.amount} ${node.totalPriceV2.currencyCode}` : '';
    return `<div class="order-card">
      <h4>Order #${node.orderNumber}</h4>
      <div class="order-meta">${new Date(node.processedAt).toLocaleDateString()} • ${node.financialStatus || ''} • ${node.fulfillmentStatus || ''}</div>
      <div class="order-meta">${total}</div>
      <div class="order-meta" style="margin-top:6px">${itemText}</div>
    </div>`;
  }).join('');
}

function renderGiftCardDenoms() {
  const wrap = document.getElementById('giftCardDenoms');
  if (!wrap) return;
  wrap.innerHTML = GIFT_CARD_DENOMS.map(val => {
    const active = val === giftCardAmount ? 'active' : '';
    return `<button class="${active}" onclick="selectGiftCardDenom(${val})">£${val}</button>`;
  }).join('');
}

function selectGiftCardDenom(val) {
  giftCardAmount = val;
  const priceEl = document.getElementById('giftCardPrice');
  if (priceEl) priceEl.textContent = `£${val.toFixed(2)}`;
  renderGiftCardDenoms();
}

function changeGiftCardQty(delta) {
  giftCardQty = Math.max(1, giftCardQty + delta);
  const q = document.getElementById('giftCardQty');
  if (q) q.textContent = giftCardQty;
}

function addGiftCardToCart() {
  const product = {
    id: 'gift-card',
    handle: 'obsessed-brand-gift-card',
    title: 'OBSESSED BRAND GIFT CARD',
    price: giftCardAmount,
    img: ''
  };
  const options = [`Denomination: £${giftCardAmount.toFixed(2)}`];
  addToCart(product, giftCardQty, null, options, giftCardAmount);
}

// ── CAR CLUBS GRID ───────────────────────────────────────
const carClubs = [
  {name:'ALL WHEELS UK',slug:'all-wheels-uk'},{name:'AUDI TT ADDICTS',slug:'audi-tt-addicts'},
  {name:'AUTO SOCIETY',slug:'auto-society'},{name:'ARCANE AUTOS',slug:'arcane-autos'},
  {name:'AYRSHORE CRUISERS',slug:'ayrshore-cruisers'},{name:'BOOSTOLOGY',slug:'boostology'},
  {name:'BROKEN SPANNERZ',slug:'broken-spannerz'},{name:'DISTORTED',slug:'distorted'},
  {name:'DISTORTED REP',slug:'distorted-rep'},{name:'DYNASTY',slug:'dynasty'},
  {name:'FORD ELITE',slug:'ford-elite'},{name:'FORD GRANADA CLUB',slug:'fordgranadaclub'},
  {name:'FORD CAR CLUB UK',slug:'ford-car-club-uk'},{name:'GIRLSCARGANG',slug:'girlscargang'},
  {name:'GUYS GIRLS & CARS',slug:'guys-girls-cars'},{name:'INSTA CARMUNITY',slug:'insta_carmunity'},
  {name:'INSANITY',slug:'insanity'},{name:'JUST FORDS',slug:'just-fords'},
  {name:'MISGUIDED',slug:'misguided'},{name:'MODIFIED BRISTOL',slug:'modified-bristol'},
  {name:'MODDED CAR CLUB',slug:'modded-car-club'},{name:'NEFO',slug:'north-east-ford-owners'},
  {name:'OFFBRANDEDUK',slug:'offbrandeduk'},{name:'OUTCASTED',slug:'outcasted'},
  {name:'REFORMED AUTOMOTIVE',slug:'reformed-automotive'},
  {name:'SCOTTISH CAR PHOTOGRAPHY',slug:'scottish-car-photography-locations'},
  {name:'SMKDUK',slug:'smkduk'},{name:'SOUTH COAST TT',slug:'southcoastt'},
  {name:'SOUTHWEST UNELITE',slug:'southwest-unelite'},{name:'TRVISIONS',slug:'trvisions'},
  {name:'UNIQUE FORDS',slug:'unique-fords'},{name:'UNITED ROVER',slug:'united-rover'},
  {name:'WDS',slug:'wds-public'}
];
function initCarClubsGrid() {
  const g = document.getElementById('carClubsGrid');
  if (!g) return;
  g.innerHTML = carClubs.map(c=>`<div onclick="showCollection('${c.slug}')" style="background:var(--card);border:1px solid var(--border);padding:24px 16px;text-align:center;cursor:pointer;transition:border-color 0.2s,transform 0.2s" onmouseover="this.style.borderColor='var(--red)';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='var(--border)';this.style.transform=''"><div style="font-family:var(--font-display);font-size:18px;letter-spacing:1px;margin-bottom:6px">${c.name}</div><div style="font-family:var(--font-cond);font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--red)">VIEW MERCH →</div></div>`).join('');
}

function initCustomStickerCalculator() {
  const root = document.getElementById('sc-root');
  if (!root) return;

  var VARIANT_ID = '{{ product.variants.first.id }}';
  var rollWidth = 700;
  var gap = 3;
  var pricePerMetre = 9;
  var markup = 2.5;
  var setup = 8;

  var width = 50, height = 50, shapeMul = 1, finishMul = 1;
  var shapeName = 'Square', finishName = 'Gloss';
  var currentPrice = 0;

  var $ = function(s) { return document.querySelector(s); };
  var $$ = function(s) { return document.querySelectorAll(s); };

  $$('.sc-size').forEach(function(btn) {
    btn.addEventListener('click', function() {
      $$('.sc-size').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      if (btn.dataset.w === 'custom') {
        $('#sc-customSizeInputs').style.display = 'grid';
      } else {
        $('#sc-customSizeInputs').style.display = 'none';
        width = parseFloat(btn.dataset.w);
        height = parseFloat(btn.dataset.h);
      }
      calculate();
    });
  });

  $('#sc-cw').addEventListener('input', function() { width = parseFloat(this.value) || 50; calculate(); });
  $('#sc-ch').addEventListener('input', function() { height = parseFloat(this.value) || 50; calculate(); });

  $$('.sc-shape').forEach(function(btn) {
    btn.addEventListener('click', function() {
      $$('.sc-shape').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      shapeMul = parseFloat(btn.dataset.v);
      shapeName = btn.dataset.name;
      calculate();
    });
  });

  $$('.sc-finish').forEach(function(btn) {
    btn.addEventListener('click', function() {
      $$('.sc-finish').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      finishMul = parseFloat(btn.dataset.v);
      finishName = btn.dataset.name;
      calculate();
    });
  });

  $('#sc-qty').addEventListener('change', function() {
    if (this.value === 'custom') {
      $('#sc-customQtyWrap').classList.add('visible');
      $('#sc-customQty').focus();
    } else {
      $('#sc-customQtyWrap').classList.remove('visible');
      $('#sc-qtyError').style.display = 'none';
    }
    calculate();
  });

  $('#sc-customQty').addEventListener('input', function() {
    var v = parseInt(this.value);
    $('#sc-qtyError').style.display = (!v || v < 1) ? 'block' : 'none';
    calculate();
  });

  function getQty() {
    var sel = $('#sc-qty').value;
    if (sel === 'custom') {
      var v = parseInt($('#sc-customQty').value);
      return (v && v >= 1) ? v : null;
    }
    return parseInt(sel);
  }

  function calculate() {
    var q = getQty();
    var atc = $('#sc-atc');

    if (!q) {
      $('#sc-price').textContent = '£-';
      $('#sc-persticker').textContent = '- per sticker';
      $('#sc-sQty').textContent = '-';
      atc.disabled = true;
      atc.textContent = 'Add to Cart';
      return;
    }

    var across = Math.max(1, Math.floor(rollWidth / (width + gap)));
    var metres = (Math.ceil(q / across) * (height + gap)) / 1000;
    var price = (metres * pricePerMetre * markup) + setup;

    var minPerSticker =
      q >= 5000 ? 0.20 : q >= 2000 ? 0.25 : q >= 1000 ? 0.30 :
      q >= 500 ? 0.35 : q >= 250 ? 0.40 : q >= 100 ? 0.45 : 0.50;

    price = Math.max(price, q * minPerSticker, 15) * finishMul * shapeMul;
    currentPrice = price;

    $('#sc-price').textContent = '£' + price.toFixed(2);
    $('#sc-persticker').textContent = '£' + (price / q).toFixed(2) + ' per sticker';
    $('#sc-sSize').textContent = width + ' x ' + height + ' mm';
    $('#sc-sShape').textContent = shapeName;
    $('#sc-sFinish').textContent = finishName;
    $('#sc-sQty').textContent = q.toLocaleString();

    atc.disabled = false;
    atc.textContent = 'Add to Cart - £' + price.toFixed(2);
  }

  $('#sc-atc').addEventListener('click', function() {
    var q = getQty();
    if (!q) return;

    var btn = this;
    btn.disabled = true;
    btn.textContent = 'Adding...';
    hideFeedback();

    var artworkFile = $('#sc-artwork').files[0];
    var artworkNote = artworkFile ? artworkFile.name : 'Not provided';

    var properties = {
      'Size': width + ' x ' + height + ' mm',
      'Shape': shapeName,
      'Finish': finishName,
      'Quantity': q.toString(),
      'Proof': $('#sc-proof').value,
      'Artwork': artworkNote,
      'Notes': $('#sc-notes').value || 'None',
      'Unit Price': '£' + (currentPrice / q).toFixed(4),
      'Total Price': '£' + currentPrice.toFixed(2)
    };

    fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: VARIANT_ID,
        quantity: 1,
        properties: properties
      })
    })
    .then(function(res) {
      if (!res.ok) throw new Error('Cart error ' + res.status);
      return res.json();
    })
    .then(function() {
      showFeedback('success', 'Added to your cart!');
      btn.textContent = 'Added to Cart';
      setTimeout(function() {
        btn.disabled = false;
        btn.textContent = 'Add to Cart - £' + currentPrice.toFixed(2);
        hideFeedback();
      }, 3000);
    })
    .catch(function(err) {
      console.error('Sticker calculator error:', err);
      showFeedback('error', 'Something went wrong - please try again.');
      btn.disabled = false;
      btn.textContent = 'Add to Cart - £' + currentPrice.toFixed(2);
    });
  });

  function showFeedback(type, msg) {
    var el = $('#sc-feedback');
    el.className = 'sc-feedback ' + type;
    el.textContent = msg;
  }
  function hideFeedback() {
    var el = $('#sc-feedback');
    el.className = 'sc-feedback';
    el.textContent = '';
  }

  calculate();
}

function renderProductCard(p) {
  const candidates = buildImageCandidates(p);
  const img = candidates[0] || 'https://via.placeholder.com/400x400/111/333?text=OB';
  const dataSrcs = candidates.join('||');
  const wasHtml = p.was ? `<span class="was">£${p.was.toFixed(2)}</span>` : '';
  const badge = p.badge ? `<div class="${p.badge==='SALE'?'badge-sale':'badge-new'}">${p.badge}</div>` : '';
  const id = p.id.replace(/'/g,"\\'");
  return `<div class="product-card" onclick="showProductDetail('${id}')">
    ${badge}
    <div class="product-card-img"><img src="${img}" alt="${p.title}" loading="lazy" data-srcs="${dataSrcs}" data-src-index="0" onerror="cycleImageFallback(this)"/></div>
    <div class="product-card-info">
      <h4>${p.title}</h4>
      <div class="product-price">${wasHtml}<span class="${p.was?'sale':''}">£${p.price.toFixed(2)}</span></div>
    </div>
  </div>`;
}

function showProductDetail(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentProduct = p; currentQty = 1; currentSize = null;
  const candidates = buildImageCandidates(p);
  const img = candidates[0] || 'https://via.placeholder.com/800x800/111/333?text=OB';
  const mainImg = document.getElementById('mainProductImg');
  mainImg.src = img;
  mainImg.dataset.srcs = candidates.join('||');
  mainImg.dataset.srcIndex = '0';
  mainImg.onerror = function() { cycleImageFallback(this); };
  document.getElementById('productTitle').textContent = p.title;
  setProductPriceDisplay(p, p.price);
  document.getElementById('productDesc').innerHTML = buildProductDescriptionHtml(p);
  document.getElementById('productBreadcrumbName').textContent = p.title;
  document.getElementById('qtyDisplay').textContent = 1;
  const sw = document.getElementById('productSizesWrapper');
  const se = document.getElementById('productSizes');
  if (p.sizes && p.sizes.length) {
    sw.style.display = 'block';
    se.innerHTML = p.sizes.map(s => `<button class="size-btn" onclick="selectSize(this,'${s}')">${s}</button>`).join('');
  } else { sw.style.display = 'none'; }
  renderShowPlateOptions(p);
  updateCustomOptionPriceDisplay();
  document.getElementById('productThumbs').innerHTML = `<div class="thumb active" onclick="window.open('https://obsessedbrand.uk/products/${p.handle}','_blank')"><img src="${img}" alt="${p.title}" onerror="cycleImageFallback(this)"/></div>`;
  showPage('product');
}

// ── INIT ─────────────────────────────────────────────────
renderProductGrid('homeFeatured', products.slice(0, 8));
initCarClubsGrid();
initCustomStickerCalculator();
renderGiftCardDenoms();
loadCustomerAccount();
loadLocalProducts()
  .then(() => { renderProductGrid('homeFeatured', products.slice(0, 8)); })
  .catch(() => loadShopifyProducts().then(() => { renderProductGrid('homeFeatured', products.slice(0, 8)); }))
  .catch(() => { /* fallback stays in place */ });
