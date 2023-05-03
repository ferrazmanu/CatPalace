import { StylesProps } from "@/common/types";
import styled from "styled-components";

export const Cart = styled.div<StylesProps>`
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.tertiary};
  height: 100%;
  justify-content: flex-start;
  min-width: 20%;
  max-width: 500px;
  width: 100%;
  padding: 30px;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
  ${(props) =>
    props.open ? "transform: translateX(0%)" : "transform: translateX(100%)"};
  gap: 20px;
  z-index: 95;

  .close-cart {
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
    align-self: flex-end;
  }

  @media only screen and (max-width: 1024px) {
    padding: 15px;
  }

  @media only screen and (max-width: 420px) {
    max-width: 330px;
  }
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  min-height: 86%;
  height: 100%;

  .bottom-cart {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media only screen and (max-height: 740px) {
    min-height: 64%;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  overflow: auto;
`;

export const CartTitle = styled.h6`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.medium_30};
  margin-bottom: 10px;
`;

export const Total = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.medium_24};
  border-top: 0.5px solid ${({ theme }) => theme.colors.secondary};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.secondary};
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`;
