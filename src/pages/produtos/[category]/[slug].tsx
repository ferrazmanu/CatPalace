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
import { handleCartShow } from "@/redux/cart.slice";
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

  const [state, setState] = useState({
    thumbsSwiper: null,
    colorVariant: "",
    sizeVariant: "",
    activeVariant: 0,
    variantWarningModal: false,
    quantity: null,
    disableButton: false,
  });

  const {
    colorVariant,
    sizeVariant,
    activeVariant,
    quantity,
    thumbsSwiper,
    variantWarningModal,
  } = state;

  const { id, slug, images, name, price, variants, category } = product;

  const variant = product.variants;

  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/produtos", text: "Produtos" },
    { url: `${product.slug}`, text: `${product.name}` },
  ];

  const cartProduct = {
    id,
    slug,
    image: images[0].url,
    name,
    price,
    colorVariant,
    sizeVariant,
    qty: 1,
    availableQty: quantity,
    category: { slug: category.slug },
  };

  const variantMessage = () => {
    if (sizeVariant) {
      return `Tamanho: ${sizeVariant} - `;
    }
    if (colorVariant) {
      return `Cor: ${colorVariant} - `;
    }
    return "";
  };

  const sendOrder = () => {
    const number = "+5543991940137";

    if (!variantMessage() && variants.length > 0) {
      setState((prevState) => ({ ...prevState, variantWarningModal: true }));
    } else {
      const formattedMessage = `
        Olá, *CatPalace*! Gostaria de realizar o pedido do seguinte item da loja:
  
        ${`${cartProduct.qty}x ${
          cartProduct.name
        } - ${variantMessage()}R$${formatCurrency(cartProduct.price)}`}
          
        *Valor total do pedido*: R$${formatCurrency(product.price)}
      `
        .replace(/^\s+/gm, "")
        .replace(/\n/g, "\n \n");

      const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURI(
        formattedMessage
      )}`;
      window.open(url);
    }
  };

  const addProduct = () => {
    if (!variantMessage() && variants.length > 0) {
      setState((prevState) => ({ ...prevState, variantWarningModal: true }));
    } else {
      dispatch(addToCart(cartProduct));
      dispatch(handleCartShow());
    }
  };

  const selectVariant = (variantData, index, variantType, qty) => {
    if (qty === 0) {
      setState((prevState) => ({ ...prevState, disableButton: true }));
    } else {
      setState((prevState) => ({ ...prevState, disableButton: false }));
    }
    if (variantType === "color") {
      setState((prevState) => ({ ...prevState, colorVariant: variantData }));
    }
    if (variantType === "size") {
      setState((prevState) => ({ ...prevState, sizeVariant: variantData }));
    }
    setState((prevState) => ({
      ...prevState,
      quantity: qty,
      activeVariant: index,
    }));
  };

  useEffect(() => {
    setState((prevState) => ({ ...prevState, activeVariant: null }));
  }, []);

  useEffect(() => {
    const totalVariants = variants.reduce(
      (total, { variantQuantity }) => total + variantQuantity,
      0
    );
    const totalQuantity =
      variants && variants.length > 0 ? totalVariants : product.productQuantity;

    setState((prevState) => ({ ...prevState, quantity: totalQuantity }));
  }, []);

  return (
    <>
      <Head>
        <title>
          {product.seo ? product.seo.title : ` ${product.name} | CatPalace`}
        </title>
        <meta
          name="description"
          content={product.description && product.description}
        />
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
                    {product.oldPrice && (
                      <div className="previous-price">
                        R$ {formatCurrency(product.oldPrice)}
                      </div>
                    )}
                    <div className="current-price">
                      R$ {formatCurrency(product.price)}
                    </div>
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
                        onSwiper={(swiper) =>
                          setState((prevState) => ({
                            ...prevState,
                            thumbsSwiper: swiper,
                          }))
                        }
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
                    {product.oldPrice && (
                      <div className="previous-price">
                        R$ {formatCurrency(product.oldPrice)}
                      </div>
                    )}
                    <div className="current-price">
                      R$ {formatCurrency(product.price)}
                    </div>
                  </div>

                  {variant && variant.length > 0 && (
                    <div className="variants">
                      {variant.map((variant, index) => (
                        <div
                          className={
                            variant.hasOwnProperty("color") ? "color" : "size"
                          }
                          key={variant.id}
                        >
                          <S.Variant
                            className={
                              variant.hasOwnProperty("color")
                                ? "color-variant"
                                : "size-variant"
                            }
                            active={index === activeVariant}
                            color={variant.colorHex}
                            onClick={() =>
                              selectVariant(
                                variant[
                                  variant.hasOwnProperty("color")
                                    ? "color"
                                    : "size"
                                ],
                                index,
                                variant.hasOwnProperty("color")
                                  ? "color"
                                  : "size",
                                variant.variantQuantity
                              )
                            }
                          >
                            {variant.hasOwnProperty("size") && variant.size}
                          </S.Variant>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="quantity">
                    Quantidade disponível: {quantity}
                  </div>

                  <Link href="#detalhes" className="to-details">
                    Ir para detalhes do produto
                  </Link>

                  <div className="buy-buttons">
                    {!state.disableButton ? (
                      <>
                        <Button
                          text={"comprar"}
                          type="button"
                          onClick={() => sendOrder()}
                          disabled={state.disableButton}
                        />
                        <Button
                          text={"adicionar ao carrinho"}
                          onClick={() => addProduct()}
                          disabled={state.disableButton}
                          type="button"
                        />
                      </>
                    ) : (
                      <Button
                        text="variação indisponível"
                        type="button"
                        disabled={state.disableButton}
                      />
                    )}
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

            {otherProducts && otherProducts.length > 0 && (
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
                              category={cartProduct.category}
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
                                category={cartProduct.category}
                              />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </ResponsiveSwiperContainer>
                  </>
                }
              />
            )}
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
          close={() =>
            setState((prevState) => ({
              ...prevState,
              variantWarningModal: false,
            }))
          }
        />
      )}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await GetProductsBySlug();

  const paths = res.map((product) => {
    const category = product.category.slug.toString();

    return {
      params: {
        slug: product.slug,
        category: category,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug, category } = params;

  const product = await (GetProduct(slug) || []);
  const otherProducts = await (GetOtherProducts(slug, category) || []);

  return {
    props: { product, otherProducts },
    revalidate: 10,
  };
};
