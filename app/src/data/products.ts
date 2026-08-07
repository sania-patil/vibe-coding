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

export const PRICE_MIN = 999;
export const PRICE_MAX = 24999;

export const DEFAULT_FILTERS: ActiveFilters = {
  categories: [],
  priceMin: PRICE_MIN,
  priceMax: PRICE_MAX,
  ratingMin: null,
};

export const DEFAULT_SORT: SortOrder = "default";

export const PRODUCTS: Product[] = [
  // Electronics
  { id: 1,  name: "Wireless Noise-Cancelling Headphones", category: "Electronics", price: 6599,  rating: 4.5, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop" },
  { id: 2,  name: "Bluetooth Portable Speaker",           category: "Electronics", price: 4199,  rating: 4.7, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop" },
  { id: 3,  name: "USB-C Multiport Hub",                  category: "Electronics", price: 2999,  rating: 3.9, image: "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?w=300&h=200&fit=crop" },
  { id: 4,  name: "Smart Watch Series X",                 category: "Electronics", price: 16999, rating: 4.8, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop" },
  { id: 5,  name: "Mechanical Gaming Keyboard",           category: "Electronics", price: 10999, rating: 4.9, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=200&fit=crop" },
  { id: 6,  name: "Wireless Ergonomic Mouse",             category: "Electronics", price: 3299,  rating: 4.4, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop" },
  { id: 7,  name: "Portable Charger 20000mAh",            category: "Electronics", price: 1999,  rating: 4.1, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=200&fit=crop" },
  { id: 8,  name: "True Wireless Earbuds",                category: "Electronics", price: 7499,  rating: 4.3, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=200&fit=crop" },
  { id: 9,  name: "Laptop Stand Aluminium",               category: "Electronics", price: 2299,  rating: 4.2, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=200&fit=crop" },
  { id: 10, name: "4K Webcam Pro",                        category: "Electronics", price: 8499,  rating: 4.6, image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=300&h=200&fit=crop" },
  // Apparel
  { id: 11, name: "Classic Cotton T-Shirt",               category: "Apparel", price: 999,   rating: 3.8, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop" },
  { id: 12, name: "Slim Fit Denim Jacket",                category: "Apparel", price: 4499,  rating: 4.1, image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=300&h=200&fit=crop" },
  { id: 13, name: "Fleece Zip-Up Hoodie",                 category: "Apparel", price: 2799,  rating: 4.0, image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=300&h=200&fit=crop" },
  { id: 14, name: "High-Waist Yoga Pants",                category: "Apparel", price: 1799,  rating: 4.3, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=300&h=200&fit=crop" },
  { id: 15, name: "Slim Chino Trousers",                  category: "Apparel", price: 2199,  rating: 3.5, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=200&fit=crop" },
  { id: 16, name: "Relaxed Linen Shirt",                  category: "Apparel", price: 1499,  rating: 3.6, image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=200&fit=crop" },
  { id: 17, name: "Classic Polo Shirt",                   category: "Apparel", price: 1299,  rating: 4.1, image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=300&h=200&fit=crop" },
  { id: 18, name: "Insulated Bomber Jacket",              category: "Apparel", price: 5999,  rating: 4.6, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=200&fit=crop" },
  { id: 19, name: "Merino Wool Sweater",                  category: "Apparel", price: 3999,  rating: 4.4, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&h=200&fit=crop" },
  { id: 20, name: "Athletic Running Shorts",              category: "Apparel", price: 1199,  rating: 4.0, image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=300&h=200&fit=crop" },
  // Footwear
  { id: 21, name: "Cushioned Running Shoes",              category: "Footwear", price: 4999,  rating: 4.2, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop" },
  { id: 22, name: "Genuine Leather Boots",                category: "Footwear", price: 9999,  rating: 4.0, image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=300&h=200&fit=crop" },
  { id: 23, name: "Canvas Low-Top Sneakers",              category: "Footwear", price: 3499,  rating: 3.7, image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=300&h=200&fit=crop" },
  { id: 24, name: "Trail Running Shoes",                  category: "Footwear", price: 7499,  rating: 4.6, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=200&fit=crop" },
  { id: 25, name: "Memory Foam Sandals",                  category: "Footwear", price: 1799,  rating: 3.9, image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=300&h=200&fit=crop" },
  { id: 26, name: "Slip-On Loafers",                      category: "Footwear", price: 2499,  rating: 4.0, image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=300&h=200&fit=crop" },
  { id: 27, name: "High-Top Basketball Sneakers",         category: "Footwear", price: 6999,  rating: 4.5, image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=300&h=200&fit=crop" },
  { id: 28, name: "Oxford Dress Shoes",                   category: "Footwear", price: 11999, rating: 4.7, image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=300&h=200&fit=crop" },
  { id: 29, name: "Waterproof Hiking Boots",              category: "Footwear", price: 12499, rating: 4.8, image: "https://images.unsplash.com/photo-1520219306100-ec4afba5177e?w=300&h=200&fit=crop" },
  { id: 30, name: "Lightweight Slip-On Sneakers",         category: "Footwear", price: 2999,  rating: 3.8, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=300&h=200&fit=crop" },
];
