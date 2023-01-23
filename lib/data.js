import { gql } from "graphql-request";
import { api_endpoint } from "pages/api";

export async function GetHomePosts() {
  const GET_HOME_POSTS = gql`
    {
      posts(first: 3) {
        id
        slug
        title
        exerpt
        coverImage {
          url
        }
      }
    }
  `;

  const data = await api_endpoint.request(GET_HOME_POSTS);

  return data.posts;
}

export async function GetHomeProducts() {
  const GET_HOME_PRODUCTS = gql`
    {
      products(first: 6) {
        id
        price
        slug
        name
        images(first: 1) {
          url
        }
      }
    }
  `;

  const data = await api_endpoint.request(GET_HOME_PRODUCTS);

  return data.products;
}
