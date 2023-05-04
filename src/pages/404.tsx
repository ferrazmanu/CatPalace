import Head from "next/head";

import { Container } from "@/components/sharedstyles";

import * as S from "styles/postStyles";
import "swiper/css";
import "swiper/css/navigation";
import { Breadcrumb } from "@/components/Elements/Breadcrumb";
import Link from "next/link";

export default function TermosDeUso() {
  return (
    <>
      <Head>
        <title>404 | CatPalace</title>
        <meta name="description" content="Termos de Uso" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>
      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XYZ57V4X6P"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-XYZ57V4X6P');
              `,
        }}
      />
      <main>
        <Container>
          <S.PostContainer>
            <S.Post>
              <S.Title style={{ textAlign: "center" }}>
                <div className="title">
                  <h2>404 - Página não encontrada :( </h2>
                </div>
              </S.Title>

              <S.Text style={{ textAlign: "center" }}>
                <p>
                  A página que você está tentando acessar não foi encontrada.
                </p>
                <p>
                  Caso queira, você pode deixar uma sugestão na nossa página de{" "}
                  <Link href={"/sugestoes"}>dúvidas e sugestões</Link> para que
                  possamos melhorar!
                </p>
              </S.Text>
            </S.Post>
          </S.PostContainer>
        </Container>
      </main>
    </>
  );
}
