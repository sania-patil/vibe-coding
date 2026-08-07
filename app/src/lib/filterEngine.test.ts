import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { filterEngine } from "./filterEngine";
import {
  PRODUCTS,
  DEFAULT_FILTERS,
  DEFAULT_SORT,
  PRICE_MIN,
  PRICE_MAX,
} from "../data/products";
import type { ActiveFilters, SortOrder } from "../data/products";

const CATEGORIES = ["Electronics", "Apparel", "Footwear"] as const;

// Arbitraries
const arbCategory = fc.constantFrom(...CATEGORIES);
const arbCategories = fc.array(arbCategory, { minLength: 0, maxLength: 3 }).map(
  (arr) => [...new Set(arr)]
);
const arbPrice = fc.float({ min: Math.fround(PRICE_MIN), max: Math.fround(PRICE_MAX), noNaN: true });
const arbRatingMin = fc.option(fc.integer({ min: 1, max: 5 }), { nil: null });
const arbSortOrder = fc.constantFrom<SortOrder>("default", "price-asc", "rating-desc");

const arbFilters: fc.Arbitrary<ActiveFilters> = fc.record({
  categories: arbCategories,
  priceMin: fc.float({ min: Math.fround(PRICE_MIN), max: Math.fround(PRICE_MAX - 1), noNaN: true }),
  priceMax: fc.float({ min: Math.fround(PRICE_MIN + 1), max: Math.fround(PRICE_MAX), noNaN: true }),
  ratingMin: arbRatingMin,
}).map((f) => ({
  ...f,
  priceMin: Math.min(f.priceMin, f.priceMax),
  priceMax: Math.max(f.priceMin, f.priceMax),
}));

describe("filterEngine", () => {
  // Feature: product-multi-filter-sidebar, Property 1: Category filter correctness
  it("Property 1: when categories selected, all results match one of selected categories", () => {
    fc.assert(
      fc.property(arbCategories, (categories) => {
        const filters = { ...DEFAULT_FILTERS, categories };
        const result = filterEngine(PRODUCTS, filters, "default");
        if (categories.length === 0) {
          expect(result.length).toBe(PRODUCTS.length);
        } else {
          result.forEach((p) => expect(categories).toContain(p.category));
        }
      }),
      { numRuns: 100 }
    );
  });

  // Feature: product-multi-filter-sidebar, Property 2: Price filter correctness
  it("Property 2: all results fall within the price range", () => {
    fc.assert(
      fc.property(arbPrice, arbPrice, (a, b) => {
        const priceMin = Math.min(a, b);
        const priceMax = Math.max(a, b);
        const filters = { ...DEFAULT_FILTERS, priceMin, priceMax };
        const result = filterEngine(PRODUCTS, filters, "default");
        result.forEach((p) => {
          expect(p.price).toBeGreaterThanOrEqual(priceMin);
          expect(p.price).toBeLessThanOrEqual(priceMax);
        });
      }),
      { numRuns: 100 }
    );
  });

  // Feature: product-multi-filter-sidebar, Property 3: Rating filter correctness
  it("Property 3: all results meet or exceed the minimum rating", () => {
    fc.assert(
      fc.property(arbRatingMin, (ratingMin) => {
        const filters = { ...DEFAULT_FILTERS, ratingMin };
        const result = filterEngine(PRODUCTS, filters, "default");
        if (ratingMin === null) {
          expect(result.length).toBe(PRODUCTS.length);
        } else {
          result.forEach((p) => expect(p.rating).toBeGreaterThanOrEqual(ratingMin));
        }
      }),
      { numRuns: 100 }
    );
  });

  // Feature: product-multi-filter-sidebar, Property 4: Combinatorial AND correctness
  it("Property 4: every result satisfies all active filters simultaneously", () => {
    fc.assert(
      fc.property(arbFilters, (filters) => {
        const result = filterEngine(PRODUCTS, filters, "default");
        result.forEach((p) => {
          if (filters.categories.length > 0) {
            expect(filters.categories).toContain(p.category);
          }
          expect(p.price).toBeGreaterThanOrEqual(filters.priceMin);
          expect(p.price).toBeLessThanOrEqual(filters.priceMax);
          if (filters.ratingMin !== null) {
            expect(p.rating).toBeGreaterThanOrEqual(filters.ratingMin);
          }
        });
      }),
      { numRuns: 100 }
    );
  });

  // Feature: product-multi-filter-sidebar, Property 5: Default filters are an identity
  it("Property 5: default filters return the complete product inventory", () => {
    const result = filterEngine(PRODUCTS, DEFAULT_FILTERS, DEFAULT_SORT);
    expect(result.length).toBe(PRODUCTS.length);
    PRODUCTS.forEach((p) => {
      expect(result.find((r) => r.id === p.id)).toBeDefined();
    });
  });

  // Feature: product-multi-filter-sidebar, Property 7: Price-ascending sort order
  it("Property 7: price-asc sort produces non-decreasing price order", () => {
    fc.assert(
      fc.property(arbFilters, (filters) => {
        const result = filterEngine(PRODUCTS, filters, "price-asc");
        for (let i = 1; i < result.length; i++) {
          expect(result[i].price).toBeGreaterThanOrEqual(result[i - 1].price);
        }
      }),
      { numRuns: 100 }
    );
  });

  // Feature: product-multi-filter-sidebar, Property 8: Rating-descending sort order
  it("Property 8: rating-desc sort produces non-increasing rating order", () => {
    fc.assert(
      fc.property(arbFilters, (filters) => {
        const result = filterEngine(PRODUCTS, filters, "rating-desc");
        for (let i = 1; i < result.length; i++) {
          expect(result[i].rating).toBeLessThanOrEqual(result[i - 1].rating);
        }
      }),
      { numRuns: 100 }
    );
  });
});
