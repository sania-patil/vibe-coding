import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortDropdown from "./SortDropdown";

describe("SortDropdown", () => {
  it("renders Price: Low to High option", () => {
    render(<SortDropdown value="default" onChange={() => {}} />);
    expect(screen.getByRole("option", { name: /price: low to high/i })).toBeInTheDocument();
  });

  it("renders Top Rated First option", () => {
    render(<SortDropdown value="default" onChange={() => {}} />);
    expect(screen.getByRole("option", { name: /top rated first/i })).toBeInTheDocument();
  });

  it("calls onChange with correct value when option selected", async () => {
    const onChange = vi.fn();
    render(<SortDropdown value="default" onChange={onChange} />);
    await userEvent.selectOptions(screen.getByRole("combobox"), "price-asc");
    expect(onChange).toHaveBeenCalledWith("price-asc");
  });
});
