'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = ({ params: { id } }: ProductPageProps) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const router = useRouter();

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
    <section className="py-12 border border-gray-300 rounded-lg shadow-md">
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <Link href="/products">
          <span className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition duration-300">&larr; Back to products</span>
        </Link>
        <h1 className="text-3xl font-bold">{product.title}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image.url} alt={product.image.alt} className="rounded-lg shadow-md" />
        </div>
        <div>
          <p className="text-gray-800 py-2">{product.description}</p>
          <p className="text-gray-800 py-2">Price: ${product.price}</p>
          <p className="text-gray-800">Rating: {product.rating}</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ProductPage;