import Head from "next/head";
import { useRouter } from "next/router";

import { Container } from "@/components/sharedstyles";
import { GetStaticPaths, GetStaticProps } from "next";
import { GetAllPosts, GetAllPostsSlug } from "@/lib/data";

export default function Post({ post }) {
  return (
    <>
      <Container>
        <Head>
          <title>CatPalace</title>
          <meta name="description" content="Aqui, seu pet é realeza!" />
          <link rel="icon" href="/assets/static/favicon.ico" />
        </Head>

        <div>{post[0].title}</div>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await GetAllPostsSlug();

  const paths = res.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await GetAllPosts(params.slug);

  return {
    props: { post },
    revalidate: 10,
  };
};
