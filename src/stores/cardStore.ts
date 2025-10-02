import { CartActionType, CartStoreStateType } from '@/types'
import { create } from 'zustand'
import { persist , createJSONStorage} from "zustand/middleware"


const useCartStore = create<CartStoreStateType & CartActionType>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (product) => set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore



