import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/styles/global.styles";
import theme from "@/styles/theme";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  display: "swap",
  subsets: ["latin"]
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
      <GlobalStyles />
    </ThemeProvider>
  );
}
