import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmptyState from "./EmptyState";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../data/products";

describe("EmptyState", () => {
  it("renders the no-match message", () => {
    render(<EmptyState onReset={() => {}} />);
    expect(screen.getByText(/no products match your filters/i)).toBeInTheDocument();
  });

  it("renders a Reset filters button", () => {
    render(<EmptyState onReset={() => {}} />);
    expect(screen.getByRole("button", { name: /reset filters/i })).toBeInTheDocument();
  });

  it("calls onReset when the button is clicked", async () => {
    const onReset = vi.fn();
    render(<EmptyState onReset={onReset} />);
    await userEvent.click(screen.getByRole("button", { name: /reset filters/i }));
    expect(onReset).toHaveBeenCalledOnce();
  });
});

describe("ProductCard", () => {
  const product = PRODUCTS[0];

  it("renders the product name", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText(product.name)).toBeInTheDocument();
  });

  it("renders the product price", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText(`$${product.price.toFixed(2)}`)).toBeInTheDocument();
  });

  it("renders a star character", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText(/★/)).toBeInTheDocument();
  });

  it("renders the product image with correct alt text", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByRole("img", { name: product.name })).toBeInTheDocument();
  });
});
