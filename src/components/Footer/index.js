import React from "react"
import { Github, Linkedin, Twitter, Instagram } from "@styled-icons/feather"

import { Container } from "./styles"

export default () => (
  <>
    <Container>
      <a href="https://github.com/easycommit" title="Our github">
        <Github size="25" />
      </a>
      <a href="https://twitter.com/easy_commit" title="Our twitter">
        <Twitter size="25" />
      </a>
      <a href="https://www.instagram.com/easy.commit/" title="Our instagram">
        <Instagram size="25" />
      </a>
      <a
        href="https://www.linkedin.com/company/easy-commit/"
        title="Our linkedin"
      >
        <Linkedin size="25" />
      </a>
    </Container>

    <p>© {new Date().getFullYear()}</p>
  </>
)
