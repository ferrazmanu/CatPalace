import type { AppProps } from "next/app";
import GlobalStyle from "@/components/globalstyles";
import { Header } from "@/components/Shared/Header";
import Theme from "@/components/Shared/Theme";
import { Footer } from "@/components/Shared/Footer";

import { Provider } from "react-redux";
import store from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Theme>
    </Provider>
  );
}
