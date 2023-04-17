import { GridContainer } from "@/components/Containers/GridContainer";
import { SectionContainer } from "@/components/Containers/SectionContainer";
import { Button } from "@/components/Elements/Button";
import { ProductCard } from "@/components/Elements/ProductCard";
import { ResponsiveSwiperContainer } from "@/components/sharedstyles";
import { ProductsProps } from "@/common/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export function ProductsSection({ products }: ProductsProps) {
  return (
    <SectionContainer
      sectionTitle={"Produtos"}
      children={
        <ResponsiveSwiperContainer>
          <GridContainer responsive={false}>
            {products.map((product) => {
              return (
                <ProductCard
                  id={product.id}
                  image={product.images[0].url}
                  key={product.id}
                  slug={product.slug}
                  name={product.name}
                  price={product.price}
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
            {products.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard
                    id={product.id}
                    image={product.images[0].url}
                    key={product.id}
                    slug={product.slug}
                    name={product.name}
                    price={product.price}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Button href="/produtos" text="ver todos" />
        </ResponsiveSwiperContainer>
      }
    />
  );
}
