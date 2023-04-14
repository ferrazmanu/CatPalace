import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartMiddleware from "./middleware";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
