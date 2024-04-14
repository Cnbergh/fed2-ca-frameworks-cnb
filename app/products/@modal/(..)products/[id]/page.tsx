import Modal from '@/components/modal';
import { ProductCard } from '@/components/productCard';
import { Product } from '@/app/products/page';

interface Props {
  product?: Product;
  id?: string;
}

const ProductModal = ({ product, id }: Props) => {

  return (
    <Modal>
      <ProductCard id={id} product={product} />
    </Modal>
  );
};

export default ProductModal
