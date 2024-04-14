'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Modal from '@/components/modal';
import useCart from '@/app/cart/useCart';
import PageLoader from 'next/dist/client/page-loader';

export function ProductCard({ product }: any) {
  const {
    title,
    description,
    price,
    image = {},
    reviews,
    rating,
  } = product || {};
  const { url = '/FallbackImage.png', alt = 'Default image' } = image;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addItemToCart } = useCart();

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    addItemToCart(product);
    alert('Product added to cart!');
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-card border border-gray-300 rounded-lg w-full h-full">
  <img
    src={url}
    alt={alt}
    onClick={handleModalOpen}
    className="w-full h-72 max-h-96 object-cover mb-4 rounded-lg"
  />
  <div className="border border-gray-300 p-4 rounded-b-lg">
    <h3 className="mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <p className="mb-2">Rating: {rating}</p>
    <button
      onClick={handleAddToCart}
      className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
    >
      Add to Cart
    </button>
  </div>
  <div className="w-full p-4 mx-auto flex flex-row align-bottom mt-auto">
    <Link
      href={`/products/${product.id}`}
      onClick={PageLoader}
      className="bg-black hover:bg text-white text-center px-4 py-2 rounded-md w-full"
    >
      <span className="mx-auto">View Details</span>
    </Link>
  </div>
  <Modal show={isModalOpen} onClose={handleModalClose}>
    <div className="modal-content">
      <img
        src={url}
        alt={alt}
        className="w-full max-h-96 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-gray-600">Price: ${price}</p>
      <p className="text-gray-600">Rating: {rating}</p>
      <button
        onClick={handleModalClose}
        className="hover:bg-gray-200 bg-gray-300 text-gray-800 px-4 py-2 rounded-md mt-4"
      >
        Close
      </button>
    </div>
  </Modal>
</div>

  );
}
