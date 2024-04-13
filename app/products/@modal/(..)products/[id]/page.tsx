import Modal from '@/components/modal';
import { ProductCard } from '@/components/productCard';
import { Product } from '@/app/products/page';

interface Props {
  id: string;
  products: Product[];
}

const ProductModal = ({ id, products }: Props) => {
  const product: Product | undefined = products.find(p => p.id === parseInt(id));

  return (
    <Modal>
      {product ? (
        <ProductCard product={product} />
      ) : (
        <p>No product found.</p>
      )}
    </Modal>
  );
};

export default ProductModal;