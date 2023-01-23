import { BlogPostCard } from "@/components/Elements/BlogCard";
import { Button } from "@/components/Elements/Button";
import * as S from "./styles";

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
    <S.SectionContainer>
      <h2>Blog</h2>

      <S.BlogPostsGrid>
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
      </S.BlogPostsGrid>

      <Button href="/produtos" text="ver todos" />
    </S.SectionContainer>
  );
}
