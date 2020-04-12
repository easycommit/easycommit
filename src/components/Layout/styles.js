import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  body {
    --bg: white;
    --text: #333e4d;
    --textLink: #8a4baf;

    margin: 0;
    padding: 1em;
    font-family: "Poppins", sans-serif;
    transition: background-color .1s ease-out, color .1s ease-out;
    -webkit-font-smoothing: antialiased;
    
    background-color: var(--bg);
    color: var(--text);
  }

  body.dark {
    --bg: #1a1427;
    --text: #d0d0d1;
    --textLink: #b17acc;
  }

  a {
    display: inline-block;
    color: var(--textLink);
    text-decoration: none;
    font-weight: 700;
    font-style: italic;
    transition: color .1s ease-out, transform .1s ease-out;
    :hover {
      color: var(--text);
      transform: scale(1.2)
    }
  }

  @media screen and (min-width: 480px) {
    body {
      padding: 5em;
    }
  }
`
