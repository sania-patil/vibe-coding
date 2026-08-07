import type { SortOrder } from "../data/products";

interface Props {
  value: SortOrder;
  onChange: (value: SortOrder) => void;
}

export default function SortDropdown({ value, onChange }: Props) {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort-select">Sort by:</label>
      <select
        id="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOrder)}
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="rating-desc">Top Rated First</option>
      </select>
    </div>
  );
}
