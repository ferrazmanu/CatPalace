import { GridContainer } from "@/components/Containers/GridContainer";
import { SectionContainer } from "@/components/Containers/SectionContainer";
import { Button } from "@/components/Elements/Button";
import { ProductCard } from "@/components/Elements/ProductCard";
import { ResponsiveSwiperContainer } from "@/components/sharedstyles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  products: Product[];
}
interface Images {
  url: string;
}

interface Product {
  id: string;
  slug: string;
  images: Images[];
  name: string;
  price: string;
}

export function ProductsSection({ products }: Props) {
  return (
    <SectionContainer
      sectionTitle={"Produtos"}
      children={
        <ResponsiveSwiperContainer>
          <GridContainer>
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
                    slug={product.slug}
                    imageUrl={product.images[0].url}
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
