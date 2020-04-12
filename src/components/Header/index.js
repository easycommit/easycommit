import React from "react"
import { Link } from "gatsby"

import ToggleTheme from "../ToggleTheme"

import { Header } from "./styles"

import logo from "../../images/logo.svg"

export default ({ siteTitle }) => (
  <Header>
    <Link to="/">
      <img src={logo} alt={siteTitle} width="300" />
    </Link>
    <ToggleTheme />
  </Header>
)
