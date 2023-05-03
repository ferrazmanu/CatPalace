import styled from "styled-components";

export const Quantity = styled.div`
  border-radius: 27px;
  border: solid 1px ${({ theme }) => theme.colors.primary};
  max-width: 151px;
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSizes.medium_24};

  .add,
  .subtract {
    background-color: rgba(0, 0, 0, 0.2);
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #000;
  }

  .qty {
    font-size: ${({ theme }) => theme.fontSizes.small_12};
    color: ${({ theme }) => theme.colors.primary};
  }

  button {
    border: none;
  }

  @media only screen and (max-width: 420px) {
    font-size: ${({ theme }) => theme.fontSizes.small_18};
  }
`;
