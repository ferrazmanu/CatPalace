import Head from "next/head";

import { Container } from "@/components/sharedstyles";
import { GetStaticPaths, GetStaticProps } from "next";
import { GetAllPosts, GetAllPostsSlug } from "@/lib/data";
import { Breadcrumb } from "@/components/Elements/Breadcrumb";

export default function Post({ post }) {
  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/blog", text: "Blog" },
    { url: `${post[0].slug}`, text: `${post[0].title}` },
  ];

  return (
    <>
      <Container>
        <Head>
          <title>CatPalace</title>
          <meta name="description" content="Aqui, seu pet é realeza!" />
          <link rel="icon" href="/assets/static/favicon.ico" />
        </Head>

        <Breadcrumb breadcrumb={breadcrumb} />

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
