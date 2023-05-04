import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.medium_24};
`;

export const Input = styled.input`
  height: 28px;
  padding: 2px 8px;
  border-radius: 5px;
  border: 1px solid #000;
  font-size: ${({ theme }) => theme.fontSizes.small_18};
  font-family: ${({ theme }) => theme.fonts.primary_light};
`;

export const Textarea = styled.textarea`
  resize: none;
  height: 100px;
  padding: 0 8px;
  border-radius: 5px;
  border: 1px solid #000;
  font-size: ${({ theme }) => theme.fontSizes.small_18};
  font-family: ${({ theme }) => theme.fonts.primary_light};
`;
