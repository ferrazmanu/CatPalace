import { CloseIcon } from "@/components/Icons";
import { CartItem } from "./components/CartItem";
import * as S from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { formatCurrency } from "utils/format";
import { handleCartShow } from "@/redux/cart.slice";
import { Button } from "@/components/Elements/Button";

export function Cart({ open }) {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);

  const getTotalPrice = () => {
    return cart.cartItems.reduce(
      (accumulator, item) => accumulator + item.qty * item.price,
      0
    );
  };

  const sendOrder = () => {
    console.log(cart.cartItems);
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
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    slug={item.slug}
                    name={item.name}
                    price={item.price}
                    qty={item.qty}
                  />
                );
              })}
            </S.Items>
            <div className="bottom-cart">
              <S.Total>
                Total:
                <div>R$ {formatCurrency(getTotalPrice())}</div>
              </S.Total>
              <Button
                text={"Finalizar pedido"}
                background="#936287"
                color="#fff"
                border="none"
                onClick={() => sendOrder()}
              />
            </div>
          </S.CartItemsContainer>
        )}
      </S.Cart>
    </>
  );
}
