import { create } from 'zustand';

const useCart = create((set) => ({
  cart: [],
  product: {},
  openModal: false,
  setOpenModal: () => {
    set((state) => ({ ...state, openModal: !state.openModal }));
  },
  setProduct: (newProduct) => {
    set((state) => ({ ...state, product: newProduct }));
  },
  addItemToCart: (newItem) => {
    set((state) => {
      const newCart = [...state.cart, newItem];
      localStorage.setItem('cart', JSON.stringify(newCart));
      return { ...state, cart: newCart };
    });
  },
  removeItemFromCart: (itemIndex) => {
    set((state) => {
      const newCart = state.cart.filter((_, index) => index !== itemIndex);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return { ...state, cart: newCart };
    });
  },
  emptyCart: () => {
    set((state) => {
      localStorage.removeItem('cart');
      return { ...state, cart: [] };
    });
  },
}));

export default useCart;