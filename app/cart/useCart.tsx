import { create } from 'zustand';

const useCart = create((set) => ({
  cart: [],
  product: {},
  openModal: false,
  setOpenModal: () => {
    set((state: any) => ({ ...state, openModal: !state.openModal }));
  },
  setProduct: (newProduct: any) => {
    set((state: any) => ({ ...state, product: newProduct }));
  },
  addItemToCart: (newItem: any) => {
    set((state: any) => {
      const newCart = [...state.cart, newItem];
      localStorage.setItem('cart', JSON.stringify(newCart));
      return { ...state, cart: newCart };
    });
  },
  removeItemFromCart: (itemIndex: any) => {
    set((state: any) => {
      const newCart = state.cart.filter((_: any, index: any) => index !== itemIndex);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return { ...state, cart: newCart };
    });
  },
  emptyCart: () => {
    set((state: any) => {
      localStorage.removeItem('cart');
      return { ...state, cart: [] };
    });
  },
}));

export default useCart;