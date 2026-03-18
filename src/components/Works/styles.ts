import styled from 'styled-components'

import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  display: flex;
  text-align: center;
  padding: 128px 0;

  h2 {
    font-size: 40px;
    font-weight: bold;
  }

  h5 {
    font-size: 16px;
  }

  h5,
  span {
    color: ${colors.green};
  }

  span {
    font-size: 72px;
  }

  ul {
    display: flex;
    padding: 0;
    justify-content: space-between;

    li {
      display: flex;
      flex-direction: column;
      max-width: 240px;
      padding: 8px;
      border-top: 1px solid ${colors.gray};
      border-bottom: 1px solid ${colors.gray};
      border-radius: 16px;
      transition: transform 0.3s ease;

      &:hover {
        filter: brightness(1.5);
        transform: translateY(-6px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      }

      h3 {
        font-size: 32px;
        font-weight: bold;
      }

      p {
        font-size: 24px;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 48px 0;

    h2 {
      font-size: 32px;
      padding-bottom: 32px;
    }

    ul {
      flex-wrap: wrap;
      justify-content: center;
      gap: 48px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    h2 {
      font-size: 24px;
    }

    ul {
      margin: 0;
      padding: 0 48px;

      li {
        span {
          font-size: 56px;
        }
        h3 {
          font-size: 24px;
          margin: 16px 0;
        }
        p {
          font-size: 16px;
        }
      }
    }
  }
`
