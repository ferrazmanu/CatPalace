import { GridContainer } from "@/components/Containers/GridContainer";
import { SectionContainer } from "@/components/Containers/SectionContainer";
import { BlogPostCard } from "@/components/Elements/BlogCard";
import { Button } from "@/components/Elements/Button";

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
    <SectionContainer id="teste">
      <h2>Blog</h2>

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

      <Button href="/produtos" text="ver todos" />
    </SectionContainer>
  );
}
