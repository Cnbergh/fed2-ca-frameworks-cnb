import Modal from '@/components/modal'
import ProductCard from '@/components/productCard'
import products, { Product } from '@/lib/mock/products'

export default function ProductModal({
  params: { id }
}: {
  params: { id: string }
}) {
  const product: Product = products.find(p => p.id === id)!

  return (
    <Modal>
      <ProductCard product={product} />
    </Modal>
  )
}