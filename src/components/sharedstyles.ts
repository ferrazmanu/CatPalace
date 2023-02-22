import styled from "styled-components";

const Container = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    max-width: 90%;
  }

  @media only screen and (max-width: 768px) {
    max-width: 95%;
  }
`;

export { Container };
