import styled from "styled-components";

export const Breadcrumb = styled.nav`
  display: flex;
  gap: 15px;
  padding-top: 2.08vw;

  a {
    display: flex;
    gap: 15px;

    &:not(:last-child)::after {
      content: ">";
    }
  }

  @media only screen and (max-width: 1024px) {
    gap: 5px;

    a {
      gap: 5px;
    }
  }
`;
