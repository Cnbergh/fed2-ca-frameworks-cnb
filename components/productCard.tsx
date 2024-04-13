import Link from 'next/link';

export function ProductCard({ product }) {
  const productUrl = `/products/${product.id}`;
  const { title, description, price, image = {}, id, reviews, rating } = product;
  const { url = '/FallbackImage.png', alt = 'Default image' } = image;  // Ensure '/FallbackImage.png' exists in your public folder

  return (
    <div className="product-card">
      <Link href={productUrl}>
        <img src={url} alt={alt} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Rating: {rating}</p>
        </div>
      </Link>
    </div>
  );
}