import Head from "next/head";

import { Container } from "@/components/sharedstyles";
import { GetStaticPaths, GetStaticProps } from "next";
import { GetProducts, GetProductsBySlug } from "@/lib/data";

export default function Product({ product }) {
  return (
    <>
      <Head>
        <title>CatPalace</title>
        <meta name="description" content="Aqui, seu pet é realeza!" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>
      <main>
        <Container>
          <div>{product[0].name}</div>
        </Container>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await GetProductsBySlug();

  const paths = res.map((product) => {
    return {
      params: { slug: product.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await GetProducts(params.slug);

  return {
    props: { product },
    revalidate: 10,
  };
};
