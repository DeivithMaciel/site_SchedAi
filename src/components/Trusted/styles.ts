import styled from 'styled-components'

import { breakpoints } from '../../styles/GlobalStyles'

export const container = styled.div`
  display: flex;
  text-align: center;

  h2 {
    font-weight: bold;
  }
`

export const LogoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
  padding: 36px 0;

  li {
    display: flex;
    align-items: center;

    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
      padding-right: 8px;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      }
    }

    span {
      font-size: 36px;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 16px;
    margin: 0;
    padding: 0 16px;

    li {
      img {
        height: 32px;
        width: 32px;
      }
      span {
        font-size: 32px;
      }
    }
  }
`
