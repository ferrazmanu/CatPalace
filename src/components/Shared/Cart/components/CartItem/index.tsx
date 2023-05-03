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
import { formatCurrency } from "utils/format";

export function CartItem({
  id,
  slug,
  image,
  name,
  price,
  qty,
  colorVariant,
  sizeVariant,
}: Product) {
  const dispatch = useDispatch();

  const product = {
    id,
    image,
    slug,
    name,
    price,
    qty,
    colorVariant,
    sizeVariant,
  };

  return (
    <>
      <S.ItemContainer>
        <S.ImageProduct href={`/produtos/${slug}`}>
          <Image src={image} fill alt={name} />
        </S.ImageProduct>
        <S.Content>
          <S.Info>
            <div className="top-info">
              <Link className="product-name" href={`/produtos/${slug}`}>
                {name}
              </Link>
              <S.Price>R$ {formatCurrency(qty * price)}</S.Price>
            </div>
            <div className="variants">
              {colorVariant && `Cor: ${colorVariant}`}
              {sizeVariant && `Tamanho: ${sizeVariant}`}
            </div>
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
