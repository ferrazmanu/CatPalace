import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  position: relative;
  max-width: 200px;
  width: 100%;
  border-bottom: 1px solid #000;
  height: 35px;
  align-items: center;

  input {
    width: 100%;
    height: 100%;
    position: absolute;
    border: none;
    background-color: transparent;
    font-size: ${({ theme }) => theme.fontSizes.small_18};
    font-family: ${({ theme }) => theme.fonts.primary_light};
  }

  button {
    height: 100%;
    position: absolute;
    background-color: transparent;
    cursor: pointer;
    border: none;
    right: 0;
    padding: 0;
    width: 18px;
    height: 18px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 992px) {
    input {
      font-size: ${({ theme }) => theme.fontSizes.small_18};
    }
  }
`;
