import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import { IconWrapper, MoonOrSun, MoonMask } from "./styles"

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <IconWrapper
        isDark={theme === "dark"}
        onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
      >
        <MoonOrSun isDark={theme === "dark"} />
        <MoonMask isDark={theme === "dark"} />
      </IconWrapper>
    )}
  </ThemeToggler>
)
