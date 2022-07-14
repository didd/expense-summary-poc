import { createGlobalStyle as css } from "styled-components";
import { linkBlue } from "src/lib/colors";

export const GlobalStyle = css`
  html,
  body {
    padding: 30px;
  }
  body,
  button {
    font-family: sans-serif;
    padding: 0;
    margin: 0;
  }
  button {
    cursor: pointer;
  }
  img {
    max-width: 100%;
  }
  a {
    text-decoration: none;
    color: ${linkBlue};
  }
  body {
    min-height: 101vh;
  }
`;
