import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import { Breadcrumb } from "@/components/Elements/Breadcrumb";
import { Container, Overlay, TopContainer } from "@/components/sharedstyles";
import { GridContainer } from "@/components/Containers/GridContainer";
import { ProductCard } from "@/components/Elements/ProductCard";
import { Details } from "@/components/Elements/Details";
import { CloseIcon, FilterIcon } from "@/components/Icons";

import { GetAllProducts, GetCategories } from "@/lib/data";

import * as S from "@/styles/productsStyles";

export default function Products({ products, categories }) {
  const [productsArray, setProductsArray] = useState(products);
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/produtos", text: "Produtos" },
  ];

  // const orderOptions = [
  //   {
  //     id: 1,
  //     value: "maiorPreco",
  //     title: "Maior Preço",
  //   },
  //   {
  //     id: 2,
  //     value: "menorPreco",
  //     title: "Menor Preço",
  //   },
  // ];

  const handleCategoryChange = (category, subcategoryName, e) => {
    e.preventDefault();
    setOpenFilter(false);

    if (category) {
      setSelectedCategory(`${category.name} > ${subcategoryName}`);
    } else {
      setSelectedCategory(`${subcategoryName}`);
    }

    if (subcategoryName === "Todos") {
      setProductsArray(products);
    } else {
      setProductsArray(
        products.filter(
          (produto) =>
            produto.subcategory && produto.subcategory.name === subcategoryName
        )
      );
    }
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
                    onClick={(e) => handleCategoryChange("", "Todos", e)}
                  >
                    Todos
                  </Link>
                </div>
                {categories.map((category) => {
                  return (
                    category.products && (
                      <Details
                        key={category.name}
                        summary={category.name}
                        children={
                          <ul>
                            {category.subcategories.map((subcategory) => {
                              return (
                                subcategory.products &&
                                subcategory.products.length > 0 && (
                                  <li
                                    key={subcategory.name}
                                    className="product-category"
                                  >
                                    <Link
                                      href="#"
                                      onClick={(e) =>
                                        handleCategoryChange(
                                          category,
                                          subcategory.name,
                                          e
                                        )
                                      }
                                    >
                                      {subcategory.name}
                                    </Link>
                                  </li>
                                )
                              );
                            })}
                          </ul>
                        }
                      />
                    )
                  );
                })}
              </S.Categories>
            </S.CategoriesContainer>

            <div className="grid">
              <div className="top-grid">
                <div className="selected-category">
                  Resultados para: <strong>{selectedCategory}</strong>
                </div>

                {/* <div className="order-per">
                  <Form.Label htmlFor="order">Ordenar por:</Form.Label>
                  <Form.Select name="order" options={orderOptions} onChange={() => onChange()}/>
                </div> */}
              </div>
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
                        category={{ slug: product.category.slug }}
                      />
                    );
                  })
                ) : (
                  <S.MessageContainer>
                    Por enquanto, não há produtos nesta categoria :(
                  </S.MessageContainer>
                )}
              </GridContainer>
            </div>
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
