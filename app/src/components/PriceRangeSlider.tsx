interface Props {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export default function PriceRangeSlider({ min, max, value, onChange }: Props) {
  const [lo, hi] = value;

  function handleMin(e: React.ChangeEvent<HTMLInputElement>) {
    const newMin = Math.min(Number(e.target.value), hi);
    onChange([newMin, hi]);
  }

  function handleMax(e: React.ChangeEvent<HTMLInputElement>) {
    const newMax = Math.max(Number(e.target.value), lo);
    onChange([lo, newMax]);
  }

  return (
    <div className="filter-group">
      <h3>Price Range</h3>
      <div className="price-labels">
        <span>${lo.toFixed(0)}</span>
        <span>${hi.toFixed(0)}</span>
      </div>
      <div className="price-slider-track">
        <input
          type="range"
          min={min}
          max={max}
          value={lo}
          onChange={handleMin}
          aria-label="Minimum price"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={hi}
          onChange={handleMax}
          aria-label="Maximum price"
        />
      </div>
    </div>
  );
}
