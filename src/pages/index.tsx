import Head from "next/head";
import { Container } from "@/components/sharedstyles";

import { GetHomePosts, GetHomeProducts } from "lib/data";
import { ProductsSection } from "@/components/Sections/Home/ProductsSection";
import { BlogPostsSection } from "@/components/Sections/Home/BlogSection";
import { GetServerSideProps, GetStaticProps } from "next";

export default function Home({ posts, products }) {
  return (
    <Container>
      <Head>
        <title>CatPalace</title>
        <meta name="description" content="Aqui, seu pet é realeza!" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>
      <ProductsSection products={products} />
      <BlogPostsSection posts={posts} />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await GetHomePosts()) || [];
  const products = (await GetHomeProducts()) || [];

  return {
    props: { posts, products },
    revalidate: 10,
  };
};
