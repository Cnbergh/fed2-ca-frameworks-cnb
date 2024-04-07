export type Product = {
  id: string;
  title: string;
  href: string;
  price: string;
  image: {
    url: string;
    alt: string;
  };
};

const products: Product[] = [
  {
    id: '1',
    title: 'Product',
    href: '',
    price: '45.99',
    image: {
      url: 'https://placehold.co/600x400/png',
      alt: '',
    },
  },
  {
    id: '2',
    title: 'Product',
    href: '',
    price: '43.99',
    image: {
      url: 'https://placehold.co/600x400/png',
      alt: '',
    },
  },
  {
    id: '3',
    title: 'Product',
    href: '',
    price: '42.99',
    image: {
      url: 'https://placehold.co/600x400/png',
      alt: '',
    },
  },
];

export default products;
