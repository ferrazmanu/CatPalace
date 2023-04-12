import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import * as S from "./styles";

import { Container } from "../../sharedstyles";
import { CartIcon, CloseIcon } from "@/components/Icons";
import { menuLinks } from "../menuLinks";
import { Cart } from "../Cart";

import { useDispatch, useSelector } from "react-redux";
import {
  handleCartShow,
  closeCart,
  totalCartQuantity,
} from "@/redux/cart.slice";
import { RootState } from "@/redux/store";

export function Header() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const quantity = useSelector(totalCartQuantity);

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    if (openMenu === false) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  const handleClose = () => {
    setOpenMenu(false);
    dispatch(closeCart());
  };

  return (
    <>
      <S.Header>
        <Container>
          <S.MenuContainer>
            <Link href="/" className="logo" />

            <S.Overlay
              open={openMenu || cart.isCartOpen}
              onClick={handleClose}
            ></S.Overlay>
            <S.MenuList open={openMenu}>
              <button type="button" className="close" onClick={handleOpenMenu}>
                <CloseIcon />
              </button>
              {menuLinks.map((links) => {
                return (
                  <li key={links.id}>
                    <Link href={links.slug}>{links.title}</Link>
                  </li>
                );
              })}
              <button
                className="cart"
                type="button"
                onClick={() => dispatch(handleCartShow())}
              >
                <CartIcon color="#936287" />
                <span className="cart-qty">{quantity}</span>
              </button>
            </S.MenuList>

            <Cart open={cart.isCartOpen} />

            <div className="mobile-display">
              <button
                className="cart"
                type="button"
                onClick={() => dispatch(handleCartShow())}
              >
                <CartIcon color="#936287" />
                <span className="cart-qty">{quantity}</span>
              </button>

              <button
                type="button"
                className="hamburguer-menu"
                onClick={handleOpenMenu}
              >
                <div></div>
                <div></div>
                <div></div>
              </button>
            </div>
          </S.MenuContainer>
        </Container>
      </S.Header>
    </>
  );
}
