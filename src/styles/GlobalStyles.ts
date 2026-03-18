import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  lightGreen: '#7bed9f',
  green: '#2ed573',
  black: '#2f3542',
  darkBlack: '#3d3d3d',
  gray: '#ced6e0',
  darkGray: '#2D343B',
  white: '#f1f2f6'
}

export const breakpoints = {
  tablet: '1024px',
  mobile: '767px'
}

export const GlobalStyles = createGlobalStyle`
  html {
  scroll-behavior: smooth;
}

  body {
    display: block;
    background-color: ${colors.darkBlack};
    color: ${colors.white};
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`

export const PrimaryButton = styled.button`
  background-color: ${colors.green};
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.lightGreen};
  }
`

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: ${colors.green};
  border: 1px solid ${colors.green};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.black};
  }
`
