import Link from 'next/link'
import Image from 'next/image'

import products from '@/lib/mock/products'

export default function Products() {
  return (
    <section className='mt-12'>
      <div className='container'>
        <h1 className='font-serif text-3xl font-bold text-gray-700'>Products</h1>

        <ul className='mt-10 grid auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {products.map(({ id, image }) => (
            <li key={id}>
              <Link href={`/products/${id}`}>
                <Image
                  alt=''
                  src={image.url}
                  height={500}
                  width={500}
                  className='aspect-square w-full rounded-xl object-cover'
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}