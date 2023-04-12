import Image from "next/image";
import Link from "next/link";

import { BannersProps } from "@/common/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import * as S from "./styles";

export function Banner({ banners }: BannersProps) {
  return (
    <S.Banner>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
      >
        {banners.map((banner) => {
          return (
            <>
              <SwiperSlide key={banner.id} className="desktop">
                <Link href={banner.link}>
                  <Image
                    src={banner.bannerDesktop[0].url}
                    alt={banner.alt}
                    fill
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide key={banner.id} className="mobile">
                <Link href={banner.link}>
                  <Image src={banner.bannerMobile.url} alt={banner.alt} fill />
                </Link>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </S.Banner>
  );
}
