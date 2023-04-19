import { useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

import { Breadcrumb } from "@/components/Elements/Breadcrumb";
import { Container, Overlay, TopContainer } from "@/components/sharedstyles";
import { GridContainer } from "@/components/Containers/GridContainer";
import { ProductCard } from "@/components/Elements/ProductCard";

import { GetAllProducts, GetCategories } from "@/lib/data";

import * as S from "@/styles/productsStyles";
import { Details } from "@/components/Elements/Details";
import Link from "next/link";
import { CloseIcon, FilterIcon } from "@/components/Icons";
import { Loading } from "@/components/Elements/Loading";

export default function Products({ products, categories }) {
  const [productsArray, setProductsArray] = useState(products);
  const [openFilter, setOpenFilter] = useState(false);
  const [loading, setLoading] = useState(false);

  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/produtos", text: "Produtos" },
  ];

  const handleCategoryChange = (subcategoryName, e) => {
    e.preventDefault();
    setLoading(true);
    handleOpenFilter();

    if (subcategoryName === "todos") {
      setProductsArray(products);
    } else {
      setProductsArray(
        products.filter(
          (produto) => produto.subcategory.name === subcategoryName
        )
      );
    }

    setLoading(false);
  };

  const handleOpenFilter = () => {
    if (openFilter === false) {
      setOpenFilter(true);
    } else {
      setOpenFilter(false);
    }
  };

  return (
    <>
      <Head>
        <title>Produtos | CatPalace</title>
        <meta name="description" content="Aqui, seu pet é realeza!" />
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
      <main>
        <Container>
          <TopContainer>
            <Breadcrumb breadcrumb={breadcrumb} />
          </TopContainer>

          <S.ContentHolder>
            <S.CategoriesContainer>
              <h3>Categorias</h3>

              <Overlay open={openFilter} onClick={handleOpenFilter}></Overlay>
              <S.FilterMobile onClick={handleOpenFilter}>
                Filter <FilterIcon />
              </S.FilterMobile>

              <S.Categories open={openFilter}>
                <button
                  type="button"
                  className="close"
                  onClick={handleOpenFilter}
                >
                  <CloseIcon color="#000" />
                </button>

                <div className="todos">
                  <Link
                    href="#"
                    onClick={(e) => handleCategoryChange("todos", e)}
                  >
                    Todos
                  </Link>
                </div>
                {categories.map((category) => {
                  return (
                    <Details
                      key={category.name}
                      summary={category.name}
                      children={
                        <ul>
                          {category.subcategories.map((subcategory) => {
                            return (
                              <li
                                key={subcategory.name}
                                className="product-category"
                              >
                                <Link
                                  href="#"
                                  onClick={(e) =>
                                    handleCategoryChange(subcategory.name, e)
                                  }
                                >
                                  {subcategory.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      }
                    />
                  );
                })}
              </S.Categories>
            </S.CategoriesContainer>

            {loading ? (
              <Loading />
            ) : (
              <GridContainer responsive={true}>
                {productsArray && productsArray.length > 0 ? (
                  productsArray.map((product) => {
                    return (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        slug={product.slug}
                        image={product.images[0].url}
                        name={product.name}
                        price={product.price}
                        qty={product.qty}
                      />
                    );
                  })
                ) : (
                  <S.MessageContainer>
                    Por enquanto, não há produtos nesta categoria :(
                  </S.MessageContainer>
                )}
              </GridContainer>
            )}
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
