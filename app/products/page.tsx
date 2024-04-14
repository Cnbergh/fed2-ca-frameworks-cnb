'use client'
import React, { useEffect, useState } from 'react';
import { ProductCard } from '@/components/productCard';
import Loading from './loading';
import { ProductLayout } from '@/components/layouts/productLayout';
import { useRouter } from 'next/navigation';

export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
};

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch products: ' + (error.message || 'Unknown error'));
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId: string) => {
    // Redirect to the product page when a product is clicked
    router.push(`/products/${productId}`);
  };

  if (isLoading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (!products.length) return <p>No products found.</p>;

  return (
    <section>
      <ProductLayout>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </ProductLayout>
    </section>
  );
};

export default ProductListPage;