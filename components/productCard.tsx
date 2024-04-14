import Link from 'next/link';

export function ProductCard({ product }: any) {
  const productUrl = product && product.id ? `/products/${product.id}` : '';
  const { title, description, price, image = {}, reviews, rating } = product || {};
  const { url = '/FallbackImage.png', alt = 'Default image' } = image;

  return (
    <div className="product-card">
      {productUrl && (
        <Link href={productUrl}>
          <img src={url} alt={alt} />
        </Link>
      )}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
}
