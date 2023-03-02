import styled from "styled-components";

export const Sobre = styled.div`
  .section-container {
    h2 {
      color: ${({ theme }) => theme.colors.secondary};
    }

    p {
      text-align: center;
      font-size: ${({ theme }) => theme.fontSizes.medium_24};
    }
  }

  .mural-funcionarios {
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.big_48};
    }
  }
`;

export const GridFuncionarios = styled.div`
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacing._30};
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
`;

export const EmployeeBox = styled.div`
  display: flex;
  max-width: 315px;
  width: 100%;
  flex-direction: column;
  gap: 15px;
`;

export const Photo = styled.div`
  border: solid 5px ${({ theme }) => theme.colors.secondary};
  position: relative;
  height: 100%;
  aspect-ratio: 315/330;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .name {
    font-size: ${({ theme }) => theme.fontSizes.medium_30};
    font-family: ${({ theme }) => theme.fonts.primary_regular};
  }

  .role {
    font-size: ${({ theme }) => theme.fontSizes.medium_24};
    font-family: ${({ theme }) => theme.fonts.primary_light};
  }
`;
