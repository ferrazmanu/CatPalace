import Head from "next/head";

import { Container } from "@/components/sharedstyles";

import * as S from "styles/postStyles";
import "swiper/css";
import "swiper/css/navigation";

export default function PoliticasDePrivacidade() {
  return (
    <>
      <Head>
        <title>Políticas de Privacidade | CatPalace</title>
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
                  <h2> Políticas de Privacidade</h2>
                </div>
              </S.Title>

              <S.Text>
                <p>
                  Na CatPalace, privacidade e segurança são prioridades e nos
                  comprometemos com a transparência do tratamento de dados
                  pessoais dos nossos usuários/clientes. Por isso, esta presente
                  Política de Privacidade estabelece como é feita a coleta, uso
                  e transferência de informações de clientes ou outras pessoas
                  que acessam ou usam nosso site.
                </p>
                <p>
                  Ao utilizar nossos serviços, você entende que coletaremos e
                  usaremos suas informações pessoais nas formas descritas nesta
                  Política, sob as normas da Constituição Federal de 1988, das
                  normas de Proteção de Dados (LGPD, Lei Federal 13.709/2018),
                  das disposições consumeristas da Lei Federal 8078/1990 e as
                  demais normas do ordenamento jurídico brasileiro aplicáveis.{" "}
                </p>
                <p>
                  Dessa forma, a (nome empresarial), doravante denominada
                  simplesmente como “(nome empresarial simplificado)”, inscrita
                  no CNPJ/MF sob o nº (nº do CNPJ), no papel de Controladora de
                  Dados, obriga-se ao disposto na presente Política de
                  Privacidade.
                </p>

                <h5>
                  1. Quais dados coletamos sobre você e para qual finalidade?
                </h5>
                <p>
                  Nosso site coleta e utiliza alguns dados pessoais seus, de
                  forma a viabilizar a prestação de serviços e aprimorar a
                  experiência de uso.
                </p>

                <h6>1.1. Dados pessoais fornecidos pelo usuário</h6>
                <p>- Nome completo</p>
                <p> - Número de telefone</p>
                <p>- Mensagem de sugestão</p>

                <h5>2. Como coletamos os seus dados?</h5>
                <p>
                  Nesse sentido, a coleta dos seus dados pessoais ocorre da
                  seguinte forma: - quando o usuário utiliza o formulário de
                  sugestões
                </p>

                <h6>2.1. Consentimento</h6>
                <p>
                  É a partir do seu consentimento que tratamos os seus dados
                  pessoais. O consentimento é a manifestação livre, informada e
                  inequívoca pela qual você autoriza a CatPalace a tratar seus
                  dados.
                </p>
                <p>
                  Assim, em consonância com a Lei Geral de Proteção de Dados,
                  seus dados só serão coletados, tratados e armazenados mediante
                  prévio e expresso consentimento.
                </p>
                <p>
                  O seu consentimento será obtido de forma específica para cada
                  finalidade acima descrita, evidenciando o compromisso de
                  transparência e boa-fé da CatPalace para com seus
                  usuários/clientes, seguindo as regulações legislativas
                  pertinentes.
                </p>
                <p>
                  Ao utilizar os serviços da CatPalace e fornecer seus dados
                  pessoais, você está ciente e consentindo com as disposições
                  desta Política de Privacidade, além de conhecer seus direitos
                  e como exercê-los.
                </p>
                <p>
                  A qualquer tempo e sem nenhum custo, você poderá revogar seu
                  consentimento.
                </p>
                <p>
                  É importante destacar que a revogação do consentimento para o
                  tratamento dos dados pode implicar a impossibilidade da
                  performance adequada de alguma funcionalidade do site que
                  dependa da operação. Tais consequências serão informadas
                  previamente.
                </p>

                <h5>3. Quais são os seus direitos?</h5>
                <p>
                  A CatPalace assegura a seus usuários/clientes seus direitos de
                  titular previstos no artigo 18 da Lei Geral de Proteção de
                  Dados. Dessa forma, você pode, de maneira gratuita e a
                  qualquer tempo:
                </p>

                <ul>
                  <li>
                    Confirmar a existência de tratamento de dados, de maneira
                    simplificada ou em formato claro e completo.
                  </li>
                  <li>
                    Acessar seus dados, podendo solicitá-los em uma cópia
                    legível sob forma impressa ou por meio eletrônico, seguro e
                    idôneo.
                  </li>
                  <li>
                    Corrigir seus dados, ao solicitar a edição, correção ou
                    atualização destes.
                  </li>
                  <li>
                    Limitar seus dados quando desnecessários, excessivos ou
                    tratados em desconformidade com a legislação através da
                    anonimização, bloqueio ou eliminação.
                  </li>
                  <li>
                    Solicitar a portabilidade de seus dados, através de um
                    relatório de dados cadastrais que a CatPalace trata a seu
                    respeito.
                  </li>
                  <li>
                    Eliminar seus dados tratados a partir de seu consentimento,
                    exceto nos casos previstos em lei.
                  </li>
                  <li>
                    Revogar seu consentimento, desautorizando o tratamento de
                    seus dados.
                  </li>
                  <li>
                    Informar-se sobre a possibilidade de não fornecer seu
                    consentimento e sobre as consequências da negativa.
                  </li>
                </ul>

                <h5>4. Como você pode exercer seus direitos de titular?</h5>
                <p>
                  Para exercer seus direitos de titular, você deve entrar em
                  contato com a CatPalace através dos seguintes meios
                  disponíveis:
                </p>
                <ul>
                  <li>Email: store.catpalace@gmail.com</li>
                  <li>Telefone: (43)991940137</li>
                </ul>
                <p>
                  De forma a garantir a sua correta identificação como titular
                  dos dados pessoais objeto da solicitação, é possível que
                  solicitemos documentos ou demais comprovações que possam
                  comprovar sua identidade. Nessa hipótese, você será informado
                  previamente.
                </p>

                <h5>5. O que fazemos para manter seus dados seguros?</h5>
                <p>
                  Para mantermos suas informações pessoais seguras, usamos
                  ferramentas físicas, eletrônicas e gerenciais orientadas para
                  a proteção da sua privacidade.
                </p>
                <p>
                  Aplicamos essas ferramentas levando em consideração a natureza
                  dos dados pessoais coletados, o contexto e a finalidade do
                  tratamento e os riscos que eventuais violações gerariam para
                  os direitos e liberdades do titular dos dados coletados e
                  tratados.
                </p>
                <p>Entre as medidas que adotamos, destacamos as seguintes:</p>
                <ul>
                  <li>
                    Apenas pessoas autorizadas têm acesso a seus dados pessoais
                  </li>
                  <li>
                    O acesso a seus dados pessoais é feito somente após o
                    compromisso de confidencialidade
                  </li>
                  <li>
                    Seus dados pessoais são armazenados em ambiente seguro e
                    idôneo.
                  </li>
                </ul>
                <p>
                  A CatPalace se compromete a adotar as melhores posturas para
                  evitar incidentes de segurança. Contudo, é necessário destacar
                  que nenhuma página virtual é inteiramente segura e livre de
                  riscos. É possível que, apesar de todos os nossos protocolos
                  de segurança, problemas de culpa exclusivamente de terceiros
                  ocorram, como ataques cibernéticos de hackers, ou também em
                  decorrência da negligência ou imprudência do próprio
                  usuário/cliente.
                </p>
                <p>
                  Em caso de incidentes de segurança que possa gerar risco ou
                  dano relevante para você ou qualquer um de nossos
                  usuários/clientes, comunicaremos aos afetados e a Autoridade
                  Nacional de Proteção de Dados sobre o ocorrido, em consonância
                  com as disposições da Lei Geral de Proteção de Dados.
                </p>

                <h5>6. Cookies ou dados de navegação</h5>
                <p>
                  A CatPalace faz uso de Cookies, que são arquivos de texto
                  enviados pela plataforma ao seu computador e que nele se
                  armazenam, que contém informações relacionadas à navegação do
                  site. Em suma, os Cookies são utilizados para aprimorar a
                  experiência de uso.
                </p>
                <p>
                  Ao acessar nosso site e consentir com o uso de Cookies, você
                  manifesta conhecer e aceitar a utilização de um sistema de
                  coleta de dados de navegação com o uso de Cookies em seu
                  dispositivo.
                </p>
                <p>
                  Você pode, a qualquer tempo e sem nenhum custo, alterar as
                  permissões, bloquear ou recusar os Cookies. Todavia, a
                  revogação do consentimento de determinados Cookies pode
                  inviabilizar o funcionamento correto de alguns recursos da
                  plataforma.
                </p>
                <p>
                  Para gerenciar os cookies do seu navegador, basta fazê-lo
                  diretamente nas configurações do navegador, na área de gestão
                  de Cookies.
                </p>

                <h5>7. Alteração desta Política de Privacidade</h5>
                <p>
                  A atual versão da Política de Privacidade foi formulada e
                  atualizada pela última vez em: 14/04/2023.
                </p>
                <p>
                  Reservamos o direito de modificar essa Política de Privacidade
                  a qualquer tempo, principalmente em função da adequação a
                  eventuais alterações feitas em nosso site ou em âmbito
                  legislativo. Recomendamos que você a revise com frequência.
                </p>
                <p>
                  Ao utilizar nossos serviços e fornecer seus dados pessoais
                  após tais modificações, você as consente.
                </p>

                <h5>8. Isenção de responsabilidade</h5>
                <p>
                  Embora adotemos elevados padrões de segurança a fim de evitar
                  incidentes, não há nenhuma página virtual inteiramente livre
                  de riscos. Nesse sentido, a CatPalace não se responsabiliza
                  por:
                </p>
                <p>
                  I – Quaisquer consequências decorrentes da negligência,
                  imprudência ou imperícia dos usuários em relação a seus dados
                  individuais. Garantimos e nos responsabilizamos apenas pela
                  segurança dos processos de tratamento de dados e do
                  cumprimento das finalidades descritas no presente instrumento.
                </p>
                <p>
                  Destacamos que a responsabilidade em relação à
                  confidencialidade dos dados de acesso é do usuário.
                </p>
                <p>
                  II – Ações maliciosas de terceiros, como ataques de hackers,
                  exceto se comprovada conduta culposa ou deliberada da
                  CatPalace.
                </p>
                <p>
                  Destacamos que em caso de incidentes de segurança que possam
                  gerar risco ou dano relevante para você ou qualquer um de
                  nossos usuários/clientes, comunicaremos aos afetados e a
                  Autoridade Nacional de Proteção de Dados sobre o ocorrido e
                  cumpriremos as providências necessárias.
                </p>
                <p>
                  III – Inveracidade das informações inseridas pelo
                  usuário/cliente nos registros necessários para a utilização
                  dos serviços da CatPalace; quaisquer consequências decorrentes
                  de informações falsas ou inseridas de má-fé são de
                  inteiramente responsabilidade do usuário/cliente.
                </p>

                <h5>9. Encarregado de Proteção de Dados</h5>
                <p>
                  A CatPalace disponibiliza os seguintes meios para que você
                  possa entrar em contato conosco para exercer seus direitos de
                  titular: store.catpalace@gmail.com.
                </p>
              </S.Text>
            </S.Post>
          </S.PostContainer>
        </Container>
      </main>
    </>
  );
}
