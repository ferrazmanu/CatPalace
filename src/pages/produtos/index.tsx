import Head from "next/head";
import { GetStaticProps } from "next";

import { Breadcrumb } from "@/components/Elements/Breadcrumb";
import { Container, TopContainer } from "@/components/sharedstyles";
import { GridContainer } from "@/components/Containers/GridContainer";
import { ProductCard } from "@/components/Elements/ProductCard";

import { GetAllProducts, GetCategories } from "@/lib/data";

import * as S from "@/styles/productsStyles";
import { Details } from "@/components/Elements/Details";
import Link from "next/link";

export default function Products({ products, categories }) {
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
              {categories.map((category) => {
                return (
                  <Details
                    key={category.name}
                    summary={category.name}
                    children={
                      <ul>
                        {category.subcategories.map((subcategory) => {
                          return (
                            <li key={subcategory.name}>
                              <Link href={""}>{subcategory.name}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    }
                  />
                );
              })}
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
  const categories = (await GetCategories()) || [];

  return {
    props: { products, categories },
    revalidate: 10,
  };
};
