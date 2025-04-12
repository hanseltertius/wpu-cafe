import { create } from 'zustand';
import { ICart } from '../types/cart';

interface CartStore {
  carts: ICart[];
  addItemToCart: (cart: ICart) => void;
  editItemInCart: (id: string, cart: ICart) => void;
  removeCart: (id: string) => void;
}

const useCartStore = create<CartStore>((set, get) => ({
  carts: [],
  addItemToCart: (cart) => {
    const { carts } = get();
    set({
      carts: [...carts, cart],
    });
  },
  incrementItemInCart: (id: string) => {
    const { carts } = get();
    set({
      carts: carts.map((item) =>
        item.menuItemId === id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    });
  },
  decrementItemInCart: (id: string) => {
    const { carts } = get();
    set({
      carts: carts.map((item) =>
        item.menuItemId === id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    });
  },
  editItemInCart: (id: string, cart: ICart) => {
    const { carts } = get();
    set({
      carts: carts.map((item) => (item.menuItemId === id ? cart : item)),
    });
  },
  removeCart: (id) => {
    const { carts } = get();
    set({
      carts: carts.filter((item) => item.menuItemId !== id),
    });
  },
}));

export default useCartStore;
