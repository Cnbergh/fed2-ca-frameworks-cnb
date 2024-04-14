import React from 'react';
import Modal from '@/components/modal';
import { ProductCard } from '@/components/productCard';
import { ProductModalProps } from '@/lib/utils';

const ProductModal: React.FC<ProductModalProps> = ({ product, productId, onClose }) => {
  const fetchProductDetails = async () => {
  };

  React.useEffect(() => {
    if (!product && productId) {
      fetchProductDetails();
    }
  }, [product, productId]);

  return (
    <Modal show={true} onClose={onClose}>
      {product ? (
        <ProductCard product={product} />
      ) : (
        <p>Loading product details...</p>
      )}
    </Modal>
  );
};