import Document, { Html, Head, Main, NextScript } from "next/document";

import { getInitColorSchemeScript } from "@mui/material/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <body>
          {getInitColorSchemeScript()}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
