import { Product } from "@/common/types";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface CartState {
  cartItems: Product[];
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
      console.log(action.payload);
      const itemExists = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.colorVariant === action.payload.colorVariant &&
          item.sizeVariant === action.payload.sizeVariant
      );
      if (itemExists) {
        if (itemExists.qty < itemExists.availableQty) {
          itemExists.qty++;
        }
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.colorVariant === action.payload.colorVariant &&
          item.sizeVariant === action.payload.sizeVariant
      );
      if (item.qty < item.availableQty) {
        item.qty++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.colorVariant === action.payload.colorVariant &&
          item.sizeVariant === action.payload.sizeVariant
      );
      if (item.qty === 1) {
        const index = state.cartItems.findIndex(
          (item) =>
            item.id === action.payload.id &&
            item.colorVariant === action.payload.colorVariant &&
            item.sizeVariant === action.payload.sizeVariant
        );
        state.cartItems.splice(index, 1);
      } else {
        item.qty--;
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const index = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.colorVariant === action.payload.colorVariant &&
          item.sizeVariant === action.payload.sizeVariant
      );
      state.cartItems.splice(index, 1);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    handleCartShow: (state) => {
      if (state.isCartOpen === false) {
        state.isCartOpen = true;
      } else {
        state.isCartOpen = false;
      }
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    loadCartFromCookies: (state, action: PayloadAction<Product[]>) => {
      state.cartItems = action.payload;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const cartItems = (state: RootState) => state.cart.cartItems;

export const totalCartQuantity = createSelector(cartItems, (items) =>
  items.reduce((total, item) => total + item.qty, 0)
);

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
  handleCartShow,
  closeCart,
  loadCartFromCookies,
} = cartSlice.actions;
