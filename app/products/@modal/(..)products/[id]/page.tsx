'use client'
import Modal from '@/components/modal';
import { ProductCard } from '@/components/productCard';
import { Product } from '@/app/products/page';

export interface ProductModalProps {
  product?: Product;
  productId?: string;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, productId }) => {

  return (
    <Modal show={true}>
      {product && <ProductCard product={product} />}
    </Modal>
  );
};

export default ProductModal