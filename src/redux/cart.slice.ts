import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem, Product } from "@/common/types";
import { RootState } from "./store";
import { useSelector } from "react-redux";

export interface CartState {
  cartItems: CartItem[];
  isCartOpen: boolean;
}

const initialState: CartState = {
  cartItems: [],
  isCartOpen: false,
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
        itemExists.product.qty++;
      } else {
        state.cartItems.push({ product: { ...action.payload, qty: 1 } });
      }
    },
    incrementQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );
      item.product.qty++;
    },
    decrementQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );
      if (item.product.qty === 1) {
        const index = state.cartItems.findIndex(
          (item) => item.product.id === action.payload.id
        );
        state.cartItems.splice(index, 1);
      } else {
        item.product.qty--;
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const index = state.cartItems.findIndex(
        (item) => item.product.id === action.payload.id
      );
      state.cartItems.splice(index, 1);
    },
    handleCartShow: (state) => {
      if (state.isCartOpen === false) {
        state.isCartOpen = true;
      } else {
        state.isCartOpen = false;
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const cartItems = (state: RootState) => state.cart.cartItems;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  handleCartShow,
} = cartSlice.actions;
