import Head from "next/head";

import { Container } from "@/components/sharedstyles";

import * as S from "styles/postStyles";
import "swiper/css";
import "swiper/css/navigation";
import { Details } from "@/components/Elements/Details";
import { Breadcrumb } from "@/components/Elements/Breadcrumb";
import Link from "next/link";

export default function FAQ() {
  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/consulte/faq", text: "Perguntas Frequentes" },
  ];

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
          <Breadcrumb breadcrumb={breadcrumb} />

          <S.PostContainer>
            <S.Post>
              <S.Title>
                <div className="title">
                  <h2>Perguntas Frequentes</h2>
                </div>
              </S.Title>

              <S.Text className="faq">
                <Details
                  summary={"Como comprar?"}
                  children={
                    <>
                      <p>
                        É simples, basta você ir em produtos e adicioná-los ao
                        carrinho → no carrinho, clique em finalizar o pedido →
                        um link para iniciar uma conversa no WhatsApp abrirá →
                        clique em iniciar conversa → seu pedido será
                        automaticamente redirecionado na conversa da nossa
                        atendente → clique na seta para enviar a mensagem, ou
                        aperte enter → nossa atendente irá receber o pedido e
                        combinar os detalhes finais da sua compra (pagamento,
                        prazo de entrega, etc.).
                      </p>
                      <p>
                        Prontinho, você realizou a compra na melhor loja de
                        produtos especializados em felinos de pequeno porte,
                        agora é só aguardar!
                      </p>
                    </>
                  }
                />
                <Details
                  summary={"Nossa marca vende apenas produtos para gatos?"}
                  children={
                    <p>
                      Nossa marca é especialista em produtos para gatos, mas há
                      comedouros, fontes, camas e alguns brinquedos que podem
                      ser destinados a cachorros também. Além de nossas canecas
                      e almofadas exclusivas, para deixar a casa dos humanos com
                      muito mais estilo e a escova removedora de pelos de
                      tecidos.
                    </p>
                  }
                />
                <Details
                  summary={"Quais são as formas de pagamento e como efetuá-lo?"}
                  children={
                    <>
                      <p>
                        Trabalhamos com pix, ou links de pagamentos para compras
                        no débito, crédito à vista, ou parceladas.
                      </p>
                      <p>
                        Depois que você enviar o pedido para a nossa atendente
                        através do WhatsApp, ela revisará com você e em seguida
                        combinará a forma de pagamento.
                      </p>
                      <p>
                        Via pix, ela enviará a chave para transferência. Em caso
                        de compras no crédito, débito ou parceladas, será
                        encaminhado um link do PagSeguro a ser preenchido com os
                        dados da compra, após preenchido, basta clicar em
                        finalizar a compra.
                      </p>
                    </>
                  }
                />
                <Details
                  summary={
                    "Onde consigo tirar dúvidas sobre pedidos/informações de produtos/prazo de entrega?"
                  }
                  children={
                    <p>
                      Para qualquer dúvida, basta entrar em contato conosco
                      direto por do nosso{" "}
                      <Link
                        href={
                          "https://api.whatsapp.com/send/?phone=5543991940137&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+atendente."
                        }
                        target="_blank"
                      >
                        WhatsApp
                      </Link>{" "}
                      ou por nossa página de{" "}
                      <Link href={"/sugestoes"}>dúvidas e sugestões</Link>.
                      Trabalhamos de segunda a sexta das 08h30 às 18h e sábado
                      das 08h30 às 12h.
                    </p>
                  }
                />
                <Details
                  summary={"Entrega em todo território nacional?"}
                  children={
                    <p>
                      Sim, enviamos para todo o Brasil. O envio para cidades
                      fora de Londrina/PR irá apresentar uma taxa mediante ao
                      frete.
                    </p>
                  }
                />
                <Details
                  summary={"Possui loja física?"}
                  children={
                    <p>
                      No momento ainda não temos loja física, você pode conferir
                      os nossos produtos aqui no site, ou através do nosso{" "}
                      <Link
                        href={"https://www.instagram.com/catpalace.store/"}
                        target="_blank"
                      >
                        Instagram
                      </Link>
                      ,{" "}
                      <Link
                        href={
                          "https://www.facebook.com/profile.php?id=100091774399203"
                        }
                        target="_blank"
                      >
                        Facebook
                      </Link>
                      ,{" "}
                      <Link
                        href={"https://www.tiktok.com/@catpalace.store"}
                        target="_blank"
                      >
                        TikTok
                      </Link>{" "}
                      ou pelo nosso catálogo digital no{" "}
                      <Link
                        href={
                          "https://api.whatsapp.com/send/?phone=5543991940137&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+atendente."
                        }
                        target="_blank"
                      >
                        WhatsApp
                      </Link>
                      .
                    </p>
                  }
                />
                <Details
                  summary={
                    "Onde posso sugerir melhorias/novos produtos/conteúdos a serem abordados?"
                  }
                  children={
                    <p>
                      Queremos sempre trazer o melhor para você e o seu felino,
                      então, todos os feedbacks são muito bem-vindos. Você pode
                      enviá-los através do nosso canal de sugestões,{" "}
                      <Link href={"/sugestoes"}>clicando aqui.</Link>
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
