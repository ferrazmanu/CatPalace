import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import * as S from "./styles";

import { Container } from "../../sharedstyles";
import { socialLinks, contactLinks } from "./menuLinks";
import { menuLinks } from "../menuLinks";

export function Footer() {
  return (
    <S.Footer>
      <Container>
        <S.MenuContainer>
          <Link href="/" className="logo">
            <Image
              src="/assets/static/logo-vertical.png"
              fill
              alt="Logo com um gatinho feliz de coroa"
              priority={true}
            />
          </Link>

          <div className="menu">
            <ul className="box-links mapa">
              <li>Mapa do site</li>
              {menuLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.slug}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>
            <ul className="box-links redes">
              <li>Nossas Redes</li>
              {socialLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.slug}>
                      <div className="icon">
                        <Image src={link.icon} fill alt={link.title} />
                      </div>
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="box-links contato">
              <li>Fale Conosco</li>
              {contactLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.slug}>
                      <div className="icon">
                        <Image src={link.icon} fill alt={link.title} />
                      </div>
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </S.MenuContainer>
      </Container>
      <S.Copyright>
        <Container>
          <p>
            Copyright © 2023 CatPalace.com.br TODOS OS DIREITOS RESERVADOS.
            CatPalace Comércio de Artigos de Petshop Ltda / 00.000.000/0000-00
          </p>
        </Container>
      </S.Copyright>
    </S.Footer>
  );
}
