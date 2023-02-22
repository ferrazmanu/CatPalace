import { gql } from "graphql-request";
import { api_endpoint } from "pages/api";

export async function GetHomeBanners() {
  const GET_HOME_BANNERS = gql`
    {
      banners {
        id
        alt
        bannerImage {
          url
        }
        link
      }
    }
  `;

  const data = await api_endpoint.request(GET_HOME_BANNERS);

  return data.banners;
}

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

export async function GetAllProductsBySlug() {
  const GET_ALL_PRODUCTS_SLUG = gql`
    {
      products {
        slug
      }
    }
  `;

  const data = await api_endpoint.request(GET_ALL_PRODUCTS_SLUG);

  return data.products;
}

export async function GetAllProducts(slug) {
  const GET_ALL_PRODUCTS = gql`
    query GetAllProducts($slug: String!) {
      products(where: { slug: $slug }) {
        description
        slug
        name
        oldPrice
        price
        specifications {
          text
        }
        images {
          url
        }
      }
    }
  `;
  const variables = { slug };
  const data = await api_endpoint.request(GET_ALL_PRODUCTS, variables);
  return data.products;
}

export async function GetAllPostsSlug() {
  const GET_ALL_POSTS_SLUG = gql`
    query GetAllPostsBySlug {
      posts {
        slug
      }
    }
  `;

  const data = await api_endpoint.request(GET_ALL_POSTS_SLUG);

  return data.posts;
}

export async function GetAllPosts(slug) {
  const GET_ALL_POSTS = gql`
    query GetAllPosts($slug: String!) {
      posts(where: { slug: $slug }) {
        slug
        title
        id
        date
        author {
          ... on Author {
            name
          }
        }
        coverImage {
          url
        }
        content {
          text
        }
      }
    }
  `;
  const variables = { slug };
  const data = await api_endpoint.request(GET_ALL_POSTS, variables);
  return data.posts;
}

export async function GetOtherPosts(slug) {
  const OTHER_POSTS = gql`
    query GetOtherPosts($slug: String!) {
      posts(where: { NOT: { slug: $slug } }) {
        id
        exerpt
        slug
        title
        coverImage {
          url
        }
      }
    }
  `;

  const variables = { slug };
  const data = await api_endpoint.request(OTHER_POSTS, variables);

  return data.posts;
}
