import Cookies from "js-cookie";
import { RootState } from "./store";

const cartMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  const state: RootState = store.getState();

  Cookies.set("cart", JSON.stringify(state.cart.cartItems));

  return result;
};

export default cartMiddleware;
