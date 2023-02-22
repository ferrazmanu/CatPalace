import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p{
    margin: 0;
  }

  ul, li, ol{
    list-style: none;
    padding:0;
    margin:0;
  }

  body{
    background-color: ${({ theme }) => theme.colors.tertiary};
    background-image: url('/assets/static/BG.png');
    background-repeat: repeat;
    background-position: center center;
    background-size: contain;
    font-family: ${({ theme }) => theme.fonts.primary_regular};
  }

  .swiper{
    width: 100%;
  }

  @font-face {
    font-family: Berkshire;
    src: url('/assets/fonts/BerkshireSwashRegular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: Oswald-Light;
    src: url('/assets/fonts/OswaldVariable.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: Oswald-Regular;
    src: url('/assets/fonts/OswaldVariable.ttf') format('truetype');
    font-weight: 400;
  }
  
  @font-face {
    font-family: Oswald-Medium;
    src: url('/assets/fonts/OswaldVariable.ttf') format('truetype');
    font-weight: 500;
  }
`;

export default GlobalStyle;