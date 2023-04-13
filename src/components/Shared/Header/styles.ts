import { StylesProps } from "@/common/types";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: Berkshire;
  padding: 15px 0;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 95;
  top: 0;

  @media only screen and (max-width: 992px) {
    padding: 5px 0;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    aspect-ratio: 210/90;
    max-width: 210px;
    width: 100%;
    position: relative;
    background-image: url("/assets/static/icons/logo-horizontal.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    &:hover {
      background-image: url("/assets/static/icons/logo-horizontal.gif");
    }

    @media only screen and (max-width: 992px) {
      aspect-ratio: 150/80;
      max-width: 150px;
    }
  }

  .hamburguer-menu,
  .close {
    display: none;
    background-color: transparent;
    border: none;
    cursor: pointer;

    @media only screen and (max-width: 992px) {
      display: flex;
    }
  }

  .hamburguer-menu {
    max-width: 40px;
    width: 100%;
    flex-direction: column;
    gap: 5px;

    div {
      height: 3px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .close {
    align-self: flex-end;
  }

  .cart {
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: ease-in-out 0.2s;

    .cart-qty {
      position: absolute;
      display: flex;
      right: -5px;
      top: 2px;
      font-size: 13px;
      background-color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      border-radius: 50%;
      width: 15px;
      height: 15px;
      align-items: center;
      justify-content: center;
      line-height: 1;
      color: ${({ theme }) => theme.colors.secondary};
      aspect-ratio: 1;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .mobile-display {
    max-width: 90px;
    width: 100%;
    gap: 20px;
    justify-content: center;
    align-items: center;
    display: none;

    @media only screen and (max-width: 992px) {
      display: flex;
    }
  }
`;

export const MenuList = styled.div<StylesProps>`
  max-width: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing._30};
  font-size: ${({ theme }) => theme.fontSizes.medium_24};
  text-transform: lowercase;
  z-index: 10;

  li {
    display: flex;
    gap: ${({ theme }) => theme.spacing._30};
    align-items: center;
    transition: ease-in-out 0.2s;

    &::after {
      content: "";
      width: 5px;
      height: 5px;
      background-color: ${({ theme }) => theme.colors.secondary};
      border-radius: 50%;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  @media only screen and (max-width: 992px) {
    position: fixed;
    right: 0;
    top: 0;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.tertiary};
    min-height: 100vh;
    height: 100%;
    justify-content: flex-start;
    max-width: 300px;
    padding-top: 30px;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
    transition: 0.3s ease-in-out;
    ${(props) =>
      props.open
        ? "transform: translateX(0%);"
        : "transform: translateX(100%);"}

    li {
      &::after {
        display: none;
      }
    }

    .cart {
      display: none;
    }
  }
`;

export const Overlay = styled.div<StylesProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
  ${(props) => (props.open ? "display: block;" : "display: none;")}
`;
