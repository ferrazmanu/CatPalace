import styled from "styled-components";
import { ButtonStylesProps } from "@/common/types";

export const Button = styled.a<ButtonStylesProps>`
  border-radius: 30px;
  font-family: ${({ theme }) => theme.fonts.primary_light};
  font-size: ${({ theme }) => theme.fontSizes.medium_24};
  color: ${(props) =>
    props.color ? props.color : `${({ theme }) => theme.colors.primary}`};
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

  @media only screen and (max-width: 1024px) {
    height: 44px;
    font-size: ${({ theme }) => theme.fontSizes.small_18};
  }
`;
