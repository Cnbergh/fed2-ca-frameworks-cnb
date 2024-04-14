import Modal from '@/components/modal';
import { ProductCard } from '@/components/productCard';
import { Product } from '@/app/products/page';

export interface ProductModalProps {
  product?: Product;
  id?: string;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, id }) => {

  return (
    <Modal>
      {product && <ProductCard product={product} />}
      {product && <ProductCard id={id} />}
    </Modal>
  );
};

export default ProductModal
