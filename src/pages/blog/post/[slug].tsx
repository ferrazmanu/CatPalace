import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";

import { formatToPTBR } from "utils/format";
import { GetPosts, GetPostsSlug, GetOtherPosts } from "@/lib/data";

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

import * as S from "styles/postStyles";
import "swiper/css";
import "swiper/css/navigation";

export default function Post({ post, otherPosts }) {
  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/blog", text: "Blog" },
    { url: `${post.slug}`, text: `${post.title}` },
  ];

  return (
    <>
      <Head>
        <title>{post.seo.title}</title>
        <meta name="description" content={post.seo.description} />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>
      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XYZ57V4X6P"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-XYZ57V4X6P');
              `,
        }}
      />
      <main>
        <Container>
          <Breadcrumb breadcrumb={breadcrumb} />

          {post && (
            <S.PostContainer>
              <S.Post>
                <S.ImageContainer>
                  <Image src={post.coverImage.url} fill alt={post.title} />
                </S.ImageContainer>
                <S.Title>
                  <div className="title">
                    <h2>{post.title}</h2>
                  </div>
                  <div className="author">Por: {post.author.name}</div>
                </S.Title>

                <S.Text
                  dangerouslySetInnerHTML={{
                    __html: post.content.html,
                  }}
                />

                <S.Date>Publicado em: {formatToPTBR(post.date)}</S.Date>
              </S.Post>
            </S.PostContainer>
          )}

          <SectionContainer
            sectionTitle={"Outros Posts"}
            className="outros"
            children={
              <>
                <ResponsiveSwiperContainer>
                  <GridContainer responsive={false}>
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
  const res = await GetPostsSlug();

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
  const post = await GetPosts(params.slug);
  const otherPosts = await GetOtherPosts(params.slug);

  return {
    props: { post, otherPosts },
    revalidate: 10,
  };
};
