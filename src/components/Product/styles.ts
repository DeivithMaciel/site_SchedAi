import styled from 'styled-components'

import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  background-color: ${colors.darkGray};
  padding: 128px 0;
  text-align: center;

  span {
    color: ${colors.green};
    font-size: 16px;
  }

  h2 {
    font-size: 48px;
  }

  h4 {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    h2 {
      font-size: 40px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 48px 0;

    h4 {
      padding: 0 16px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 48px;

  ul {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0 24px 0 0;
    justify-content: center;
    gap: 48px;

    li {
      h3 {
        font-size: 32px;
        margin: 0;
      }

      p {
        font-size: 24px;
      }
    }
  }

  img {
    height: 50%;
    width: 50%;
    border-radius: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px;

    ul {
      li {
        h3 {
          font-size: 24px;
        }
        p {
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;

    ul {
      padding: 0;
      gap: 16px;
      text-align: center;

      li {
        p {
          margin-bottom: 0;
        }
      }
    }

    img {
      height: 100%;
      width: 100%;
    }
  }
`
