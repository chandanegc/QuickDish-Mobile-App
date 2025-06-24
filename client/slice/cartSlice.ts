import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  price: number;
  name?: string;
  image?: any;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      state.items = [...state.items, action.payload];
    },
    removeFromCart(state, action: PayloadAction<{ id: string }>) {
      let newCart = [...state.items];
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log("can't remove item that is not added to cart");
      }
      state.items = newCart;
    },
    emptyCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

export const selectTotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);

// Memoized selector to avoid unnecessary rerenders
export const selectCartItemsById = createSelector(
  [
    (state: { cart: CartState }) => state.cart.items,
    (_: { cart: CartState }, id: string) => id,
  ],
  (items, id) => items.filter((item) => item.id === id)
);

export default cartSlice.reducer;
