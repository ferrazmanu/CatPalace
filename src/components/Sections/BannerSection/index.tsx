import Image from "next/image";
import Link from "next/link";

import { BannersProps } from "@/common/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import * as S from "./styles";

export function Banner({ banners }: BannersProps) {
  console.log(banners);
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
            <SwiperSlide key={banner.id}>
              {banner.link && (
                <Link href={banner.link}>
                  <picture>
                    <source
                      media="(max-width: 992px)"
                      srcSet={banner.bannerMobile.url}
                    />
                    <Image
                      src={banner.bannerDesktop[0].url}
                      alt={banner.alt}
                      fill
                      priority
                    />
                  </picture>
                </Link>
              )}
              {!banner.link && (
                <picture>
                  <source
                    media="(max-width: 992px)"
                    srcSet={banner.bannerMobile.url}
                  />
                  <Image
                    src={banner.bannerDesktop[0].url}
                    alt={banner.alt}
                    fill
                    priority
                  />
                </picture>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Banner>
  );
}
