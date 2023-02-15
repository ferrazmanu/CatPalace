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
`;
