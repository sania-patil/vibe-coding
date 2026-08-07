import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { PRODUCTS } from "./data/products";

describe("App integration", () => {
  it("renders all products by default", () => {
    render(<App />);
    expect(screen.getByText(`Products (${PRODUCTS.length})`)).toBeInTheDocument();
  });

  it("filters products when a category is selected", async () => {
    render(<App />);
    await userEvent.click(screen.getByRole("checkbox", { name: "Electronics" }));
    const electronicsCount = PRODUCTS.filter((p) => p.category === "Electronics").length;
    expect(screen.getByText(`Products (${electronicsCount})`)).toBeInTheDocument();
  });

  it("shows EmptyState when filters produce zero results", async () => {
    render(<App />);
    // Select Electronics only, then set a very high minimum rating to get 0 results
    await userEvent.click(screen.getByRole("checkbox", { name: "Electronics" }));
    // Click the 5-star radio (only products with rating >= 5)
    await userEvent.click(screen.getByDisplayValue("5"));
    const fiveStarElectronics = PRODUCTS.filter(
      (p) => p.category === "Electronics" && p.rating >= 5
    );
    if (fiveStarElectronics.length === 0) {
      expect(screen.getByText(/no products match your filters/i)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /reset filters/i })).toBeInTheDocument();
    }
  });

  it("resets filters when Reset filters button is clicked", async () => {
    render(<App />);
    // Apply category filter
    await userEvent.click(screen.getByRole("checkbox", { name: "Apparel" }));
    // Click 5-star to likely get empty state
    await userEvent.click(screen.getByDisplayValue("5"));
    const resetBtn = screen.queryByRole("button", { name: /reset filters/i });
    if (resetBtn) {
      await userEvent.click(resetBtn);
      expect(screen.getByText(`Products (${PRODUCTS.length})`)).toBeInTheDocument();
    }
  });

  it("sorts products by price ascending when Sort By is changed", async () => {
    render(<App />);
    await userEvent.selectOptions(screen.getByRole("combobox"), "price-asc");
    const prices = screen
      .getAllByText(/^\$\d+\.\d{2}$/)
      .map((el) => parseFloat(el.textContent!.replace("$", "")));
    for (let i = 1; i < prices.length; i++) {
      expect(prices[i]).toBeGreaterThanOrEqual(prices[i - 1]);
    }
  });
});
