import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
`;

export const Post = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: ${({ theme }) => theme.spacing._30};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  max-height: 37vh;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  img {
    object-fit: cover;
    width: 100%;
    position: relative !important;
    object-position: center;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.big_48};
    }
  }

  .author {
    font-size: ${({ theme }) => theme.fontSizes.medium_24};
  }
`;

export const Text = styled.div`
  p {
    font-size: ${({ theme }) => theme.fontSizes.small_18};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSizes.medium_30};
    margin-top: 20px;
    margin-bottom: 5px;
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSizes.medium_24};
    margin-top: 10px;
    margin-bottom: 5px;
  }

  ul {
    margin-left: 35px;

    li {
      list-style: circle;
    }
  }

  &.faq {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Date = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small_18};
  margin-top: 5vh;
`;
