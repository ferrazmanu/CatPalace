import Head from "next/head";

import { Container } from "@/components/sharedstyles";
import { GetStaticPaths, GetStaticProps } from "next";
import { GetAllPosts, GetAllPostsSlug } from "@/lib/data";
import { Breadcrumb } from "@/components/Elements/Breadcrumb";
import * as S from "styles/postStyles";
import Image from "next/image";
import { formatToPTBR } from "utils/format";

export default function Post({ post }) {
  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/blog", text: "Blog" },
    { url: `${post[0].slug}`, text: `${post[0].title}` },
  ];

  return (
    <>
      <Container>
        <Head>
          <title>CatPalace</title>
          <meta name="description" content="Aqui, seu pet é realeza!" />
          <link rel="icon" href="/assets/static/favicon.ico" />
        </Head>

        <Breadcrumb breadcrumb={breadcrumb} />

        {post && (
          <S.PostContainer>
            <S.Post>
              <S.ImageContainer>
                <Image src={post[0].coverImage.url} fill alt={post[0].title} />
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

        {/* não esquecer te fazer div de outros posts */}
      </Container>
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

  return {
    props: { post },
    revalidate: 10,
  };
};
