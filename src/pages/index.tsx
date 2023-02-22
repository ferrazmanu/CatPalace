import Head from "next/head";
import { Container } from "@/components/sharedstyles";

import {
  GetHomeBanners,
  GetHomePosts,
  GetHomeProducts,
  GetHomePromotions,
} from "lib/data";
import { ProductsSection } from "@/components/Sections/ProductsSection";
import { BlogPostsSection } from "@/components/Sections/BlogSection";
import { GetStaticProps } from "next";
import { Banner } from "@/components/Sections/BannerSection";
import { Promotions } from "@/components/Sections/PromotionsSection";

export default function Home({ posts, products, banners, promotions }) {
  return (
    <>
      <Head>
        <title>CatPalace</title>
        <meta name="description" content="Aqui, seu pet é realeza!" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>
      <Banner banners={banners} />

      <main>
        <Container>
          <Promotions promotions={promotions} />
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
  const promotions = (await GetHomePromotions()) || [];

  return {
    props: { posts, products, banners, promotions },
    revalidate: 10,
  };
};
