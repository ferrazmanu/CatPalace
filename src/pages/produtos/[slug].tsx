import { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { Container } from "@/components/sharedstyles";
import { Breadcrumb } from "@/components/Elements/Breadcrumb";
import { Button } from "@/components/Elements/Button";

import { GetProducts, GetProductsBySlug } from "@/lib/data";

import * as S from "@/styles/productStyles";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Product({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/produtos", text: "Produtos" },
    { url: `${product[0].slug}`, text: `${product[0].name}` },
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
          <Breadcrumb breadcrumb={breadcrumb} />

          <S.Product>
            <S.ProductSummary>
              <S.Mobile>
                <div className="product-name">
                  <h2>{product[0].name}</h2>
                </div>

                <div className="price">
                  <div className="previous-price">R$ {product[0].oldPrice}</div>
                  <div className="current-price">R$ {product[0].price}</div>
                </div>

                <Link href={""} className="to-details">
                  Ir para detalhes do produto
                </Link>
              </S.Mobile>

              <S.SwiperContainer>
                {product && (
                  <>
                    <Swiper
                      loop={true}
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{
                        swiper:
                          thumbsSwiper && !thumbsSwiper.destroyed
                            ? thumbsSwiper
                            : null,
                      }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      {product[0].images.map((image) => {
                        return (
                          <SwiperSlide key={image.url}>
                            <Image src={image.url} alt={product[0].name} fill />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      loop={true}
                      spaceBetween={10}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"
                    >
                      {product[0].images.map((image) => {
                        return (
                          <SwiperSlide key={image.url}>
                            <Image src={image.url} alt={product[0].name} fill />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </>
                )}
              </S.SwiperContainer>

              <S.ProductDescription>
                <div className="product-name">
                  <h2>{product[0].name}</h2>
                </div>

                <div className="price">
                  <div className="previous-price">R$ {product[0].oldPrice}</div>
                  <div className="current-price">R$ {product[0].price}</div>
                </div>

                <Link href={""} className="to-details">
                  Ir para detalhes do produto
                </Link>

                <div className="quantity">
                  <span className="minus">-</span>
                  <span className="qty">1</span>
                  <span className="plus">+</span>
                </div>

                <div className="buy-buttons">
                  <Button href={""} text={"comprar"} />
                  <Button href={""} text={"adicionar ao carrinho"} />
                </div>
              </S.ProductDescription>
            </S.ProductSummary>

            <S.ProductDetails></S.ProductDetails>
          </S.Product>
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
