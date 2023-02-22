import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import * as S from "./styles";
import { SectionContainer } from "@/components/Containers/SectionContainer";

interface Props {
  promotions: Promotion[];
}

interface Promotion {
  id: string;
  link: string;
  image: { url: string };
  title: string;
}

export function Promotions({ promotions }: Props) {
  return (
    <SectionContainer
      sectionTitle={""}
      children={
        <S.Promotion>
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
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
