import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import * as S from "./styles";

import { Container } from "../../sharedstyles";
import { CartIcon, CloseIcon } from "@/components/Icons";
import { menuLinks } from "../menuLinks";
import { Cart } from "../Cart";

import { useDispatch, useSelector } from "react-redux";
import { handleCartShow } from "@/redux/cart.slice";
import { RootState } from "@/redux/store";

export function Header() {
  const dispatch = useDispatch();
  const cartShowState = useSelector(
    (state: RootState) => state.cart.isCartOpen
  );
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    if (openMenu === false) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  return (
    <>
      <S.Header>
        <Container>
          <S.MenuContainer>
            <Link href="/" className="logo">
              <Image
                src="/assets/static/logo-horizontal.png"
                fill
                alt="Logo com um gatinho feliz de coroa"
                priority={true}
              />
            </Link>

            <S.MenuList open={openMenu}>
              <button type="button" className="close" onClick={handleOpenMenu}>
                <CloseIcon />
              </button>
              {menuLinks.map((links) => {
                return (
                  <li key={links.id}>
                    <Link href={links.slug} onClick={handleOpenMenu}>
                      {links.title}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href="#" onClick={() => dispatch(handleCartShow())}>
                  <CartIcon color="#936287" />
                </Link>
              </li>
            </S.MenuList>

            <Cart open={cartShowState} />

            <button
              type="button"
              className="hamburguer-menu"
              onClick={handleOpenMenu}
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
          </S.MenuContainer>
        </Container>
      </S.Header>
    </>
  );
}
