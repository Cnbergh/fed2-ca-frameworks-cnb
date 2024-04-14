import Modal from '@/components/modal';
import { ProductCard } from '@/components/productCard';
import { Product } from '@/app/products/page';

interface modelProps {
  product: Product;
}

const ProductModal = ({ product }: modelProps) => {

  return (
    <Modal>
      <ProductCard product={product} />
    </Modal>
  );
};

export default ProductModal
