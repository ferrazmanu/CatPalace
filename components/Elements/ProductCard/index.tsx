import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import { Button } from "../Button";
import { PriceTagIcon } from "@/components/icons";

interface Props {
  slug: string;
  name: string;
  price: string;
  imageUrl: string;
}

export function ProductCard({ slug, name, price, imageUrl }: Props) {
  return (
    <>
      <S.Card>
        <S.ImageProduct href={`/produtos/${slug}`}>
          <Image src={imageUrl} width={380} height={230} alt={name} />
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
    </>
  );
}
