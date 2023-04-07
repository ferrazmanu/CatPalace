import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem, Product } from "@/common/types";
import { RootState } from "./store";

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const itemExists = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );
      if (itemExists) {
        itemExists.qty++;
      } else {
        state.cartItems.push({ product: action.payload, qty: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );
      item.qty++;
    },
    decrementQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );
      if (item.qty === 1) {
        const index = state.cartItems.findIndex(
          (item) => item.product.id === action.payload.id
        );
        state.cartItems.splice(index, 1);
      } else {
        item.qty--;
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const index = state.cartItems.findIndex(
        (item) => item.product.id === action.payload.id
      );
      state.cartItems.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

const cartItems = (state: RootState) => state.cart.cartItems;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
