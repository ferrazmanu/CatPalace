import { useState } from "react";
import Head from "next/head";

import { Container } from "@/components/sharedstyles";
import { Modal } from "@/components/Elements/Modal";
import { Breadcrumb } from "@/components/Elements/Breadcrumb";
import { Button } from "@/components/Elements/Button";
import * as Form from "@/components/Elements/Form";

import * as S from "styles/postStyles";
import "swiper/css";
import "swiper/css/navigation";

export default function FAQ() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const breadcrumb = [
    { url: "/", text: "Início" },
    { url: "/sugestoes", text: "Dúvidas e Sugestões" },
  ];

  const submitMessage = (event) => {
    event.preventDefault();
    const number = "+5543991940137";

    let formattedMessage = `Olá, *CatPalace*! \n
      Meu nome é ${formData.name}, tenho a seguinte dúvida/sugestão: \n
      ${formData.message}
    `.replace(/^\s+/gm, "");

    let url = `https://api.whatsapp.com/send?phone=${number}`;
    url += `&text=${encodeURI(formattedMessage)}`;

    window.open(url);
    event.target.reset();
    setFormData({
      name: "",
      message: "",
    });
    setShowModal(true);
  };

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>Dúvidas e Sugestões | CatPalace</title>
        <meta name="description" content="Dúvidas e Sugestões" />
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
              <S.Title center>
                <div className="title">
                  <h2>Dúvidas e Sugestões</h2>
                </div>
              </S.Title>

              <Form.Form onSubmit={submitMessage}>
                <Form.InputBox>
                  <Form.Label htmlFor="name">Nome completo</Form.Label>
                  <Form.Input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                </Form.InputBox>

                <Form.InputBox>
                  <Form.Label htmlFor="message">Mensagem</Form.Label>
                  <Form.Textarea
                    name="message"
                    placeholder="Digite aqui sua dúvida ou sugestão"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                  />
                </Form.InputBox>

                <Button text={"Enviar mensagem"} type="submit" />
              </Form.Form>
            </S.Post>
          </S.PostContainer>
        </Container>
      </main>
      {showModal && (
        <Modal
          close={() => setShowModal(false)}
          modalHeader={<p>Dúvida/Sugestão redirecionada!</p>}
          modalBody={
            <p>
              Sua dúvida/sugestão foi redirecionada para o whatsapp da loja,
              certifique-se de enviá-la para que nosso atendimento a receba.
            </p>
          }
        />
      )}
    </>
  );
}
