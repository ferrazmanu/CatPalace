import { Container } from "@/components/sharedstyles";
import Head from "next/head";

export default function Products() {
  return (
    <>
      <Head>
        <title>CatPalace</title>
        <meta name="description" content="Aqui, seu pet é realeza!" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>
      <main>
        <Container>
          <div>Products Page</div>
        </Container>
      </main>
    </>
  );
}
