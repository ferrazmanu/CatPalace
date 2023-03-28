import { useState, useEffect } from "react";

import { CloseIcon } from "@/components/Icons";
import { CartItem } from "./components/CartItem";
import * as S from "./styles";

export function Cart({ open, handleOpenCart }) {
  return (
    <>
      <S.Cart open={open}>
        <button type="button" className="close-cart" onClick={handleOpenCart}>
          <CloseIcon />
        </button>

        <S.CartItemsContainer>
          <CartItem />
        </S.CartItemsContainer>
      </S.Cart>
    </>
  );
}
