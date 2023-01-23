import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: ${({ theme }) => theme.spacing._30};
  justify-content: center;
`;
