import Head from "next/head";

import { Container } from "@/components/sharedstyles";

import * as S from "styles/postStyles";
import "swiper/css";
import "swiper/css/navigation";
import { Details } from "@/components/Elements/Details";

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Perguntas Frequentes | CatPalace</title>
        <meta name="description" content="Políticas de privacidade" />
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
              <S.Title>
                <div className="title">
                  <h2>Perguntas Frequentes</h2>
                </div>
              </S.Title>

              <S.Text className="faq">
                <Details
                  open
                  summary={"Lorem ipsum sit amet"}
                  children={
                    <p>
                      Nunc elit tortor, dictum in sapien ac, accumsan consequat
                      nunc. Etiam tempor mi et justo tempus gravida. Donec vitae
                      sem ac dui ultricies fringilla. Nullam ultrices, justo eu
                      malesuada tincidunt, nulla erat tristique sem, nec
                      interdum nulla tortor vel mi. Sed a iaculis nibh. Aliquam
                      vehicula mattis tortor, eu egestas odio blandit et.
                      Pellentesque imperdiet libero non quam blandit porttitor.
                      Etiam sit amet mi massa. Pellentesque habitant morbi
                      tristique senectus et netus et malesuada fames ac turpis
                      egestas. Suspendisse ornare viverra augue vel consequat.
                      Aliquam erat volutpat. Ut rutrum ligula at dolor
                      ullamcorper auctor vitae non justo.
                    </p>
                  }
                />
                <Details
                  summary={"Lorem ipsum sit amet"}
                  children={
                    <p>
                      Nunc elit tortor, dictum in sapien ac, accumsan consequat
                      nunc. Etiam tempor mi et justo tempus gravida. Donec vitae
                      sem ac dui ultricies fringilla. Nullam ultrices, justo eu
                      malesuada tincidunt, nulla erat tristique sem, nec
                      interdum nulla tortor vel mi. Sed a iaculis nibh. Aliquam
                      vehicula mattis tortor, eu egestas odio blandit et.
                      Pellentesque imperdiet libero non quam blandit porttitor.
                      Etiam sit amet mi massa. Pellentesque habitant morbi
                      tristique senectus et netus et malesuada fames ac turpis
                      egestas. Suspendisse ornare viverra augue vel consequat.
                      Aliquam erat volutpat. Ut rutrum ligula at dolor
                      ullamcorper auctor vitae non justo.
                    </p>
                  }
                />
                <Details
                  summary={"Lorem ipsum sit amet"}
                  children={
                    <p>
                      Nunc elit tortor, dictum in sapien ac, accumsan consequat
                      nunc. Etiam tempor mi et justo tempus gravida. Donec vitae
                      sem ac dui ultricies fringilla. Nullam ultrices, justo eu
                      malesuada tincidunt, nulla erat tristique sem, nec
                      interdum nulla tortor vel mi. Sed a iaculis nibh. Aliquam
                      vehicula mattis tortor, eu egestas odio blandit et.
                      Pellentesque imperdiet libero non quam blandit porttitor.
                      Etiam sit amet mi massa. Pellentesque habitant morbi
                      tristique senectus et netus et malesuada fames ac turpis
                      egestas. Suspendisse ornare viverra augue vel consequat.
                      Aliquam erat volutpat. Ut rutrum ligula at dolor
                      ullamcorper auctor vitae non justo.
                    </p>
                  }
                />
                <Details
                  summary={"Lorem ipsum sit amet"}
                  children={
                    <p>
                      Nunc elit tortor, dictum in sapien ac, accumsan consequat
                      nunc. Etiam tempor mi et justo tempus gravida. Donec vitae
                      sem ac dui ultricies fringilla. Nullam ultrices, justo eu
                      malesuada tincidunt, nulla erat tristique sem, nec
                      interdum nulla tortor vel mi. Sed a iaculis nibh. Aliquam
                      vehicula mattis tortor, eu egestas odio blandit et.
                      Pellentesque imperdiet libero non quam blandit porttitor.
                      Etiam sit amet mi massa. Pellentesque habitant morbi
                      tristique senectus et netus et malesuada fames ac turpis
                      egestas. Suspendisse ornare viverra augue vel consequat.
                      Aliquam erat volutpat. Ut rutrum ligula at dolor
                      ullamcorper auctor vitae non justo.
                    </p>
                  }
                />
              </S.Text>
            </S.Post>
          </S.PostContainer>
        </Container>
      </main>
    </>
  );
}
