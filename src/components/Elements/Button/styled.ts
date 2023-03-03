import styled from "styled-components";

export const Button = styled.a`
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium_24};
  color: ${({ theme }) => theme.colors.primary};
  height: 48px;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  line-height: 1;

  @media only screen and (max-width: 1024px) {
    height: 44px;
    font-size: ${({ theme }) => theme.fontSizes.small_18};
  }
`;
