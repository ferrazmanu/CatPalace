import { GridContainer } from "@/components/Containers/GridContainer";
import { SectionContainer } from "@/components/Containers/SectionContainer";
import { BlogPostCard } from "@/components/Elements/BlogCard";
import { Button } from "@/components/Elements/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import * as S from "../styles";
import { Navigation } from "swiper";

interface Props {
  posts: BlogPosts[];
}

interface CoverImage {
  url: string;
}

interface BlogPosts {
  id: string;
  slug: string;
  coverImage: CoverImage;
  title: string;
  exerpt: string;
}

export function BlogPostsSection({ posts }: Props) {
  return (
    <SectionContainer
      sectionTitle={"Blog"}
      children={
        <S.ResponsiveSwiperContainer>
          <GridContainer>
            {posts.map((post) => {
              return (
                <BlogPostCard
                  key={post.id}
                  slug={post.slug}
                  coverImage={post.coverImage.url}
                  title={post.title}
                  exerpt={post.exerpt}
                />
              );
            })}
          </GridContainer>
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
          >
            {posts.map((post) => {
              return (
                <SwiperSlide>
                  <BlogPostCard
                    key={post.id}
                    slug={post.slug}
                    coverImage={post.coverImage.url}
                    title={post.title}
                    exerpt={post.exerpt}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Button href="/blog" text="ver todos" />
        </S.ResponsiveSwiperContainer>
      }
    />
  );
}
