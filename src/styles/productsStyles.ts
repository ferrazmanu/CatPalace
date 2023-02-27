import styled from "styled-components";

export const ContentHolder = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing._60};

  .grid-container {
    max-width: 70%;
  }
`;

export const Categories = styled.div`
  max-width: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.medium_32};
    font-weight: 400;
  }
`;
