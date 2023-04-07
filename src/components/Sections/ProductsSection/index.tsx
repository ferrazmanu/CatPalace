import { GridContainer } from "@/components/Containers/GridContainer";
import { SectionContainer } from "@/components/Containers/SectionContainer";
import { Button } from "@/components/Elements/Button";
import { ProductCard } from "@/components/Elements/ProductCard";
import { ResponsiveSwiperContainer } from "@/components/sharedstyles";
import { ProductsProps } from "@/common/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

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
            spaceBetween={15}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            loop={true}
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
