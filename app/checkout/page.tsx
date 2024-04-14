'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import useCart from '@/app/cart/useCart';

const CheckoutPage = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const cart = useCart((state: any) => state.cart);
  const totalPrice = cart.reduce((total: any, item: any) => total + (item.price * item.quantity), 0);
  const { removeItemFromCart } = useCart();

  const router = useRouter();

  const handlePlaceOrder = (event: any) => {
    event.preventDefault();
    alert("Thank you for your purchase!");
    setOrderPlaced(true);

    setTimeout(() => {
      router.push('/checkoutSuccess');
    }, 2000);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold my-4">Checkout</h2>
      <div>
        {cart.map((item: any, index: any) => (
          <div key={item.id} className="flex justify-between items-center border-b py-4">
            <div className="flex items-center">
              <img src={item.image.url} alt={item.image.alt} className="w-16 h-16 object-cover rounded-md mr-4" />
              <div>
                <p>{item.title} - Quantity: {item.quantity}</p>
                <p>Price per item: {item.price} kr</p>
              </div>
            </div>
            <div>
              <p>Total: {item.price * item.quantity} kr</p>
              <button className="text-red-500" onClick={() => removeItemFromCart(index)}>Remove</button>
            </div>
          </div>
        ))}
        <p className="mt-4 font-semibold">Total Price: {totalPrice} kr</p>
      </div>
      <form onSubmit={handlePlaceOrder} className="flex flex-col mt-4 border border-gray-300 rounded-lg w-full h-full">
        <div className='flex flex-col md:flex-row'>
        <input type="text" placeholder="Card Number" className="rounded-md px-4 py-2 mr-2 w-full md:w-[49%]" />
        <input type="text" placeholder="Expiration Date" className="rounded-md px-4 py-2 mr-2 w-full md:w-[24%]" />
        <input type="text" placeholder="CVV" className="rounded-md px-4 py-2 mr-2 pb-2 w-full md:w-[24%]" />
        </div>
        <button type="submit" className="bg-black hover:bg text-white text-center px-4 py-2 rounded-md w-full">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
