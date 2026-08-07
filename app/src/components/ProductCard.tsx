import type { Product } from "../data/products";

interface Props {
  product: Product;
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(full)}{"☆".repeat(5 - full)}
    </span>
  );
}

const badgeClass: Record<string, string> = {
  Electronics: "badge-electronics",
  Apparel: "badge-apparel",
  Footwear: "badge-footwear",
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://picsum.photos/seed/fallback/300/200";
        }}
      />
      <div className="product-card-body">
        <span className={`product-category-badge ${badgeClass[product.category]}`}>
          {product.category}
        </span>
        <p className="product-name">{product.name}</p>
        <div className="product-footer">
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-rating">
            <StarRating rating={product.rating} />
            <span className="rating-value"> {product.rating}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
