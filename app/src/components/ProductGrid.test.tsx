import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import * as fc from "fast-check";
import ProductGrid from "./ProductGrid";
import { PRODUCTS } from "../data/products";

describe("ProductGrid", () => {
  it("renders the correct number of product cards", () => {
    render(<ProductGrid products={PRODUCTS} />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(PRODUCTS.length);
  });

  // Feature: product-multi-filter-sidebar, Property 6: Card rendering completeness
  it("Property 6: renders exactly as many cards as products passed in", () => {
    fc.assert(
      fc.property(
        fc.array(fc.integer({ min: 0, max: PRODUCTS.length - 1 }), {
          minLength: 1,
          maxLength: PRODUCTS.length,
        }).map((indices) => [...new Set(indices)].map((i) => PRODUCTS[i])),
        (subset) => {
          const { container, unmount } = render(<ProductGrid products={subset} />);
          const imgs = container.querySelectorAll("img");
          expect(imgs.length).toBe(subset.length);
          unmount();
        }
      ),
      { numRuns: 50 }
    );
  });
});
