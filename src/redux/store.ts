import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
