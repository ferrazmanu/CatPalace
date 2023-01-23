import { Button } from "@/components/Elements/Button";
import { ProductCard } from "@/components/Elements/ProductCard";
import * as S from "./styles";

interface Props {
  products: Product[];
}
interface Images {
  url: string;
}

interface Product {
  id: string;
  slug: string;
  images: Images[];
  name: string;
  price: string;
}

export function ProductsSection({ products }: Props) {
  return (
    <S.SectionContainer>
      <h2>Produtos</h2>

      <S.ProductsGrid>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              slug={product.slug}
              imageUrl={product.images[0].url}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </S.ProductsGrid>

      <Button href="/produtos" text="ver todos" />
    </S.SectionContainer>
  );
}
