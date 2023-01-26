import { Container } from "@/components/sharedstyles";
import Head from "next/head";

export default function Products() {
  return (
    <>
      <Container>
        <Head>
          <title>CatPalace</title>
          <meta name="description" content="Aqui, seu pet é realeza!" />
          <link rel="icon" href="/assets/images/favicon.ico" />
        </Head>
        <div>Products Page</div>
      </Container>
    </>
  );
}
