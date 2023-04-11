import Head from "next/head";
import { Container } from "@/components/sharedstyles";
import { SectionContainer } from "@/components/Containers/SectionContainer";
import * as S from "@/styles/sobreStyles";
import { GetStaticProps } from "next";
import { GetAboutText, GetEmployees } from "@/lib/data";
import Image from "next/image";

export default function Sobre({ employees, text }) {
  return (
    <>
      <Head>
        <title>Sobre | CatPalace</title>
        <meta name="description" content="Aqui, seu pet é realeza!" />
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
        <S.Sobre>
          <Container>
            {text.content && (
              <SectionContainer
                sectionTitle={text.title}
                children={
                  <div
                    dangerouslySetInnerHTML={{
                      __html: text.content.html,
                    }}
                  />
                }
              />
            )}
            <SectionContainer
              sectionTitle="Integrantes do Palácio"
              className="mural-funcionarios"
              children={
                <S.GridFuncionarios>
                  {employees.map((employee) => {
                    return (
                      <S.EmployeeBox key={employee.id}>
                        <S.Photo>
                          <Image
                            src={employee.picture.url}
                            alt={employee.name}
                            fill
                          />
                          <div className="description">
                            <p>{employee.description}</p>
                          </div>
                        </S.Photo>
                        <S.Info>
                          <div className="name">{employee.name}</div>
                          <div className="role">{employee.role}</div>
                        </S.Info>
                      </S.EmployeeBox>
                    );
                  })}
                </S.GridFuncionarios>
              }
            />
          </Container>
        </S.Sobre>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const employees = (await GetEmployees()) || [];
  const text = (await GetAboutText()) || [];

  return {
    props: { employees, text },
    revalidate: 10,
  };
};
