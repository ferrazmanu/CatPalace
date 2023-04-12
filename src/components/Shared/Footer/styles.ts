import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.primary};
  font-family: Berkshire;
  padding: 3.7vh 0 15px;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  border-top: 8px solid ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.primary_light};
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing._30};

  .logo {
    aspect-ratio: 193/205;
    max-width: 193px;
    width: 100%;
    position: relative;
    background-image: url("/assets/static/icons/logo-vertical.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    &:hover {
      background-image: url("/assets/static/icons/logo-vertical.gif");
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @media only screen and (max-width: 992px) {
      aspect-ratio: 163/175;
      max-width: 163px;
    }
  }

  .menu {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    gap: 10px;

    .box-links {
      font-size: ${({ theme }) => theme.fontSizes.small_18};
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: center;
      text-align: center;

      li {
        text-transform: lowercase;
        position: relative;

        a {
          display: flex;
          width: 100%;
          align-items: center;
          gap: 8px;

          .icon {
            position: relative;
            width: 18px;
            height: 18px;

            img {
              object-fit: contain;
            }
          }
        }

        &:first-child {
          text-transform: uppercase;
          margin-bottom: 8px;
          font-family: ${({ theme }) => theme.fonts.primary_regular};
        }

        &:not(:first-child)::after {
          position: absolute;
          transition: 0.3s;
          content: "";
          width: 0;
          left: 0;
          bottom: 0;
          height: 1px;
          background: #000;
        }

        &:hover {
          &:not(:first-child)::after {
            width: 100%;
            left: 0;
          }
        }
      }

      @media only screen and (max-width: 1024px) {
        gap: 5px;

        li {
          &:first-child {
            margin-bottom: 5px;
          }
          a {
            gap: 5px;
          }
        }
      }
    }

    .box-links.redes {
      li:not(:first-child) {
        text-transform: unset;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    .menu {
      gap: 15px;
      flex-direction: column;
    }

    .box-links.mapa,
    .box-links.categorias {
      display: none;
    }
  }
`;

export const Copyright = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: ${({ theme }) => theme.fontSizes.small_12};
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  text-align: center;
  margin-top: 3.7vh;
`;
