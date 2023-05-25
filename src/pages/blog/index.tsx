import { useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { Breadcrumb } from "@/components/Elements/Breadcrumb";
import { SearchBar } from "@/components/Elements/SearchBar";
import {
  Container,
  TopContainer,
  MessageContainer,
} from "@/components/sharedstyles";
import { GridContainer } from "@/components/Containers/GridContainer";
import { BlogPostCard } from "@/components/Elements/BlogCard";

import { GetAllPosts } from "@/lib/data";

export default function Blog({ posts }) {
  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/blog", text: "Blog" },
  ];

  const [query, setQuery] = useState("");

  const searchFilter = posts.filter((post) => {
    if (post.title.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }
  });

  return (
    <>
      <Head>
        <title>Blog | CatPalace</title>
        <meta name="description" content="Aqui, seu pet é realeza!" />
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
          <TopContainer>
            <Breadcrumb breadcrumb={breadcrumb} />
            <SearchBar onChange={(event) => setQuery(event.target.value)} />
          </TopContainer>

          <GridContainer responsive={true}>
            {searchFilter.map((post) => {
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
            {searchFilter && searchFilter.length === 0 && (
              <>
                <MessageContainer>
                  Nenhum post com esse nome :c
                </MessageContainer>
              </>
            )}
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
