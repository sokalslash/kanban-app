import { createGlobalStyle } from 'styled-components'

import { colors } from '@app/styles/colors'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: "Plus Jakarta Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${colors.black};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  ul,
  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

h1,
h2,
h3,
h4,
p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: inherit;
    background-color: transparent;
    border: none;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`
