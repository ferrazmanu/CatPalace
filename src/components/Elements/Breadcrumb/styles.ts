import styled from "styled-components";

export const Breadcrumb = styled.nav`
  display: flex;
  gap: 15px;
  padding: 2.08vw 0;

  a {
    display: flex;
    gap: 15px;

    &:not(:last-child)::after {
      content: ">";
    }
  }
`;
