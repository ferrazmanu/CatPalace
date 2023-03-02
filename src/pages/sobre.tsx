import Head from "next/head";
import { Container } from "@/components/sharedstyles";
import { SectionContainer } from "@/components/Containers/SectionContainer";
import * as S from "@/styles/sobreStyles";
import { GetStaticProps } from "next";
import { GetEmployees } from "@/lib/data";
import Image from "next/image";

export default function Sobre({ employees }) {
  return (
    <>
      <Head>
        <title>CatPalace</title>
        <meta name="description" content="Aqui, seu pet é realeza!" />
        <link rel="icon" href="/assets/static/favicon.ico" />
      </Head>

      <main>
        <S.Sobre>
          <Container>
            <SectionContainer
              sectionTitle="Sobre"
              children={
                <p>
                  Nulla id convallis arcu. Nunc pretium vel eros vitae aliquet.
                  Etiam eget nisi a mauris egestas rhoncus. Nulla venenatis
                  tortor a consectetur convallis. Donec tempor, nisl ac finibus
                  tempor, ligula quam porta sem, in fermentum nisi mi dignissim
                  erat. Aenean vitae lectus elementum, placerat ipsum et, tempor
                  felis. Cras auctor et dui et iaculis. Sed hendrerit odio et
                  justo elementum, at efficitur magna fermentum. Proin in enim
                  justo. Proin quis mauris mattis, gravida nibh in, luctus urna.
                  Quisque facilisis tellus id ipsum consequat iaculis.
                </p>
              }
            />
            <SectionContainer
              sectionTitle="Mural de Funcionários"
              className="mural-funcionarios"
              children={
                <S.GridFuncionarios>
                  {employees.map((employee) => {
                    return (
                      <S.EmployeeBox>
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

  return {
    props: { employees },
    revalidate: 10,
  };
};
