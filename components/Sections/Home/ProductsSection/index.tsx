import { GridContainer } from "@/components/Containers/GridContainer";
import { SectionContainer } from "@/components/Containers/SectionContainer";
import { Button } from "@/components/Elements/Button";
import { ProductCard } from "@/components/Elements/ProductCard";

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
    <SectionContainer>
      <h2>Produtos</h2>

      <GridContainer>
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
      </GridContainer>

      <Button href="/produtos" text="ver todos" />
    </SectionContainer>
  );
}
