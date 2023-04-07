import { CloseIcon } from "@/components/Icons";
import { CartItem } from "./components/CartItem";
import * as S from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { formatCurrency } from "utils/format";
import { handleCartShow } from "@/redux/cart.slice";

export function Cart({ open }) {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);

  const getTotalPrice = () => {
    return cart.cartItems.reduce(
      (accumulator, item) => accumulator + item.qty * item.product.price,
      0
    );
  };

  return (
    <>
      <S.Cart open={open}>
        <button
          type="button"
          className="close-cart"
          onClick={() => dispatch(handleCartShow())}
        >
          <CloseIcon />
        </button>

        <S.CartTitle>Carrinho</S.CartTitle>

        {cart.cartItems.length === 0 ? (
          <span>Carrinho vazio :c</span>
        ) : (
          <S.CartItemsContainer>
            <S.Items>
              {cart.cartItems.map((item) => {
                return (
                  <CartItem
                    key={item.product.id}
                    id={item.product.id}
                    image={item.product.image}
                    slug={item.product.slug}
                    name={item.product.name}
                    price={item.product.price}
                    qty={1}
                  />
                );
              })}
            </S.Items>
            <S.Total>
              Total:
              <div>R$ {formatCurrency(getTotalPrice())}</div>
            </S.Total>
          </S.CartItemsContainer>
        )}
      </S.Cart>
    </>
  );
}
