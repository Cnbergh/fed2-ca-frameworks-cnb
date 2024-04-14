import { create } from 'zustand';

interface CartState {
  cart: any[];
  product: any;
  openModal: boolean;
  setOpenModal: () => void;
  setProduct: (newProduct: any) => void; 
  addItemToCart: (newItem: any) => void; 
  removeItemFromCart: (itemIndex: number) => void; 
  emptyCart: () => void;
}

const useCart = create<CartState>((set) => {
  const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');

  return {
    cart: storedCart,
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
  };
});

export default useCart;
