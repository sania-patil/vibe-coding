import type { Product } from "../data/products";

interface Props {
  product: Product;
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(full)}{"☆".repeat(5 - full)}
    </span>
  );
}

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
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-rating">
          <StarRating rating={product.rating} />
          <span className="rating-value"> {product.rating}</span>
        </p>
      </div>
    </div>
  );
}
