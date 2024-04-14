import Modal from '@/components/modal';
import { ProductCard } from '@/components/productCard';
import { Product } from '@/app/products/page';

interface ProductModalProps {
  product: Product;
}

const ProductModal: React.FC<ProductModalProps> = ({ product }: ProductModalProps) => {
  return (
    <Modal>
      <ProductCard product={product} />
    </Modal>
  );
};

export default ProductModal;