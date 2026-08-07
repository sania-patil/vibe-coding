interface Props {
  categories: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export default function CategoryChecklist({ categories, selected, onChange }: Props) {
  function toggle(cat: string) {
    if (selected.includes(cat)) {
      onChange(selected.filter((c) => c !== cat));
    } else {
      onChange([...selected, cat]);
    }
  }

  return (
    <div className="filter-group">
      <h3>Category</h3>
      {categories.map((cat) => (
        <label key={cat} className="filter-option">
          <input
            type="checkbox"
            checked={selected.includes(cat)}
            onChange={() => toggle(cat)}
          />
          {cat}
        </label>
      ))}
    </div>
  );
}
