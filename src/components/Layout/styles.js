import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  body {
    --bg: white;
    --text: #333e4d;
    --textLink: #5BC0BE;

    margin: 0;
    padding: 1em;
    font-family: "Poppins", sans-serif;
    transition: background-color 0.3s ease-out, color 0.3s ease-out;
    -webkit-font-smoothing: antialiased;
    
    background-color: var(--bg);
    color: var(--text);
  }

  body.dark {
    --bg: #1C2541;
    --text: #d0d0d1;
    --textLink: #5BC0BE;
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
