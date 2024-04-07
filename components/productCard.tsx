import Image from 'next/image'
import { Product } from '@/lib/mock/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <>
      <Image
        alt=''
        src={product.image.url}
        height={600}
        width={600}
        className='col-span-1 aspect-square w-full object-cover'
      />

      <div className=' bg-white p-2 px-4'>
        <h3 className='font-serif text-xl font-medium'>{product.title}</h3>
        <p className='text-sm text-gray-500'>Price: {product.price}</p>
      </div>
    </>
  )
}