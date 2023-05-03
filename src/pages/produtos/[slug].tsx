import { MouseEvent, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";

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
import { Loading } from "@/components/Elements/Loading";
import { Quantity } from "@/components/Elements/Quantity";
import {
  decrementQuantity,
  handleCartShow,
  incrementQuantity,
  removeFromCart,
} from "@/redux/cart.slice";
import { GetOtherProducts, GetProduct, GetProductsBySlug } from "@/lib/data";

import * as S from "@/styles/productStyles";
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice";
import { formatCurrency } from "utils/format";
import { Modal } from "@/components/Elements/Modal";

export default function Product({ product, otherProducts }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [colorVariant, setColorVariant] = useState("");
  const [sizeVariant, setSizeVariant] = useState("");
  const [activeVariant, setActiveVariant] = useState(0);
  const [variantWarningModal, setVariantWarningModal] = useState(false);

  const variant = product.variants;

  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/produtos", text: "Produtos" },
    { url: `${product.slug}`, text: `${product.name}` },
  ];

  const cartProduct = {
    id: product.id,
    slug: product.slug,
    image: product.images[0].url,
    name: product.name,
    price: product.price,
    colorVariant,
    sizeVariant,
    qty: 1,
  };

  const variantMessage = () => {
    if (cartProduct.sizeVariant) {
      return `Tamanho: ${sizeVariant} - `;
    }
    if (cartProduct.colorVariant) {
      return `Cor: ${colorVariant} - `;
    }
    return "";
  };

  const addProduct = () => {
    if (!variantMessage() && variant.length > 0) {
      setVariantWarningModal(true);
    } else {
      dispatch(addToCart(cartProduct));
      dispatch(handleCartShow());
    }
  };

  const sendOrder = () => {
    const number = "+5543991940137";

    if (!variantMessage() && variant.length > 0) {
      setVariantWarningModal(true);
    } else {
      let formattedMessage = `
      Olá, *CatPalace*! Gostaria de realizar o pedido do seguinte item da loja:

      ${`${cartProduct.qty}x ${
        cartProduct.name
      } - ${variantMessage()}R$${formatCurrency(cartProduct.price)}`}
        
      *Valor total do pedido*: R$${formatCurrency(product.price)}
    `
        .replace(/^\s+/gm, "")
        .replace(/\n/g, "\n \n");

      let url = `https://api.whatsapp.com/send?phone=${number}`;
      url += `&text=${encodeURI(formattedMessage)}`;

      window.open(url);
      formattedMessage = "";
    }
  };

  const selectVariant = (variantData, index, variantType) => {
    if (variantType === "color") {
      setColorVariant(variantData);
    }
    if (variantType === "size") {
      setSizeVariant(variantData);
    }
    setActiveVariant(index);
  };

  useEffect(() => {
    setActiveVariant(null);
  }, []);

  return (
    <>
      <Head>
        <title>{product.seo.title}</title>
        <meta name="description" content={product.seo.decription} />
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
        {router.isFallback ? (
          <Container>
            <Loading />
          </Container>
        ) : (
          <Container>
            <Breadcrumb breadcrumb={breadcrumb} />

            <S.Product>
              <S.ProductSummary>
                <S.Mobile>
                  <div className="product-name">
                    <h2>{product.name}</h2>
                  </div>

                  <div className="price">
                    <div className="previous-price">R$ {product.oldPrice}</div>
                    <div className="current-price">R$ {product.price}</div>
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
                        {product.images.map((image) => {
                          return (
                            <SwiperSlide key={image.url}>
                              <Image
                                src={image.url}
                                alt={product.name}
                                fill
                                sizes="100vw"
                              />
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
                        {product.images.map((image) => {
                          return (
                            <SwiperSlide key={image.url}>
                              <Image
                                src={image.url}
                                alt={product.name}
                                fill
                                sizes="100vw"
                              />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </>
                  )}
                </S.SwiperContainer>

                <S.ProductDescription>
                  <div className="product-name">
                    <h2>{product.name}</h2>
                  </div>

                  <div className="price">
                    <div className="previous-price">R$ {product.oldPrice}</div>
                    <div className="current-price">R$ {product.price}</div>
                  </div>

                  <div className="variants">
                    {variant.some((x) => x.hasOwnProperty("color")) && (
                      <div className="color">
                        {variant.map((variant, index) => {
                          return (
                            <S.Variant
                              className="color-variant"
                              active={index === activeVariant ? true : false}
                              key={variant.id}
                              color={variant.colorHex}
                              onClick={() =>
                                selectVariant(variant.color, index, "color")
                              }
                            />
                          );
                        })}
                      </div>
                    )}
                    {variant.some((x) => x.hasOwnProperty("size")) && (
                      <div className="size">
                        {variant.map((variant, index) => {
                          return (
                            <S.Variant
                              className="size-variant"
                              active={index === activeVariant ? true : false}
                              key={variant.id}
                              onClick={() =>
                                selectVariant(variant.size, index, "size")
                              }
                            >
                              {variant.size}
                            </S.Variant>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <Link href="#detalhes" className="to-details">
                    Ir para detalhes do produto
                  </Link>

                  <div className="buy-buttons">
                    <Button
                      text={"comprar"}
                      type="button"
                      onClick={() => sendOrder()}
                    />
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
                  children={<p>{product.description}</p>}
                  open
                />
                {product.specifications && (
                  <Details
                    summary={"Especificações"}
                    children={
                      <div
                        dangerouslySetInnerHTML={{
                          __html: product.specifications.html,
                        }}
                      />
                    }
                    open
                  />
                )}
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
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        576: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                      }}
                      pagination={{ clickable: true }}
                      modules={[Pagination]}
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
        )}
      </main>
      {variantWarningModal && (
        <Modal
          modalBody={
            <p>
              Por favor, selecione uma variação de cor ou tamanho para que o
              pedido possa ser enviado!
            </p>
          }
          close={() => setVariantWarningModal(false)}
        />
      )}
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
  const product = await (GetProduct(params.slug) || []);
  const otherProducts = await (GetOtherProducts(params.slug) || []);

  return {
    props: { product, otherProducts },
    revalidate: 10,
  };
};
