interface Props {
  value: number | null;
  onChange: (value: number | null) => void;
}

const RATINGS = [1, 2, 3, 4, 5];

export default function RatingSelector({ value, onChange }: Props) {
  function handleChange(star: number) {
    // radio onChange doesn't fire when already checked, so we use onClick
    onChange(value === star ? null : star);
  }

  return (
    <div className="filter-group">
      <h3>Min. Star Rating</h3>
      {RATINGS.map((star) => (
        <label key={star} className="filter-option">
          <input
            type="radio"
            name="rating"
            value={star}
            checked={value === star}
            onChange={() => onChange(star)}
            onClick={() => { if (value === star) onChange(null); }}
          />
          {"★".repeat(star)} {star}+
        </label>
      ))}
    </div>
  );
}
