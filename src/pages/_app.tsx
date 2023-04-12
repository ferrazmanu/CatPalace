import type { AppProps } from "next/app";
import GlobalStyle from "@/components/globalstyles";
import { Header } from "@/components/Shared/Header";
import Theme from "@/components/Shared/Theme";
import { Footer } from "@/components/Shared/Footer";

import { Provider } from "react-redux";
import store from "../redux/store";
import { WhatsappButton } from "@/components/Elements/WhatsappButton";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <WhatsappButton />
      </Theme>
    </Provider>
  );
}
