import { CATEGORY_IDS } from './categories.js'

/**
 * Product catalogue.
 *
 * Each object is one sellable line. Keep this file as the single source of truth.
 *
 * CRUD
 * - Create: copy any object below, give it a new unique `id` (use nextSku() from catalog.js
 *   in the console, or follow BRD-{CAT}-{NNN} e.g. BRD-BAG-010). Set categoryId from CATEGORY_IDS.
 * - Read: UI uses listProducts / getProduct / searchProducts in catalog.js.
 * - Update: change name, price, description, image, or active. Do not change `id` once used
 *   in enquiries or shared links.
 * - Delete: set `active: false` to hide it, or remove the object entirely.
 *
 * Fields
 * - id           Unique SKU, never reused
 * - categoryId   One of CATEGORY_IDS
 * - name         Display name
 * - price        Starting price in INR (number)
 * - description  Short line for cards and search
 * - image        Photo URL
 * - active       false hides the product from the site
 */
export const products = [
  {
    id: 'BRD-BAG-001',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Felt Bag 120 GSM ',
    price: 65,
    description: 'Felt tote and giveaway bags with a large print panel.',
    image:
      '/bags/BRD-BAG-001.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-002',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Felt Bag 120 GSM',
    price: 65,
    description: 'Felt tote and giveaway bags with a large print panel.',
    image:
      '/bags/BRD-BAG-002.jpeg',
    active: true,
  },
  {
    id: 'BRD-BAG-003',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Felt Bag 450 GSM',
    price: 120,
    description: 'Felt tote and giveaway bags with a large print panel.',
    image:
      '/bags/BRD-BAG-003.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-004',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Felt Bag 450 GSM',
    price: 120,
    description: 'Felt tote and giveaway bags with a large print panel.',
    image:
      '/bags/BRD-BAG-004.jpeg',
    active: true,
  },
  {
    id: 'BRD-BAG-005',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Felt Bag 120 GSM',
    price: 65,
    description: 'Felt tote and giveaway bags with a large print panel.',
    image:
      '/bags/BRD-BAG-005.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-006',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Felt Laptop Sleeve 450 GSM',
    price: 140,
    description: 'Felt laptop sleeve and giveaway bags with a large print panel.',
    image:
      '/bags/BRD-BAG-006.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-007',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Office laptop Bag',
    price: 380,
    description: 'Laptop bags for promotional and welcome kits.',
    image:
      '/bags/BRD-BAG-007.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-008',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Office Laptop Bag',
    price: 350,
    description: 'Laptop bags for promotional and welcome kits',
    image:
      '/bags/BRD-BAG-008.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-009',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Laptop Jute and PU Bags',
    price: 360,
    description: 'Jute and PU bags for gifiting purposes',
    image:
      '/bags/BRD-BAG-009.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-010',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Laptop Jute and PU Bags',
    price: 360,
    description: 'Jute and PU bags for gifiting purposes',
    image:
      '/bags/BRD-BAG-010.jfif',
    active: true,
  },
    {
    id: 'BRD-BAG-011',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Laptop Jute and PU Bags',
    price: 360,
    description: 'Jute and PU bags for gifiting purposes',
    image:
      '/bags/BRD-BAG-011.jfif',
    active: true,
  },
   {
    id: 'BRD-BAG-012',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Laptop Jute and PU Bags',
    price: 360,
    description: 'Jute and PU bags for gifiting purposes',
    image:
      '/bags/BRD-BAG-012.jfif',
    active: true,
  },
     {
    id: 'BRD-BAG-013',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Backpack',
    price: 260,
    description: 'Backpack for gifitng and promotional purposes',
    image:
      '/bags/BRD-BAG-013.jfif',
    active: true,
  },
       {
    id: 'BRD-BAG-014',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Backpack',
    price: 340,
    description: 'Backpack for gifitng and promotional purposes',
    image:
      '/bags/BRD-BAG-014.jfif',
    active: true,
  },
     {
    id: 'BRD-BAG-015',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Backpack',
    price: 320,
    description: 'Backpack for gifitng and promotional purposes',
    image:
      '/bags/BRD-BAG-015.jfif',
    active: true,
  },
   {
    id: 'BRD-BAG-016',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Backpack',
    price: 420,
    description: 'Backpack for gifitng and promotional purposes',
    image:
      '/bags/BRD-BAG-016.jfif',
    active: true,
  },
   {
    id: 'BRD-BAG-017',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Sling Bag',
    price: 120,
    description: 'Sling bag for promotional gifts',
    image:
      '/bags/BRD-BAG-017.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-018',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Sling Bag',
    price: 120,
    description: 'Sling bag for promotional gifts',
    image:
      '/bags/BRD-BAG-018.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-019',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'PU Leather Sling Bag',
    price: 190,
    description: 'PU Leather Sling Bag for promotional gifting',
    image:
      '/bags/BRD-BAG-019.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-020',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'PU Leather Sling Bag',
    price: 190,
    description: 'PU Leather Sling Bag for promotional gifting',
    image:
      '/bags/BRD-BAG-020.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-021',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'PU Leather Sling Bag',
    price: 290,
    description: 'Premium Sling Bag for promotional gifting',
    image:
      '/bags/BRD-BAG-021.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-022',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'PU Leather Duffle Bag',
    price: 600,
    description: 'PU Leather Duffle bag for promotional purposes',
    image:
      '/bags/BRD-BAG-022.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-023',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'PU Leather Duffle Bag',
    price: 600,
    description: 'PU Leather Duffle bag for promotional purposes',
    image:
      '/bags/BRD-BAG-023.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-024',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Black Duffle Bag',
    price: 380,
    description: ' Duffle bag for promotional purposes',
    image:
      '/bags/BRD-BAG-024.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-025',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Blue Duffle Bag',
    price: 380,
    description: ' Duffle bag for promotional purposes',
    image:
      '/bags/BRD-BAG-025.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-026',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Travel Trolley Bag',
    price: 780,
    description: 'Pink Trolley Bag for promotional gifting',
    image:
      '/bags/BRD-BAG-026.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-027',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Travel Trolley Bag',
    price: 780,
    description: 'Blue trolley bag for promotional gifting',
    image:
      '/bags/BRD-BAG-027.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-028',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Travel Trolley Bag',
    price: 780,
    description: 'Red trolley bag for promotional gifting',
    image:
      '/bags/BRD-BAG-028.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-029',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Travel Trolley Bag',
    price: 780,
    description: 'Blue style 2 trolley bag for promotional gifting',
    image:
      '/bags/BRD-BAG-029.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-030',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Travel Trolley Bag',
    price: 780,
    description: 'Green style 2 trolley bag for promotional gifitng',
    image:
      '/bags/BRD-BAG-030.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-031',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Travel Trolley Bag',
    price: 800,
    description: 'BlacK trolley bag for promotional gifitng',
    image:
      '/bags/BRD-BAG-031.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-032',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Travel Trolley Bag',
    price: 860,
    description: 'Nave Blue trolley bag for promotional gifting',
    image:
      '/bags/BRD-BAG-032.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-033',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Travel Trolley Bag',
    price: 770,
    description: 'Baby pink trolley bag for promotional gifting',
    image:
      '/bags/BRD-BAG-033.jfif',
    active: true,
  },
  {
    id: 'BRD-BAG-034',
    categoryId: CATEGORY_IDS.BAGS,
    name: 'Small Trolley Bag',
    price: 470,
    description: 'Small Trolley bags for promotional gifting',
    image:
      '/bags/BRD-BAG-034.jfif',
    active: true,
  },
   {
    id: 'BRD-DSK-001',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Laptop Stand',
    price: 170,
    description: 'Customizable silver laptop stand for welcome gift',
    image:
       '/DSK/BRD-DSK-001.jfif',
    active: true,
  },
  {
    id: 'BRD-DSK-002',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Laptop Stand',
    price: 170,
    description: 'Customizable Black laptop stand for welcome gift',  
    image:
       '/DSK/BRD-DSK-002.jfif',
    active: true,
  },
  {
    id: 'BRD-DSK-003',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Calender',
    price: 60,
    description: 'Customizable calender for promotional purposes',
    image:
       '/DSK/BRD-DSK-003.jfif',
    active: true,
  },
  {
    id: 'BRD-DSK-004',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Calender',
    price: 60,
    description: 'Customizable calender for promotional purposes',
    image:
       '/DSK/BRD-DSK-004.jfif',
    active: true,
  },
  {
    id: 'BRD-DSK-005',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Calender',
    price: 50,
    description: 'Customizable calender for promotional purposes',
    image:
       '/DSK/BRD-DSK-005.jfif',
    active: true,
  },
  {
    id: 'BRD-DSK-006',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Pen and Pencil stand',
    price: 70,
    description: 'Customizable pen and pencil stand for promotional purposes',
    image:
     '/DSK/BRD-DSK-006.jfif',
    active: true,
  },
  {
    id: 'BRD-DSK-007',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Pen and Pencil stand',
    price: 60,
    description: 'Customizable pen and pencil stand for promotional purposes',
    image:
      '/DSK/BRD-DSK-007.jfif',
    active: true,
  },
  {
    id: 'BRD-DSK-008',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Metal Phone stand',
    price: 120,
    description: 'Customizable silver metal phone metal',
    image:
       '/DSK/BRD-DSK-008.jfif',
    active: true,
  },
  {
    id: 'BRD-DSK-009',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Metal Phone stand',
    price: 120,
    description: 'Customizable Black metal phone stand',
    image:
       '/DSK/BRD-DSK-009.jfif',
    active: true,
  },
  {
    id: 'BRD-DSK-010',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Black Mug',
    price: 80,
    description: 'Customizable Black mug for welcome kit',
    image:
       '/DSK/BRD-DSK-010.jfif',
    active: true,
  },
  {
    id: 'BRD-DSK-011',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'White Mug',
    price: 80,
    description: 'Customizable white mug for welcome kit',
    image:
       '/DSK/BRD-DSK-011.jfif',
    active: true,
  },
  {
    id: 'BRD-DSK-012',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Premium Mug',
    price: 100,
    description: 'Customizable premium mug for welcome kit',
    image:
       '/DSK/BRD-DSK-012.jfif',
    active: true,
  },
  {
    id: 'BRD-DSK-013',
    categoryId: CATEGORY_IDS.DESKTOP,
    name: 'Premium Mug',
    price: 100,
    description: 'Customizable premium mug for welcome kit',
    image:
       '/DSK/BRD-DSK-013.jfif',
    active: true,
  },
  {
    id: 'BRD-STN-001',
    categoryId: CATEGORY_IDS.STATIONERY,
    name: 'Pens',
    price: 19,
    description: 'Customizable fiber pens for welcome kits and promotional purposes',
    image:
      '/STN/BRD-STN-001.jfif',
    active: true,
  },
  {
    id: 'BRD-STN-002',
    categoryId: CATEGORY_IDS.STATIONERY,
    name: 'Pens',
    price: 19,
    description: 'Customizable fiber pens for welcome kits and promotional purposes',
    image:
      '/STN/BRD-STN-002.jfif',
    active: true,
  },
  {
    id: 'BRD-STN-003',
    categoryId: CATEGORY_IDS.STATIONERY,
    name: 'Multi Color Pen Set',
    price: 49,
    description: 'Customizable fiber pens set for distribution purposes',
    image:
       '/STN/BRD-STN-003.jfif',
    active: true,
  },
  {
    id: 'BRD-STN-004',
    categoryId: CATEGORY_IDS.STATIONERY,
    name: ' Diary',
    price: 100,
    description: 'Customizable diaries for welcome gifts and promotional purposes',
    image:
      '/STN/BRD-STN-004.jfif',
    active: true,
  },
  {
    id: 'BRD-STN-005',
    categoryId: CATEGORY_IDS.STATIONERY,
    name: 'Customizable Notepad',
    price: 70,
    description: 'Notepad for promotional purposes',
    image:
      '/STN/BRD-STN-005.jpeg',
    active: true,
  },
  {
    id: 'BRD-STN-006',
    categoryId: CATEGORY_IDS.STATIONERY,
    name: 'Premium Diary',
    price: 140,
    description: 'Diary for welcome gifts and promotional purposes',
    image:
      '/STN/BRD-STN-006.jpeg',
    active: true,
  },
  {
    id: 'BRD-STN-007',
    categoryId: CATEGORY_IDS.STATIONERY,
    name: ' Diary',
    price: 110,
    description: 'Customizable diaries for welcome gifts and promotional purposes',
    image:
      '/STN/BRD-STN-007.jpeg',
    active: true,
  },
  {
    id: 'BRD-STN-008',
    categoryId: CATEGORY_IDS.STATIONERY,
    name: ' Diary',
    price: 110,
    description: 'Customizable diaries for welcome gifts and promotional purposes',
    image:
      '/STN/BRD-STN-008.jpeg',
    active: true,
  },
  {
    id: 'BRD-CLT-001',
    categoryId: CATEGORY_IDS.CLOTHING,
    name: 'Cotton Shirts',
    price: 290,
    description: 'Cutomizable cotton shirts for corporate gifting',
    image:
      '/CLT/BRD-CLT-001.jfif',
    active: true,
  },
  {
    id: 'BRD-CLT-002',
    categoryId: CATEGORY_IDS.CLOTHING,
    name: 'Filafil Shirts',
    price: 349,
    description: 'Cutomizable cotton shirts for corporate gifting',
    image:
      '/CLT/BRD-CLT-002.jfif',
    active: true,
  },
  {
    id: 'BRD-CLT-003',
    categoryId: CATEGORY_IDS.CLOTHING,
    name: 'Poly-cotton Mix Shirts',
    price: 290,
    description: 'Cutomizable Poly-cotton shirts for corporate gifting',
    image:
       '/CLT/BRD-CLT-003.jfif',
    active: true,
  },
  {
    id: 'BRD-CLT-004',
    categoryId: CATEGORY_IDS.CLOTHING,
    name: 'Sapp Matty T-shirts',
    price: 180,
    description: 'Customizable sap matty t-shirts for corporate gifting',
    image:
       '/CLT/BRD-CLT-004.jfif',
    active: true,
  },
  {
    id: 'BRD-CLT-005',
    categoryId: CATEGORY_IDS.CLOTHING,
    name: 'Cotton T-shirts',
    price: 290,
    description: 'Customizable cotton t-shirts for corporate gifting',
    image:
       '/CLT/BRD-CLT-005.jfif',
    active: true,
  },
  {
    id: 'BRD-CLT-006',
    categoryId: CATEGORY_IDS.CLOTHING,
    name: 'Caps',
    price: 110,
    description: 'Customizable Caps for corporate gifitng',
    image:
       '/CLT/BRD-CLT-006.jpg',
    active: true,
  },
  {
    id: 'BRD-CLT-007',
    categoryId: CATEGORY_IDS.CLOTHING,
    name: 'Jackets',
    price: 450,
    description: 'Premium customizable jackets for corporate gifting',
    image:
       '/CLT/BRD-CLT-007.jpg',
    active: true,
  },
  {
    id: 'BRD-OTH-001',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'SS Tumbler 500ml',
    price: 180,
    description: 'Customizable SS tumbler for welcome gifts',
    image:
      '/OTH/BRD-OTH-001.jfif',
    active: true,
  },
  {
    id: 'BRD-OTH-002',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'SS Tumbler 500ml',
    price: 180,
    description: 'Customizable SS tumbler for welcome gifts',
    image:
      '/OTH/BRD-OTH-002.jfif',
    active: true,
  },
  {
    id: 'BRD-OTH-003',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'SS Bottle 500ml',
    price: 200,
    description: 'Cutomized SS bottle for welcome gifts.',
    image:
       '/OTH/BRD-OTH-003.jfif',
    active: true,
  },
  {
    id: 'BRD-OTH-004',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Water bottle 500ml',
    price: 180,
    description: 'Customized water bottle for corporate gifting.',
    image:
       '/OTH/BRD-OTH-004.jfif',
    active: true,
  },
  {
    id: 'BRD-OTH-005',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Tumbler 500ml',
    price: 180,
    description: 'Customized tumbler for corporate gifting.',
    image:
       '/OTH/BRD-OTH-005.jfif',
    active: true,
  },
  {
    id: 'BRD-OTH-006',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'SS Water Bottle 500ml',
    price: 180,
    description: 'Customized SS water bottle for welcome gifts',
    image:
       '/OTH/BRD-OTH-006.jfif',
    active: true,
  },
 {
    id: 'BRD-OTH-007',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'SS Water Bottle 500ml',
    price: 180,
    description: 'Customized SS water bottle for welcome gifts',
    image:
       '/OTH/BRD-OTH-007.jfif',
    active: true,
  },
  {
    id: 'BRD-OTH-008',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Premium SS Water bottle 800ml',
    price: 240,
    description: 'Customized Premium SS water bottle for welcome gifts',
    image:
       '/OTH/BRD-OTH-008.jfif',
    active: true,
  },
  {
    id: 'BRD-OTH-009',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Premium Tumbler 500ml',
    price: 160,
    description: 'Premium Tumbler for corporate gifting',
    image:
       '/OTH/BRD-OTH-009.jfif',
    active: true,
  },
  {
    id: 'BRD-OTH-010',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Premium Flask set 500ml',
    price: 200,
    description: 'Premium flask set for corporate gifting',
    image:
       '/OTH/BRD-OTH-010.jfif',
    active: true,
  },
  {
    id: 'BRD-OTH-011',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Premium Flask set 500ml',
    price: 200,
    description: 'Premium flask set for corporate gifting',
    image:
       '/OTH/BRD-OTH-011.jfif',
    active: true,
  },
  {
    id: 'BRD-OTH-012',
    categoryId: CATEGORY_IDS.OTHER,
    name: '5 in 1 Gift set',
    price: 200,
    description: 'Premium glass bottle with jute cover,diray,pen,keychain and a card holder',
    image:
       '/OTH/BRD-OTH-012.jpg',
    active: true,
  },
  {
    id: 'BRD-OTH-013',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Leather diary and flask set ',
    price: 200,
    description: 'Temperature bottle and a diary',
    image:
       '/OTH/BRD-OTH-013.jpg',
    active: true,
  },
  {
    id: 'BRD-OTH-014',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Executive 6 in 1 gift set ',
    price: 200,
    description: 'A notebook,keychain,pen,bottle,mug card holder',
    image:
       '/OTH/BRD-OTH-014.jpg',
    active: true,
  },
  {
    id: 'BRD-OTH-015',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Executive 6 in 1 gift set ',
    price: 200,
    description: 'A notebook,keychain,pen,bottle,mug mobile stand',
    image:
       '/OTH/BRD-OTH-015.jpg',
    active: true,
  },
  {
    id: 'BRD-OTH-016',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Executive 4 in 1 gift set ',
    price: 200,
    description: 'A notebook,keychain,pen,mobile stand',
    image:
       '/OTH/BRD-OTH-016.jpg',
    active: true,
  },
  {
    id: 'BRD-OTH-017',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Executive 4 in 1 gift set ',
    price: 200,
    description: 'A notebook,keychain,pen,goggles cover',
    image:
       '/OTH/BRD-OTH-017.jfif',
    active: true,
  },
  {
    id: 'BRD-OTH-018',
    categoryId: CATEGORY_IDS.OTHER,
    name: 'Executive 2 in 1 gift set ',
    price: 200,
    description: 'A notebook,pen',
    image:
       '/OTH/BRD-OTH-018.jpg',
    active: true,
  }
]
