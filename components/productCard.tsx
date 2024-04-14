"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Modal from '@/components/modal';
import useCart from '@/app/cart/useCart';
import PageLoader from 'next/dist/client/page-loader';

export function ProductCard({ product }: any) {
  const { title, description, price, image = {}, reviews, rating } = product || {};
  const { url = '/FallbackImage.png', alt = 'Default image' } = image;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addItemToCart } = useCart();

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
    <div className="product-card">
      <img src={url} alt={alt} onClick={handleModalOpen} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Rating: {rating}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <Link href={`/products/${product.id}`} onClick={PageLoader}>
        View Details
      </Link>
      <Modal show={isModalOpen} onClose={handleModalClose}>
        <div className="modal-content">
        <img src={url} alt={alt} />
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <button onClick={handleModalClose}>Close</button>
        </div>
      </Modal>
    </div>
  );
}