import Modal from '@/components/modal';
import { ProductCard } from '@/components/productCard';
import { Product } from '@/app/products/page';

interface Props {
  product: Product;
}

const ProductModal = ({ product }: Props) => {

  return (
    <Modal>
      <ProductCard product={product} />
    </Modal>
  );
};

export default ProductModal
