import Image from "next/image";
import Link from "next/link";
import { Container } from "../../sharedstyles";
import * as S from "./styles";
import { menuLinks, subMenuLinks } from "./menuLinks";

export function Header() {
  return (
    <>
      <S.Header>
        <Container>
          <S.MenuContainer>
            <Link href="/" className="logo">
              <Image
                src="/assets/static/logo-horizontal.png"
                width={210}
                height={90}
                alt="Logo com um gatinho feliz de coroa"
                priority={true}
              />
            </Link>

            <ul className="menu">
              {menuLinks.map((links) => {
                return (
                  <li key={links.id}>
                    <Link href={links.slug}>{links.title}</Link>
                  </li>
                );
              })}
              <li>
                <Link href="">carrinho</Link>
              </li>
            </ul>
          </S.MenuContainer>
        </Container>
      </S.Header>
      <S.SubHeader>
        <Container>
          <S.SubMenuContainer>
            {subMenuLinks.map((links) => {
              return (
                <li key={links.id}>
                  <Link href={links.slug}>{links.title}</Link>
                </li>
              );
            })}
          </S.SubMenuContainer>
        </Container>
      </S.SubHeader>
    </>
  );
}
