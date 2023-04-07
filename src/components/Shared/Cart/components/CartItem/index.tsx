import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { Product } from "@/common/types";

import * as S from "./styles";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/cart.slice";
import { Quantity } from "@/components/Elements/Quantity";
import { TrashIcon } from "@/components/Icons";

export function CartItem({ id, slug, image, name, price, qty }: Product) {
  const dispatch = useDispatch();

  const product = {
    id: id,
    image: image,
    slug: slug,
    name: name,
    price: price,
    qty: qty,
  };

  return (
    <>
      <S.ItemContainer>
        <S.ImageProduct href={`/produtos/${slug}`}>
          <Image src={image} fill alt={name} />
        </S.ImageProduct>
        <S.Content>
          <S.Info>
            <Link className="product-name" href={`/produtos/${slug}`}>
              {name}
            </Link>
            <S.Price>R${qty * price}</S.Price>
          </S.Info>
          <S.Actions>
            <Quantity
              incrementQuantity={() => dispatch(incrementQuantity(product))}
              decrementQuantity={() => dispatch(decrementQuantity(product))}
              qty={qty}
            />
            <button
              className="remove"
              onClick={() => dispatch(removeFromCart(product))}
            >
              <TrashIcon />
            </button>
          </S.Actions>
        </S.Content>
      </S.ItemContainer>
    </>
  );
}
