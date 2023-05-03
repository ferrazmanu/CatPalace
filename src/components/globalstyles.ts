import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
  }

  
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #dcdbdb;
    }

    ::-webkit-scrollbar-thumb {
      background: #936287;
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #6b4361;
    }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, summary{
    margin: 0;
    line-height: 1.1;
  }

  p, a{
    margin: 0;
    line-height: 1.5;
  }

  ul, li, ol{
    list-style: none;
    padding:0;
    margin:0;
  }

  img{
    transition: .3s ease-in-out;
  }

  body{
    background-color: ${({ theme }) => theme.colors.tertiary};
    background-image: url('/assets/static/BG.png');
    background-repeat: repeat;
    background-position: center center;
    background-size: contain;
    font-family: ${({ theme }) => theme.fonts.primary_light};
  }

  main{
    min-height: 65vh;
    padding: 30px 0;
    margin-top: 120px;

    @media only screen and (max-width: 992px) {
      margin-top: 80px;
    }
  }

  .swiper{
    width: 100%;
    height: 100%;
  }

  @font-face {
    font-family: Berkshire;
    src: url('/assets/fonts/BerkshireSwashRegular.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: Oswald-Light;
    src: url('/assets/fonts/OswaldVariable.ttf') format('truetype');
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: Oswald-Regular;
    src: url('/assets/fonts/OswaldVariable.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;
  }
  
  @font-face {
    font-family: Oswald-Medium;
    src: url('/assets/fonts/OswaldVariable.ttf') format('truetype');
    font-weight: 500;
    font-display: swap;
  }
`;

export default GlobalStyle;
