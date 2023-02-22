import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";

import * as S from "styles/postStyles";
import { formatToPTBR } from "utils/format";
import { GetAllPosts, GetAllPostsSlug, GetOtherPosts } from "@/lib/data";

import { Breadcrumb } from "@/components/Elements/Breadcrumb";
import {
  Container,
  ResponsiveSwiperContainer,
} from "@/components/sharedstyles";
import { GridContainer } from "@/components/Containers/GridContainer";
import { BlogPostCard } from "@/components/Elements/BlogCard";
import { SectionContainer } from "@/components/Containers/SectionContainer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/Elements/Button";

export default function Post({ post, otherPosts }) {
  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/blog", text: "Blog" },
    { url: `${post[0].slug}`, text: `${post[0].title}` },
  ];

  return (
    <>
      <Head>
        <title>CatPalace</title>
        <meta name="description" content="Aqui, seu pet é realeza!" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Breadcrumb breadcrumb={breadcrumb} />

          {post && (
            <S.PostContainer>
              <S.Post>
                <S.ImageContainer>
                  <Image
                    src={post[0].coverImage.url}
                    fill
                    alt={post[0].title}
                  />
                </S.ImageContainer>
                <S.Title>
                  <div className="title">
                    <h2>{post[0].title}</h2>
                  </div>
                  <div className="author">Por: {post[0].author.name}</div>
                </S.Title>

                <S.Text>
                  <p>{post[0].content.text}</p>
                </S.Text>

                <S.Date>Publicado em: {formatToPTBR(post[0].date)}</S.Date>
              </S.Post>
            </S.PostContainer>
          )}

          <SectionContainer
            sectionTitle={"Outros Posts"}
            className="outros"
            children={
              <>
                <ResponsiveSwiperContainer>
                  <GridContainer>
                    {otherPosts.map((post) => {
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
                    {otherPosts.map((post) => {
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
              </>
            }
          />
        </Container>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await GetAllPostsSlug();

  const paths = res.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await GetAllPosts(params.slug);
  const otherPosts = await GetOtherPosts(params.slug);

  return {
    props: { post, otherPosts },
    revalidate: 10,
  };
};
