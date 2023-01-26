import { GraphQLClient } from "graphql-request";

export const api_endpoint = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
  {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
    },
  }
);
