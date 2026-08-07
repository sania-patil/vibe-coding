export interface Product {
  id: number;
  name: string;
  category: "Electronics" | "Apparel" | "Footwear";
  price: number;
  rating: number;
  image: string;
}

export type SortOrder = "default" | "price-asc" | "rating-desc";

export interface ActiveFilters {
  categories: string[];
  priceMin: number;
  priceMax: number;
  ratingMin: number | null;
}

export const PRICE_MIN = 9.99;
export const PRICE_MAX = 299.99;

export const DEFAULT_FILTERS: ActiveFilters = {
  categories: [],
  priceMin: PRICE_MIN,
  priceMax: PRICE_MAX,
  ratingMin: null,
};

export const DEFAULT_SORT: SortOrder = "default";

export const PRODUCTS: Product[] = [
  // Electronics
  { id: 1,  name: "Wireless Noise-Cancelling Headphones", category: "Electronics", price: 79.99,  rating: 4.5, image: "https://source.unsplash.com/300x200/?headphones" },
  { id: 2,  name: "Bluetooth Portable Speaker",           category: "Electronics", price: 49.99,  rating: 4.7, image: "https://source.unsplash.com/300x200/?bluetooth,speaker" },
  { id: 3,  name: "USB-C Multiport Hub",                  category: "Electronics", price: 34.99,  rating: 3.9, image: "https://source.unsplash.com/300x200/?usb,hub" },
  { id: 4,  name: "Smart Watch Series X",                 category: "Electronics", price: 199.99, rating: 4.8, image: "https://source.unsplash.com/300x200/?smartwatch" },
  { id: 5,  name: "Mechanical Gaming Keyboard",           category: "Electronics", price: 129.99, rating: 4.9, image: "https://source.unsplash.com/300x200/?keyboard,mechanical" },
  { id: 6,  name: "Wireless Ergonomic Mouse",             category: "Electronics", price: 39.99,  rating: 4.4, image: "https://source.unsplash.com/300x200/?computer,mouse" },
  { id: 7,  name: "Portable Charger 20000mAh",            category: "Electronics", price: 24.99,  rating: 4.1, image: "https://source.unsplash.com/300x200/?powerbank,charger" },
  { id: 8,  name: "True Wireless Earbuds",                category: "Electronics", price: 89.99,  rating: 4.3, image: "https://source.unsplash.com/300x200/?earbuds,wireless" },
  { id: 9,  name: "Laptop Stand Aluminium",               category: "Electronics", price: 27.99,  rating: 4.2, image: "https://source.unsplash.com/300x200/?laptop,stand" },
  { id: 10, name: "4K Webcam Pro",                        category: "Electronics", price: 99.99,  rating: 4.6, image: "https://source.unsplash.com/300x200/?webcam,camera" },

  // Apparel
  { id: 11, name: "Classic Cotton T-Shirt",               category: "Apparel", price: 19.99,  rating: 3.8, image: "https://source.unsplash.com/300x200/?tshirt,cotton" },
  { id: 12, name: "Slim Fit Denim Jacket",                category: "Apparel", price: 89.99,  rating: 4.1, image: "https://source.unsplash.com/300x200/?denim,jacket" },
  { id: 13, name: "Fleece Zip-Up Hoodie",                 category: "Apparel", price: 54.99,  rating: 4.0, image: "https://source.unsplash.com/300x200/?hoodie,fleece" },
  { id: 14, name: "High-Waist Yoga Pants",                category: "Apparel", price: 44.99,  rating: 4.3, image: "https://source.unsplash.com/300x200/?yoga,pants" },
  { id: 15, name: "Slim Chino Trousers",                  category: "Apparel", price: 49.99,  rating: 3.5, image: "https://source.unsplash.com/300x200/?chinos,trousers" },
  { id: 16, name: "Relaxed Linen Shirt",                  category: "Apparel", price: 39.99,  rating: 3.6, image: "https://source.unsplash.com/300x200/?linen,shirt" },
  { id: 17, name: "Classic Polo Shirt",                   category: "Apparel", price: 34.99,  rating: 4.1, image: "https://source.unsplash.com/300x200/?polo,shirt" },
  { id: 18, name: "Insulated Bomber Jacket",              category: "Apparel", price: 109.99, rating: 4.6, image: "https://source.unsplash.com/300x200/?bomber,jacket" },
  { id: 19, name: "Merino Wool Sweater",                  category: "Apparel", price: 74.99,  rating: 4.4, image: "https://source.unsplash.com/300x200/?sweater,wool" },
  { id: 20, name: "Athletic Running Shorts",              category: "Apparel", price: 29.99,  rating: 4.0, image: "https://source.unsplash.com/300x200/?running,shorts" },

  // Footwear
  { id: 21, name: "Cushioned Running Shoes",              category: "Footwear", price: 59.99,  rating: 4.2, image: "https://source.unsplash.com/300x200/?running,shoes" },
  { id: 22, name: "Genuine Leather Boots",                category: "Footwear", price: 119.99, rating: 4.0, image: "https://source.unsplash.com/300x200/?leather,boots" },
  { id: 23, name: "Canvas Low-Top Sneakers",              category: "Footwear", price: 74.99,  rating: 3.7, image: "https://source.unsplash.com/300x200/?sneakers,canvas" },
  { id: 24, name: "Trail Running Shoes",                  category: "Footwear", price: 89.99,  rating: 4.6, image: "https://source.unsplash.com/300x200/?trail,shoes" },
  { id: 25, name: "Memory Foam Sandals",                  category: "Footwear", price: 29.99,  rating: 3.9, image: "https://source.unsplash.com/300x200/?sandals" },
  { id: 26, name: "Slip-On Loafers",                      category: "Footwear", price: 44.99,  rating: 4.0, image: "https://source.unsplash.com/300x200/?loafers,shoes" },
  { id: 27, name: "High-Top Basketball Sneakers",         category: "Footwear", price: 84.99,  rating: 4.5, image: "https://source.unsplash.com/300x200/?basketball,sneakers" },
  { id: 28, name: "Oxford Dress Shoes",                   category: "Footwear", price: 134.99, rating: 4.7, image: "https://source.unsplash.com/300x200/?oxford,dress,shoes" },
  { id: 29, name: "Waterproof Hiking Boots",              category: "Footwear", price: 149.99, rating: 4.8, image: "https://source.unsplash.com/300x200/?hiking,boots" },
  { id: 30, name: "Lightweight Slip-On Sneakers",         category: "Footwear", price: 49.99,  rating: 3.8, image: "https://source.unsplash.com/300x200/?slip,sneakers" },
];
