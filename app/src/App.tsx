import { useState } from "react";
import { PRODUCTS, DEFAULT_FILTERS, DEFAULT_SORT } from "./data/products";
import type { ActiveFilters, SortOrder } from "./data/products";
import { filterEngine } from "./lib/filterEngine";
import FilterSidebar from "./components/FilterSidebar";
import ProductGrid from "./components/ProductGrid";
import SortDropdown from "./components/SortDropdown";
import EmptyState from "./components/EmptyState";
import "./App.css";

export default function App() {
  const [filters, setFilters] = useState<ActiveFilters>(DEFAULT_FILTERS);
  const [sortOrder, setSortOrder] = useState<SortOrder>(DEFAULT_SORT);

  function handleFiltersChange(patch: Partial<ActiveFilters>) {
    setFilters((prev) => ({ ...prev, ...patch }));
  }

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
    setSortOrder(DEFAULT_SORT);
  }

  const visibleProducts = filterEngine(PRODUCTS, filters, sortOrder);

  return (
    <>
      <header className="app-header">
        <span>🛍️</span>
        <h1>MarketPlace</h1>
      </header>
      <div className="app-layout">
        <FilterSidebar filters={filters} onFiltersChange={handleFiltersChange} />
        <main className="product-section">
          <div className="product-section-header">
            <h2>
              <span>{visibleProducts.length}</span> Products found
            </h2>
            <SortDropdown value={sortOrder} onChange={setSortOrder} />
          </div>
          {visibleProducts.length > 0 ? (
            <ProductGrid products={visibleProducts} />
          ) : (
            <EmptyState onReset={resetFilters} />
          )}
        </main>
      </div>
    </>
  );
}
