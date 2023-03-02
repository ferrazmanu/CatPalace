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
    list-style: none;
    padding-bottom: 10px;
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

  ul {
    padding-top: 10px;
    font-size: ${({ theme }) => theme.fontSizes.medium_24};
  }
`;
