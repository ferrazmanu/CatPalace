import Head from "next/head";
import { Container } from "@/components/sharedstyles";

import { GetHomeBanners, GetHomePosts, GetHomeProducts } from "lib/data";
import { ProductsSection } from "@/components/Sections/ProductsSection";
import { BlogPostsSection } from "@/components/Sections/BlogSection";
import { GetStaticProps } from "next";
import { Banner } from "@/components/Sections/Banner";

export default function Home({ posts, products, banners }) {
  return (
    <>
      <Head>
        <title>CatPalace</title>
        <meta name="description" content="Aqui, seu pet é realeza!" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>
      <main>
        <Banner banners={banners} />
        <Container>
          <ProductsSection products={products} />
          <BlogPostsSection posts={posts} />
        </Container>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await GetHomePosts()) || [];
  const products = (await GetHomeProducts()) || [];
  const banners = (await GetHomeBanners()) || [];

  return {
    props: { posts, products, banners },
    revalidate: 10,
  };
};
