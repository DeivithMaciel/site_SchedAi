import { createGlobalStyle } from "styled-components";


export const colors = {
  green: '#2ed573',
  dark: '#2f3542',
  gray: '#ced6e0',
  white: '#f1f2f6'
}

export const breakpoints = {
  tablet: '1024px',
  mobile: '767px'
}

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: block;
    background-color: ${colors.dark};
    color: ${colors.white};
  }
`
