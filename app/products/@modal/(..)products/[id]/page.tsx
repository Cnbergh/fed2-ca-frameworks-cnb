"use client"
import React, { useState, useEffect } from 'react';
import Modal from '@/components/modal';
import { ProductCard } from '@/components/productCard';
import { Product } from '@/app/products/page';

interface Props {
  product: Product;
}

const ProductModal = ({ product: initialProduct }: Props) => {
  const [error, setError] = useState(false);
  const [fetchedProduct, setFetchedProduct] = useState<Product | null>(null);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    if (initialProduct && initialProduct.id) {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://v2.api.noroff.dev/online-shop/${initialProduct.id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const { data } = await response.json();
          setFetchedProduct(data);
          setLoading(false);
        } catch (error) {
          setError(true);
          console.error('Failed to fetch product:', error);
        }
      };
  
      fetchData();
    }
  }, [initialProduct]);

  useEffect(() => {
    const handleWindowFocus = () => {
      if (error) {
        window.location.reload(); // Refresh the page on fetch error
      }
    };

    window.addEventListener('focus', handleWindowFocus);

    return () => {
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, [error]);

  return (
    <Modal>
      {error ? null : <ProductCard product={fetchedProduct || initialProduct} />}
    </Modal>
  );
};

export default ProductModal;
