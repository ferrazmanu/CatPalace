import { useEffect, useState } from "react";

import { CloseIcon } from "@/components/Icons";
import { CartItem } from "./components/CartItem";

import { Button } from "@/components/Elements/Button";
import { Modal } from "@/components/Elements/Modal";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { formatCurrency } from "utils/format";
import {
  handleCartShow,
  clearCart,
  closeCart,
  loadCartFromCookies,
} from "@/redux/cart.slice";

import * as S from "./styles";
import { getCartFromCookies } from "utils/cookies";

export function Cart({ open }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const cart = useSelector((state: RootState) => state.cart);

  const getTotalPrice = () => {
    return cart.cartItems.reduce(
      (accumulator, item) => accumulator + item.qty * item.price,
      0
    );
  };

  const variantMessage = (x) => {
    if (x.sizeVariant) {
      return `Tamanho: ${x.sizeVariant} - `;
    }
    if (x.colorVariant) {
      return `Cor: ${x.colorVariant} - `;
    }
    return "";
  };

  const sendOrder = () => {
    const number = "+5543991940137";
    const message = cart.cartItems;

    let formattedMessage = `
      Olá, *CatPalace*! Gostaria de realizar o pedido dos seguintes itens da loja:

      ${message
        .map(
          (item) =>
            `${item.qty}x ${item.name} - ${variantMessage(
              item
            )}R$${formatCurrency(item.price * item.qty)}`
        )
        .join("\n")}
        
      *Valor total do pedido*: R$${formatCurrency(getTotalPrice())}
    `
      .replace(/^\s+/gm, "")
      .replace(/\n/g, "\n \n");

    let url = `https://api.whatsapp.com/send?phone=${number}`;
    url += `&text=${encodeURI(formattedMessage)}`;

    window.open(url);
    dispatch(clearCart());
    dispatch(closeCart());
    formattedMessage = "";
    setShowModal(true);
  };

  useEffect(() => {
    const cartData = getCartFromCookies();
    if (cartData) {
      dispatch(loadCartFromCookies(cartData));
    }
  }, [dispatch]);

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
                    key={`${item.id}-${Math.random()}`}
                    id={item.id}
                    image={item.image}
                    slug={item.slug}
                    name={item.name}
                    price={item.price}
                    qty={item.qty}
                    colorVariant={item.colorVariant}
                    sizeVariant={item.sizeVariant}
                    category={item.category}
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

      {showModal && (
        <Modal
          close={() => setShowModal(false)}
          modalHeader={<p>Obrigada por escolher a CatPalace!</p>}
          modalBody={
            <p>
              Seu pedido foi redirecionado para o whatsapp da loja,
              certifique-se de enviá-lo para que nosso atendimento o receba.
            </p>
          }
        />
      )}
    </>
  );
}
