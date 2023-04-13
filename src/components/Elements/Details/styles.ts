import styled from "styled-components";

export const Details = styled.details`
  &[open] {
    summary::after {
      transform: rotate(-180deg);
      top: 58%;
    }
  }

  summary {
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

    &::after {
      display: flex;
      align-items: center;
      transition: 0.25s transform ease;
      transform: rotate(0);
      content: url("/assets/static/icons/show-arrow.png");
      position: absolute;
      right: 0%;
      height: 10px;
      top: 30%;
    }
  }

  ul,
  p,
  li {
    padding-top: 10px;
    font-size: ${({ theme }) => theme.fontSizes.medium_24};
  }

  li.product-category {
    position: relative;
    width: fit-content;

    &::after {
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
      &:after {
        width: 100%;
        left: 0;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    p,
    ul,
    li {
      font-size: ${({ theme }) => theme.fontSizes.small_18};
    }
  }
`;
