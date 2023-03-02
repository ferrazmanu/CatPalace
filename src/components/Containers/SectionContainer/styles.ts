import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 1vw 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing._30};

  .button {
    max-width: 265px;
  }

  &.outros {
    h2 {
      font-family: ${({ theme }) => theme.fonts.primary_regular};
      font-size: ${({ theme }) => theme.fontSizes.medium_36};
      text-align: left;
    }

    @media only screen and (max-width: 1024px) {
      h2 {
        text-align: center;
      }
    }
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  font-size: ${({ theme }) => theme.fontSizes.big_60};
  text-align: center;
`;
