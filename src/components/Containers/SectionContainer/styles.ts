import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 2.78vw 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing._30};

  h2 {
    font-family: ${({ theme }) => theme.fonts.secondary_regular};
    font-size: ${({ theme }) => theme.fontSizes.big_60};
    text-align: center;
  }

  .button {
    max-width: 265px;
  }
`;
