import ProductListPage from './products/page'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='font-serif text-3xl font-bold text-slate-700'>
          Welcome!
        </h1>

        <div className='mt-10'>
          <ProductListPage/>
        </div>
      </div>
    </section>
  )
}