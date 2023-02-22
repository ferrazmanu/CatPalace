import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import { Button } from "../Button";
import { PriceTagIcon } from "@/components/Icons";

interface Props {
  slug: string;
  name: string;
  price: string;
  imageUrl: string;
}

export function ProductCard({ slug, name, price, imageUrl }: Props) {
  return (
    <S.Card className="card">
      <S.ImageProduct href={`/produtos/${slug}`}>
        <Image src={imageUrl} fill alt={name} />
      </S.ImageProduct>
      <S.Content>
        <Link className="product-name" href={`/produtos/${slug}`}>
          {name}
        </Link>
        <S.Price>
          <PriceTagIcon width="28px" height="28px" color="#000" />
          <span>R$ {price}</span>
        </S.Price>
      </S.Content>

      <Button text="adicionar ao carrinho" href={slug} />
    </S.Card>
  );
}
