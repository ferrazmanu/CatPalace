import { useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { Breadcrumb } from "@/components/Elements/Breadcrumb";
import { SearchBar } from "@/components/Elements/SearchBar";
import { Container } from "@/components/sharedstyles";
import { GridContainer } from "@/components/Containers/GridContainer";
import { BlogPostCard } from "@/components/Elements/BlogCard";

import { GetAllPosts } from "@/lib/data";

import * as S from "@/styles/blogStyles";

export default function Blog({ posts }) {
  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/blog", text: "Blog" },
  ];

  const [query, setQuery] = useState("");

  return (
    <>
      <Head>
        <title>CatPalace</title>
        <meta name="description" content="Aqui, seu pet é realeza!" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>
      <main>
        <Container>
          <S.TopContainer>
            <Breadcrumb breadcrumb={breadcrumb} />
            <SearchBar onChange={(event) => setQuery(event.target.value)} />
          </S.TopContainer>

          <GridContainer responsive={true}>
            {posts
              .filter((post) => {
                if (query === "") {
                  return post;
                } else if (
                  post.title.toLowerCase().includes(query.toLocaleLowerCase())
                ) {
                  return post;
                }
              })
              .map((post) => {
                return (
                  <BlogPostCard
                    slug={post.slug}
                    coverImage={post.coverImage.url}
                    title={post.title}
                    exerpt={post.exerpt}
                  />
                );
              })}
          </GridContainer>
        </Container>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await GetAllPosts()) || [];

  return {
    props: { posts },
    revalidate: 10,
  };
};
