import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: Berkshire;
  padding: 15px 0;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
  text-transform: lowercase;
  position: relative;
  z-index: 5;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .logo {
    max-width: 210px;
    width: 100%;

    img {
      object-fit: contain;
    }
  }

  .menu {
    max-width: fit-content;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.spacing._30};
    font-size: ${({ theme }) => theme.fontSizes.medium_30};

    li {
      display: flex;
      gap: ${({ theme }) => theme.spacing._30};
      align-items: center;

      &:not(:last-child)::after {
        content: "";
        width: 5px;
        height: 5px;
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: 50%;
      }
    }
  }
`;

export const SubHeader = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: Berkshire;
  padding: 15px 0;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  text-transform: lowercase;
`;

export const SubMenuContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing._30};
  font-size: ${({ theme }) => theme.fontSizes.medium_24};
`;
