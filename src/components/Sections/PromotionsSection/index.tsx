import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import * as S from "./styles";
import { SectionContainer } from "@/components/Containers/SectionContainer";
import { PromotionsProps } from "@/common/types";

export function Promotions({ promotions }: PromotionsProps) {
  return (
    <SectionContainer
      sectionTitle={""}
      children={
        <S.Promotion>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay]}
            loop={true}
          >
            {promotions.map((promotion) => {
              return (
                <SwiperSlide key={promotion.id}>
                  <Link href={promotion.link}>
                    <Image
                      src={promotion.image.url}
                      alt={promotion.title}
                      fill
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </S.Promotion>
      }
    />
  );
}
