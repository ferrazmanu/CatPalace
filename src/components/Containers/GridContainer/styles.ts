import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing._30};
  justify-content: center;
  justify-items: center;
`;
