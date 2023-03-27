import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import * as S from "./styles";

import { Container } from "../../sharedstyles";
import { CartIcon, CloseIcon } from "@/components/Icons";
import { menuLinks } from "../menuLinks";

export function Header() {
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

            <ul className={`menu ${openMenu ? "open" : "closed"}`}>
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
              <li>
                <Link href="">
                  <CartIcon color="#936287" />
                </Link>
              </li>
            </ul>
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
