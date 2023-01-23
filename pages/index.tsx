import Head from "next/head";
import { Container } from "../components/sharedstyles";

import { GetHomePosts, GetHomeProducts } from "lib/data";
import { ProductsSection } from "@/components/Sections/Home/ProductsSection";
import { BlogPostsSection } from "@/components/Sections/Home/BlogSection";

export default function Home({ posts, products }) {
  return (
    <Container>
      <Head>
        <title>CatPalace</title>
        <meta name="description" content="Aqui, seu pet é realeza!" />
        <link rel="icon" href="/assets/images/favicon.ico" />
      </Head>
      <main>
        <ProductsSection products={products} />
        <BlogPostsSection posts={posts} />
      </main>
    </Container>
  );
}

export async function getServerSideProps() {
  const posts = (await GetHomePosts()) || [];
  const products = (await GetHomeProducts()) || [];

  return {
    props: { posts, products },
  };
}
