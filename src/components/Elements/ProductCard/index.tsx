import Image from "next/image";

import * as S from "./styles";
import { Button } from "../Button";
import { PriceTagIcon } from "@/components/Icons";
import { Product } from "@/common/types";

import { formatCurrency } from "utils/format";

export function ProductCard({ slug, image, name, price, category }: Product) {
  return (
    <S.Card className="card">
      <S.ImageProduct href={`/produtos/${category.slug}/${slug}`}>
        <Image src={image} fill alt={name} sizes="100vw" />
      </S.ImageProduct>

      <S.Content as="a" href={`/produtos/${category.slug}/${slug}`}>
        <div className="product-name">{name}</div>
        <S.Price className="price">
          <PriceTagIcon width="28px" height="28px" color="#000" />
          <span>R$ {formatCurrency(price)}</span>
        </S.Price>
      </S.Content>

      <Button text="ver produto" href={`/produtos/${category.slug}/${slug}`} />
    </S.Card>
  );
}
