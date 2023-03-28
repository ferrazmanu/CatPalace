import type { AppProps } from "next/app";
import GlobalStyle from "@/components/globalstyles";
import { Header } from "@/components/Shared/Header";
import Theme from "@/components/Shared/Theme";
import { Footer } from "@/components/Shared/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
      <Theme>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Theme>
    </>
  );
}
