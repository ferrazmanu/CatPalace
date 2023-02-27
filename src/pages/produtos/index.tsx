import Head from "next/head";
import { GetStaticProps } from "next";

import { Breadcrumb } from "@/components/Elements/Breadcrumb";
import { Container, TopContainer } from "@/components/sharedstyles";
import { GridContainer } from "@/components/Containers/GridContainer";
import { ProductCard } from "@/components/Elements/ProductCard";

import { GetAllProducts } from "@/lib/data";

import * as S from "@/styles/productsStyles";
import { Details } from "@/components/Elements/CategoryDetails";

export default function Products({ products }) {
  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/produtos", text: "Produtos" },
  ];

  return (
    <>
      <Head>
        <title>CatPalace</title>
        <meta name="description" content="Aqui, seu pet é realeza!" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>
      <main>
        <Container>
          <TopContainer>
            <Breadcrumb breadcrumb={breadcrumb} />
          </TopContainer>

          <S.ContentHolder>
            <S.Categories>
              <h3>Categorias</h3>
              <Details />
            </S.Categories>

            <GridContainer responsive={true}>
              {products.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    slug={product.slug}
                    imageUrl={product.images[0].url}
                    name={product.name}
                    price={product.price}
                  />
                );
              })}
            </GridContainer>
          </S.ContentHolder>
        </Container>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = (await GetAllProducts()) || [];

  return {
    props: { products },
    revalidate: 10,
  };
};
