import { CartActionType, CartStoreStateType } from '@/types'
import { exit } from 'process';
import { create } from 'zustand'
import { persist , createJSONStorage} from "zustand/middleware"


const useCartStore = create<CartStoreStateType & CartActionType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated:false,
      addToCart: (product) => set((state) => {
        const exitingIndex = state.cart.findIndex(p =>
          p.id === product.id &&
          p.selectedSize === product.selectedSize &&
          p.selectedColor === product.selectedColor
        )
        if(exitingIndex !== -1){
          const updatedCart = [...state.cart];
          updatedCart[exitingIndex].quantity += product.quantity || 1;
          return  {cart: updatedCart}
        }

        return {
          cart: [
            ...state.cart,
            {
              ...product,
              quantity:1
            }
          ]
        }
      }),
      removeFromCart: (product) => set((state) => ({ cart: state.cart.filter((p) => !(
        p.id === product.id &&
        p.selectedSize === product.selectedSize &&
        p.selectedColor === product.selectedColor
      )) })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasHydrated = true;
        }
      },
    }
  )
);

export default useCartStore



