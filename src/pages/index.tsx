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
        <title>CatPalace | Aqui, seu gato é realeza</title>
        <meta name="description" content="Aqui, seu gato é realeza!" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>
      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XYZ57V4X6P"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-XYZ57V4X6P');
              `,
        }}
      />
      <Banner banners={banners} />

      <main>
        <Container>
          {promotions.length !== 0 && <Promotions promotions={promotions} />}
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
