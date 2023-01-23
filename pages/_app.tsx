import type { AppProps } from "next/app";
import GlobalStyle from "../components/globalstyles";
import { Header } from "../components/shared/Header";
import Theme from "../components/shared/Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
