import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import { Button } from "../Button";

import { PostProps } from "@/common/types";

export function BlogPostCard({ slug, title, exerpt, coverImage }: PostProps) {
  return (
    <S.Card className="card">
      <S.ImagePost href={`/blog/post/${slug}`}>
        <Image src={coverImage} fill alt={title} />
      </S.ImagePost>
      <S.Content>
        <Link className="post-name" href={`/blog/post/${slug}`}>
          {title}
        </Link>
        <S.Exerpt>{exerpt}</S.Exerpt>
      </S.Content>

      <Button text="ler mais" href={`/blog/post/${slug}`} />
    </S.Card>
  );
}
