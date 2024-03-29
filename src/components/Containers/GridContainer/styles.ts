import styled from "styled-components";

interface GridProps {
  responsive: boolean;
}

export const Grid = styled.div<GridProps>`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.responsive
      ? "repeat(auto-fit, minmax(330px, 1fr))"
      : "repeat(3, 1fr)"};
  gap: ${({ theme }) => theme.spacing._30};
  justify-content: center;
  justify-items: ${(props) => (props.responsive ? "start" : "center")};
  height: fit-content;

  @media only screen and (max-width: 768px) {
    justify-items: center;
  }

  @media only screen and (max-width: 360px) {
    display: flex;
    flex-direction: column;
  }
`;
