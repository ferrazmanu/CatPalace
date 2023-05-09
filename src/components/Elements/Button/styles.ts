import styled from "styled-components";
import { ButtonStylesProps } from "@/common/types";

export const Button = styled.button<ButtonStylesProps>`
  border-radius: 30px;
  font-family: ${({ theme }) => theme.fonts.primary_light};
  font-size: ${({ theme }) => theme.fontSizes.medium_24};
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.colors.primary};
  background-color: ${(props) =>
    props.background ? props.background : `transparent`};
  border: ${(props) => (props.border ? props.border : `1px solid #000`)};
  height: 48px;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  line-height: 1;
  cursor: pointer;
  text-transform: lowercase;
  transition: 0.2s ease-in-out;
  text-align: center;

  &:hover {
    box-shadow: inset 0px 0px 1px 1px #000;
  }

  &::after {
    width: 0%;
  }

  @media only screen and (max-width: 1024px) {
    height: 44px;
    font-size: ${({ theme }) => theme.fontSizes.small_18};
  }
`;

export const Link = styled.a<ButtonStylesProps>`
  border-radius: 30px;
  font-family: ${({ theme }) => theme.fonts.primary_light};
  font-size: ${({ theme }) => theme.fontSizes.medium_24};
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.colors.primary};
  background-color: ${(props) =>
    props.background ? props.background : `transparent`};
  border: ${(props) => (props.border ? props.border : `1px solid #000`)};
  height: 48px;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  line-height: 1;
  cursor: pointer;
  text-transform: lowercase;
  transition: 0.2s ease-in-out;
  text-align: center;

  &:hover {
    box-shadow: inset 0px 0px 1px 1px #000;
  }

  &::after {
    width: 0%;
  }

  @media only screen and (max-width: 1024px) {
    height: 44px;
    font-size: ${({ theme }) => theme.fontSizes.small_18};
  }
`;
