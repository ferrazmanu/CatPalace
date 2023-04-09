import { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import {
  Container,
  ResponsiveSwiperContainer,
} from "@/components/sharedstyles";
import { Breadcrumb } from "@/components/Elements/Breadcrumb";
import { Button } from "@/components/Elements/Button";
import { Details } from "@/components/Elements/Details";
import { SectionContainer } from "@/components/Containers/SectionContainer";
import { GridContainer } from "@/components/Containers/GridContainer";
import { ProductCard } from "@/components/Elements/ProductCard";
import { Quantity } from "@/components/Elements/Quantity";
import {
  decrementQuantity,
  handleCartShow,
  incrementQuantity,
  removeFromCart,
} from "@/redux/cart.slice";
import { GetOtherProducts, GetProducts, GetProductsBySlug } from "@/lib/data";

import * as S from "@/styles/productStyles";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice";

export default function Product({ product, otherProducts }) {
  const dispatch = useDispatch();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/produtos", text: "Produtos" },
    { url: `${product[0].slug}`, text: `${product[0].name}` },
  ];

  const cartProduct = {
    id: product[0].id,
    slug: product[0].slug,
    image: product[0].images[0].url,
    name: product[0].name,
    price: product[0].price,
  };

  const addProduct = () => {
    dispatch(addToCart(cartProduct));
    dispatch(handleCartShow());
  };

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

                <Link href="#detalhes" className="to-details">
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

                <Link href="#detalhes" className="to-details">
                  Ir para detalhes do produto
                </Link>

                {/* aqui lembrar que precisa ter variação de cor e quantidade, ai sim pega os dados e 
                manda pro carrinho */}

                {/* <Quantity
                  incrementQuantity={() =>
                    dispatch(incrementQuantity(cartProduct))
                  }
                  decrementQuantity={() =>
                    dispatch(decrementQuantity(cartProduct))
                  }
                  qty={qty}
                /> */}

                <div className="buy-buttons">
                  <Button text={"comprar"} type="button" />
                  <Button
                    text={"adicionar ao carrinho"}
                    onClick={() => addProduct()}
                    type="button"
                  />
                </div>
              </S.ProductDescription>
            </S.ProductSummary>

            <S.ProductDetails id="detalhes">
              <Details
                summary={"Detalhes"}
                children={<p>{product[0].description}</p>}
              />
              <Details
                summary={"Especificações"}
                children={
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product[0].specifications.html,
                    }}
                  />
                }
              />
            </S.ProductDetails>
          </S.Product>

          <SectionContainer
            sectionTitle={"Outros Produtos"}
            className="outros"
            children={
              <>
                <ResponsiveSwiperContainer>
                  <GridContainer responsive={false}>
                    {otherProducts.map((product) => {
                      return (
                        <ProductCard
                          key={product.id}
                          slug={product.slug}
                          image={product.images[0].url}
                          name={product.name}
                          price={product.price}
                          id={product.id}
                          qty={product.qty}
                        />
                      );
                    })}
                  </GridContainer>
                  <Swiper
                    spaceBetween={15}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Navigation]}
                    loop={true}
                  >
                    {otherProducts.map((product) => {
                      return (
                        <SwiperSlide key={product.id}>
                          <ProductCard
                            key={product.id}
                            slug={product.slug}
                            image={product.images[0].url}
                            name={product.name}
                            price={product.price}
                            id={product.id}
                            qty={product.qty}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </ResponsiveSwiperContainer>
              </>
            }
          />
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
  const otherProducts = await GetOtherProducts(params.slug);

  return {
    props: { product, otherProducts },
    revalidate: 10,
  };
};
