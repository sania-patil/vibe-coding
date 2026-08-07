import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterSidebar from "./FilterSidebar";
import CategoryChecklist from "./CategoryChecklist";
import RatingSelector from "./RatingSelector";
import { DEFAULT_FILTERS } from "../data/products";

describe("FilterSidebar", () => {
  it("renders Category, Price Range, and Rating sections in order", () => {
    render(<FilterSidebar filters={DEFAULT_FILTERS} onFiltersChange={() => {}} />);
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings[0]).toHaveTextContent(/category/i);
    expect(headings[1]).toHaveTextContent(/price/i);
    expect(headings[2]).toHaveTextContent(/rating/i);
  });
});

describe("CategoryChecklist", () => {
  const categories = ["Electronics", "Apparel", "Footwear"];

  it("renders checkboxes for Electronics, Apparel, Footwear", () => {
    render(<CategoryChecklist categories={categories} selected={[]} onChange={() => {}} />);
    categories.forEach((cat) => {
      expect(screen.getByRole("checkbox", { name: cat })).toBeInTheDocument();
    });
  });

  it("calls onChange with added category when checkbox is checked", async () => {
    const onChange = vi.fn();
    render(<CategoryChecklist categories={categories} selected={[]} onChange={onChange} />);
    await userEvent.click(screen.getByRole("checkbox", { name: "Electronics" }));
    expect(onChange).toHaveBeenCalledWith(["Electronics"]);
  });

  it("calls onChange with removed category when checkbox is unchecked", async () => {
    const onChange = vi.fn();
    render(
      <CategoryChecklist
        categories={categories}
        selected={["Electronics"]}
        onChange={onChange}
      />
    );
    await userEvent.click(screen.getByRole("checkbox", { name: "Electronics" }));
    expect(onChange).toHaveBeenCalledWith([]);
  });
});

describe("RatingSelector", () => {
  it("renders 5 radio buttons with values 1 through 5", () => {
    render(<RatingSelector value={null} onChange={() => {}} />);
    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(5);
    [1, 2, 3, 4, 5].forEach((val) => {
      expect(screen.getByDisplayValue(String(val))).toBeInTheDocument();
    });
  });

  it("calls onChange with selected rating", async () => {
    const onChange = vi.fn();
    render(<RatingSelector value={null} onChange={onChange} />);
    await userEvent.click(screen.getByDisplayValue("4"));
    expect(onChange).toHaveBeenCalledWith(4);
  });

  it("calls onChange with null when same rating is clicked again (deselect)", async () => {
    const onChange = vi.fn();
    render(<RatingSelector value={3} onChange={onChange} />);
    await userEvent.click(screen.getByDisplayValue("3"));
    expect(onChange).toHaveBeenCalledWith(null);
  });
});
