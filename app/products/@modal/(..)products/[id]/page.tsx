import React from 'react';
import Modal from '@/components/modal';
import { ProductCard } from '@/components/productCard';
import { Product } from '@/app/products/page';

export interface ProductModalProps {
  product?: Product;
  productId?: string;
  onClose: () => void; // Add onClose prop to the interface
}

const ProductModal: React.FC<ProductModalProps> = ({ product, productId, onClose }) => { // Receive onClose prop
  const fetchProductDetails = async () => {
    // Fetch product details based on productId
  };

  React.useEffect(() => {
    if (!product && productId) {
      fetchProductDetails();
    }
  }, [product, productId]);

  return (
    <Modal show={true} onClose={onClose}> {/* Pass onClose prop to the Modal component */}
      {product ? (
        <ProductCard product={product} />
      ) : (
        <p>Loading product details...</p>
      )}
    </Modal>
  );
};

export default ProductModal;