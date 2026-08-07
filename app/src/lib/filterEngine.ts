import type { Product, ActiveFilters, SortOrder } from "../data/products";

export function filterEngine(
  products: Product[],
  filters: ActiveFilters,
  sortOrder: SortOrder
): Product[] {
  let result = products;

  // Category filter — inactive when array is empty
  if (filters.categories.length > 0) {
    result = result.filter((p) => filters.categories.includes(p.category));
  }

  // Price filter — always active (range defaults to full dataset bounds)
  result = result.filter(
    (p) => p.price >= filters.priceMin && p.price <= filters.priceMax
  );

  // Rating filter — inactive when null
  if (filters.ratingMin !== null) {
    result = result.filter((p) => p.rating >= filters.ratingMin!);
  }

  // Sort — filter first, then sort
  if (sortOrder === "price-asc") {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "rating-desc") {
    result = [...result].sort((a, b) => b.rating - a.rating);
  }

  return result;
}
