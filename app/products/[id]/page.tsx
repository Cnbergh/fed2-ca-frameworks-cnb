'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProductCard } from '@/components/productCard';
import ProductModal from '@/app/products/@modal/(..)products/[id]/page';

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = ({ params: { id } }: ProductPageProps) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  const getProductById = async (id: string) => {
    try {
      const response = await fetch(
        `https://v2.api.noroff.dev/online-shop/${id}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const { data } = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch product: ' + (error as Error).message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <section className="py-24">
      <div className="container">
        <div>
          <Link
            href="/products"
            className="font-semibold italic text-sky-600 underline">
            Back to products
          </Link>
        </div>

        <div className="mt-10 w-1/3">
          <ProductCard product={product} />
        </div>
        <ProductModal product={product} />
      </div>
    </section>
  );
};

export default ProductPage;
