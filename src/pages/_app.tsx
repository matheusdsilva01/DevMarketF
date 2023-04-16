import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import theme from "@/styles/theme";

import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  display: "swap",
  subsets: ["latin"]
});

const materialTheme = createTheme({
  typography: { allVariants: { color: theme.colors["text-white"] } },
  components: {
    MuiInputBase: {
      styleOverrides: {
        adornedStart: { color: theme.colors["text-white"] },
        colorSecondary: theme.colors["text-white"]
      }
    },
    MuiInput: {
      styleOverrides: { input: { color: theme.colors["text-white"] } }
    },
    MuiOutlinedInput: {
      styleOverrides: { input: { color: theme.colors["text-white"] } }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: theme.colors["gray-02"] }
      }
    }
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DevMarketF</title>
      </Head>
      <ThemeProvider theme={materialTheme}>
        <main className={roboto.className}>
          <CssBaseline />
          <Component {...pageProps} />
          <ToastContainer />
        </main>
      </ThemeProvider>
    </>
  );
}
