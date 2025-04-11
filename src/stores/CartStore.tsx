import { create } from 'zustand';
import { ICart } from '../types/cart';

interface CartStore {
  carts: ICart[];
  handleAddToCart: (
    type: 'increment' | 'decrement',
    id: string,
    name: string,
  ) => void;
  removeCart: (id: string) => void;
}

const useCartStore = create<CartStore>((set, get) => ({
  carts: [],
  handleAddToCart: (type, id, name) => {
    const { carts, removeCart } = get();
    const itemIsInCart = carts.find((item) => item.menuItemId === id);

    if (type === 'increment') {
      if (itemIsInCart) {
        set({
          carts: carts.map((item) =>
            item.menuItemId === id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        });
      } else {
        set({
          carts: [...carts, { menuItemId: id, name, quantity: 1 }],
        });
      }
    } else {
      if (itemIsInCart && itemIsInCart.quantity <= 1) {
        removeCart(id);
      } else {
        set({
          carts: carts.map((item) =>
            item.menuItemId === id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        });
      }
    }
  },
  removeCart: (id) => {
    const { carts } = get();
    set({
      carts: carts.filter((item) => item.menuItemId !== id),
    });
  },
}));

export default useCartStore;
