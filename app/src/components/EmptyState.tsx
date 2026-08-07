interface Props {
  onReset: () => void;
}

export default function EmptyState({ onReset }: Props) {
  return (
    <div className="empty-state">
      <p>No items match your criteria.</p>
      <button onClick={onReset}>Reset filters</button>
    </div>
  );
}
