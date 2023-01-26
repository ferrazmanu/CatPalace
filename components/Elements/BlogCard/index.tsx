import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import { Button } from "../Button";

interface Props {
  slug: string;
  coverImage: string;
  title: string;
  exerpt: string;
}

export function BlogPostCard({ slug, title, exerpt, coverImage }: Props) {
  return (
    <>
      <S.Card>
        <S.ImagePost href={`/blog/post/${slug}`}>
          <Image src={coverImage} width={380} height={230} alt={title} />
        </S.ImagePost>
        <S.Content>
          <Link className="post-name" href={`/blog/post/${slug}`}>
            {title}
          </Link>
          <S.Exerpt>{exerpt}</S.Exerpt>
        </S.Content>

        <Button text="ler mais" href={`/blog/post/${slug}`} />
      </S.Card>
    </>
  );
}
