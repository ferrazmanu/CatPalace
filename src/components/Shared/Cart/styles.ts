import { StylesProps } from "@/common/types";
import styled from "styled-components";

export const Cart = styled.div<StylesProps>`
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.tertiary};
  min-height: 100vh;
  height: 100%;
  justify-content: flex-start;
  max-width: 300px;
  width: 100%;
  padding: 30px;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
  ${(props) =>
    props.open ? "transform: translateX(0%)" : "transform: translateX(100%)"};

  .close-cart {
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
    align-self: flex-end;
  }
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;
