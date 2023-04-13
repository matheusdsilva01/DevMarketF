import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    &::before,
    &::after { box-sizing: inherit; }
  }
  ${({ theme }) => css`
    body {
      color: ${theme.colors["text-white"]};
    }
  `}
`;

export default GlobalStyles;
