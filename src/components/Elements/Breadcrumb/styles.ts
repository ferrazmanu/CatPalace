import styled from "styled-components";

export const Breadcrumb = styled.nav`
  display: flex;
  gap: 15px;
  font-size: ${({ theme }) => theme.fontSizes.small_18};

  a {
    display: flex;
    gap: 15px;
    color: ${({ theme }) => theme.colors.primary};

    &:not(:last-child)::after {
      content: ">";
    }

    &:last-child {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media only screen and (max-width: 1024px) {
    gap: 5px;
    font-size: ${({ theme }) => theme.fontSizes.small_18};
    a {
      gap: 5px;
    }
  }
`;
