import type { ActiveFilters } from "../data/products";
import { PRICE_MIN, PRICE_MAX } from "../data/products";
import CategoryChecklist from "./CategoryChecklist";
import PriceRangeSlider from "./PriceRangeSlider";
import RatingSelector from "./RatingSelector";

const CATEGORIES = ["Electronics", "Apparel", "Footwear"];

interface Props {
  filters: ActiveFilters;
  onFiltersChange: (patch: Partial<ActiveFilters>) => void;
}

export default function FilterSidebar({ filters, onFiltersChange }: Props) {
  return (
    <aside className="filter-sidebar">
      <h2>Filters</h2>
      <CategoryChecklist
        categories={CATEGORIES}
        selected={filters.categories}
        onChange={(categories) => onFiltersChange({ categories })}
      />
      <PriceRangeSlider
        min={PRICE_MIN}
        max={PRICE_MAX}
        value={[filters.priceMin, filters.priceMax]}
        onChange={([priceMin, priceMax]) => onFiltersChange({ priceMin, priceMax })}
      />
      <RatingSelector
        value={filters.ratingMin}
        onChange={(ratingMin) => onFiltersChange({ ratingMin })}
      />
    </aside>
  );
}
