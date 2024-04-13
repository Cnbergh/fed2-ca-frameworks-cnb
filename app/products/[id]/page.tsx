import Link from 'next/link'
import products, { Product } from '../page'
import {ProductCard} from '@/components/productCard'

export default function ProductPage({
  params: { id }
}: {
  params: { id: string }
}) {
  const product = products.find(p => p.id === parseInt(id));

  return (
    <section className='py-24'>
      <div className='container'>
        <div>
          <Link
            href='/products'
            className='font-semibold italic text-sky-600 underline'
          >
            Back to products
          </Link>
        </div>

        <div className='mt-10 w-1/3'>
          <ProductCard product={product} />
        </div>
      </div>
    </section>
  )
}