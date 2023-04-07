import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import { Button } from "../Button";
import { PriceTagIcon } from "@/components/Icons";
import { Product } from "@/common/types";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice";

export function ProductCard({ id, slug, image, name, price }: Product) {
  const dispatch = useDispatch();

  const product = {
    id,
    slug,
    image,
    name,
    price,
  };

  return (
    <S.Card className="card">
      <S.ImageProduct href={`/produtos/${slug}`}>
        <Image src={image} fill alt={name} />
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

      <Button
        text="adicionar ao carrinho"
        type="button"
        onClick={() => dispatch(addToCart(product))}
      />
    </S.Card>
  );
}
