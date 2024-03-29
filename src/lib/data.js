import { gql } from "graphql-request";
import { api_endpoint } from "pages/api";

// ALL

export async function GetProductsBySlug() {
  const GET_PRODUCTS_SLUG = gql`
    {
      products {
        slug
        category {
          slug
        }
      }
    }
  `;

  const data = await api_endpoint.request(GET_PRODUCTS_SLUG);

  return data.products;
}

export async function GetProduct(slug) {
  const GET_PRODUCTS = gql`
    query GetProduct($slug: String!) {
      product(where: { slug: $slug }) {
        id
        description
        slug
        name
        oldPrice
        price
        productQuantity
        specifications {
          html
        }
        images {
          url
        }
        seo {
          title
          description
        }
        variants {
          ... on ProductColorVariant {
            id
            colorHex
            color
            variantQuantity
          }
          ... on ProductSizeVariant {
            id
            name
            size
            variantQuantity
          }
        }
        category {
          slug
        }
      }
    }
  `;
  const variables = { slug };
  const data = await api_endpoint.request(GET_PRODUCTS, variables);
  return data.product;
}

export async function GetPostsSlug() {
  const GET_POSTS_SLUG = gql`
    query GetPostsBySlug {
      posts {
        slug
      }
    }
  `;

  const data = await api_endpoint.request(GET_POSTS_SLUG);

  return data.posts;
}

export async function GetPosts(slug) {
  const GET_POSTS = gql`
    query GetPosts($slug: String!) {
      post(where: { slug: $slug }) {
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
          html
        }
        seo {
          title
          description
        }
      }
    }
  `;
  const variables = { slug };
  const data = await api_endpoint.request(GET_POSTS, variables);
  return data.post;
}

export async function GetAllPosts() {
  const GET_ALL_POSTS = gql`
    {
      posts {
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

  const data = await api_endpoint.request(GET_ALL_POSTS);
  return data.posts;
}

export async function GetAllProducts() {
  const GET_ALL_PRODUCTS = gql`
    {
      products(orderBy: publishedAt_DESC) {
        id
        price
        slug
        name
        images(first: 1) {
          url
        }
        subcategory {
          name
        }
        category {
          slug
        }
      }
    }
  `;

  const data = await api_endpoint.request(GET_ALL_PRODUCTS);
  return data.products;
}

// HOME

export async function GetHomeBanners() {
  const GET_HOME_BANNERS = gql`
    {
      banners {
        bannerDesktop {
          url
          id
        }
        bannerMobile {
          url
        }
        alt
        link
        id
        outraAba
      }
    }
  `;

  const data = await api_endpoint.request(GET_HOME_BANNERS);
  return data.banners;
}

export async function GetHomePromotions() {
  const GET_HOME_PROMOTIONS = gql`
    {
      promotions(stage: PUBLISHED) {
        id
        link
        title
        image {
          url
        }
      }
    }
  `;

  const data = await api_endpoint.request(GET_HOME_PROMOTIONS);
  return data.promotions;
}

export async function GetHomePosts() {
  const GET_HOME_POSTS = gql`
    {
      posts(last: 3) {
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
      products(last: 3) {
        id
        price
        slug
        name
        images(first: 1) {
          url
        }
        category {
          slug
        }
      }
    }
  `;

  const data = await api_endpoint.request(GET_HOME_PRODUCTS);
  return data.products;
}

// OTHER

export async function GetOtherPosts(slug) {
  const OTHER_POSTS = gql`
    query GetOtherPosts($slug: String!) {
      posts(last: 3, where: { NOT: { slug: $slug } }) {
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

export async function GetOtherProducts(slug, category) {
  const OTHER_PRODUCTS = gql`
    query GetOtherProducts($slug: String!, $category: String!) {
      products(
        last: 3
        where: { NOT: { slug: $slug }, category: { slug_contains: $category } }
      ) {
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

  const variables = {
    slug,
    category,
  };
  const data = await api_endpoint.request(OTHER_PRODUCTS, variables);

  return data.products;
}

// ABOUT
export async function GetAboutText() {
  const GET_ABOUT_TEXT = gql`
    {
      page(where: { slug: "sobre" }) {
        content {
          html
        }
        title
      }
    }
  `;

  const data = await api_endpoint.request(GET_ABOUT_TEXT);

  return data.page;
}

export async function GetEmployees() {
  const GET_EMPLOYEES = gql`
    {
      employees {
        description
        id
        name
        picture {
          url
        }
        role
      }
    }
  `;

  const data = await api_endpoint.request(GET_EMPLOYEES);

  return data.employees;
}

// CATEGORIES

export async function GetCategories() {
  const GET_CATEGORIES = gql`
    {
      categories {
        product {
          id
        }
        name
        slug
        subcategories {
          name
          slug
          products {
            id
          }
        }
      }
    }
  `;

  const data = await api_endpoint.request(GET_CATEGORIES);

  return data.categories;
}
