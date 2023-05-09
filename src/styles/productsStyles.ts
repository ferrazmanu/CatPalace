import styled from "styled-components";

interface CategoriesProps {
  open: boolean;
}

export const ContentHolder = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing._60};

  .grid {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .selected-category {
      font-size: ${({ theme }) => theme.fontSizes.small_18};
    }
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Categories = styled.div<CategoriesProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .todos {
    font-size: ${({ theme }) => theme.fontSizes.medium_30};
    font-family: ${({ theme }) => theme.fonts.primary_regular};
    list-style: none;
    padding-bottom: 10px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;

    a {
      height: inherit;
      width: 100%;
    }
  }

  @media only screen and (max-width: 1024px) {
    position: fixed;
    right: 0;
    top: 0;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.tertiary};
    min-height: 100vh;
    height: 100%;
    justify-content: flex-start;
    max-width: 300px;
    padding: 30px;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.1);
    transition: 0.3s ease-in-out;
    z-index: 99;
    ${(props) =>
      props.open ? "transform: translateX(0%)" : "transform: translateX(100%)"};
    overflow: auto;
  }

  .close {
    display: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    justify-content: flex-end;
    width: fit-content;
    align-self: flex-end;

    @media only screen and (max-width: 1024px) {
      display: flex;
    }
  }
`;

export const CategoriesContainer = styled.div`
  max-width: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.medium_32};
    font-family: ${({ theme }) => theme.fonts.primary_regular};
    font-weight: 400;
  }

  @media only screen and (max-width: 1024px) {
    max-width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MessageContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium_30};
  font-weight: 400;
`;

export const FilterMobile = styled.div`
  display: none;
  font-size: ${({ theme }) => theme.fontSizes.medium_24};
  font-family: ${({ theme }) => theme.fonts.primary_regular};
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;
