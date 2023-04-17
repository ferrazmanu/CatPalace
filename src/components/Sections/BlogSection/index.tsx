import { GridContainer } from "@/components/Containers/GridContainer";
import { SectionContainer } from "@/components/Containers/SectionContainer";
import { BlogPostCard } from "@/components/Elements/BlogCard";
import { Button } from "@/components/Elements/Button";
import { ResponsiveSwiperContainer } from "@/components/sharedstyles";
import { PostsProps } from "@/common/types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

export function BlogPostsSection({ posts }: PostsProps) {
  return (
    <SectionContainer
      sectionTitle={"Blog"}
      children={
        <ResponsiveSwiperContainer>
          <GridContainer responsive={false}>
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
            {posts.map((post) => {
              return (
                <SwiperSlide key={post.id}>
                  <BlogPostCard
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
        </ResponsiveSwiperContainer>
      }
    />
  );
}
