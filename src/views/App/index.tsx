import { AppProps } from "next/app";
import { GlobalStyle } from "./global-styles";

export function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
