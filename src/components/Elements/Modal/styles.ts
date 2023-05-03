import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;

  .close-modal {
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
    align-self: flex-end;
    position: absolute;
  }
`;

export const ContentBox = styled.div`
  background-color: #fff;
  max-width: 45%;
  width: 100%;
  min-height: 100px;
  height: fit-content;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  color: ${({ theme }) => theme.colors.secondary};

  .modal-header,
  .modal-body {
    text-align: center;
  }

  .modal-header {
    /* border-bottom: 0.5px solid ${({ theme }) => theme.colors.secondary}; */
    /* padding-bottom: 5px; */
    font-size: ${({ theme }) => theme.fontSizes.medium_30};
  }

  .modal-body {
    font-size: ${({ theme }) => theme.fontSizes.medium_24};
  }

  @media only screen and (max-width: 1024px) {
    max-width: 80%;
  }

  @media only screen and (max-width: 420px) {
    max-width: 90%;
  }
`;
