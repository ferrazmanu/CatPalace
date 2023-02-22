import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import * as S from "./styles";

interface Props {
  banners: Banner[];
}

interface Images {
  url: string;
}

interface Banner {
  id: string;
  url: string;
  link: string;
  bannerImage: Images[];
  alt?: string;
}

export function Banner({ banners }: Props) {
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
              <Link href={banner.link}>
                <Image src={banner.bannerImage[0].url} alt={banner.alt} fill />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Banner>
  );
}
