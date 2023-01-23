import type { AppProps } from "next/app";
import GlobalStyle from "../components/globalstyles";
import { Header } from "../components/shared/Header";
import Theme from "../components/shared/Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FZD65B8WFY"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-FZD65B8WFY');
              `,
        }}
      />
      <Theme>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
