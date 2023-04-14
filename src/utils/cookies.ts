import Cookies from "js-cookie";
import { Product } from "@/common/types";

export const getCartFromCookies = () => {
  const cartDataFromCookies = Cookies.get("cart");
  let initialCartItems: Product[] = [];
  if (cartDataFromCookies) {
    initialCartItems = JSON.parse(cartDataFromCookies);
  }

  return initialCartItems;
};
