import { createGlobalStyle } from 'styled-components'

export const colors = {
  lightGreen: '#7bed9f',
  green: '#2ed573',
  black: '#2f3542',
  darkBlack: '#3d3d3d',
  gray: '#ced6e0',
  white: '#f1f2f6'
}

export const breakpoints = {
  tablet: '1024px',
  mobile: '767px'
}

export const GlobalStyles = createGlobalStyle`
  body {
    display: block;
    background-color: ${colors.darkBlack};
    color: ${colors.white};
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`
