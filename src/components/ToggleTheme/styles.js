import styled from "styled-components"

export const IconWrapper = styled.button`
  position: fixed;
  top: 1em;
  right: 1em;
  padding: 0;
  appearance: none;
  align-items: center;
  background: transparent;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  overflow: hidden;
  transition: opacity 0.3s ease;
  vertical-align: middle;
  width: 40px;
  outline: 0;
  @media screen and (min-width: 480px) {
    top: 5em;
    right: 5em;
  }
`

export const MoonOrSun = styled.div`
  border: 2px solid ${p => (p.isDark ? `var(--text)` : `var(--textLink)`)};
  background: ${p => (p.isDark ? "var(--text)" : "var(--textLink)")};
  border-radius: 50%;
  height: 24px;
  overflow: ${p => (p.isDark ? `visible` : `hidden`)};
  position: relative;
  transform: scale(${p => (p.isDark ? 0.55 : 1)});
  transition: all 0.45s ease;
  width: 24px;

  &::before {
    border-radius: 50%;
    border: 2px solid var(--textLink);
    content: "";
    height: 24px;
    opacity: ${p => (p.isDark ? 0 : 1)};
    position: absolute;
    right: -9px;
    top: -9px;
    transform: translate(${p => (p.isDark ? `14px, -14px` : `0, 0`)});
    transition: transform 0.45s ease;
    width: 24px;
  }

  &::after {
    border-radius: 50%;
    box-shadow: 0 -23px 0 var(--text), 0 23px 0 var(--text),
      23px 0 0 var(--text), -23px 0 0 var(--text), 15px 15px 0 var(--text),
      -15px 15px 0 var(--text), 15px -15px 0 var(--text),
      -15px -15px 0 var(--text);
    content: "";
    height: 8px;
    left: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    width: 8px;
    transform: scale(${p => (p.isDark ? 1 : 0)});
    transition: all 0.35s ease;
  }
`

export const MoonMask = styled.div`
  background: white;
  border-radius: 50%;
  border: 0;
  height: 24px;
  opacity: ${p => (p.isDark ? 0 : 1)};
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(${p => (p.isDark ? `14px, -14px` : `0, 0`)});
  transition: background 0.25s ease, transform 0.45s ease;
  width: 24px;
`
