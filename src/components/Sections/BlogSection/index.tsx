import { GridContainer } from "@/components/Containers/GridContainer";
import { SectionContainer } from "@/components/Containers/SectionContainer";
import { BlogPostCard } from "@/components/Elements/BlogCard";
import { Button } from "@/components/Elements/Button";
import { ResponsiveSwiperContainer } from "@/components/sharedstyles";
import { PostsProps } from "@/common/types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

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
            spaceBetween={15}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            loop={true}
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
