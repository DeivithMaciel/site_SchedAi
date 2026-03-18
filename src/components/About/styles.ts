import styled from 'styled-components'

import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  padding: 64px 0;

  span {
    color: ${colors.green};
  }

  section {
    border-radius: 16px;
    border: solid 1px ${colors.lightGreen};
    padding: 16px;

    h2 {
      font-size: 48px;
    }

    p {
      padding: 36px 0;
      font-size: 24px;
      line-height: 36px;
    }

    ul {
      display: flex;
      max-width: 60%;
      justify-content: space-between;

      li {
        text-align: center;
        font-size: 18px;
        padding: 8px;
        border-radius: 8px;
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        p {
          color: ${colors.lightGreen};
          line-height: 16px;
          padding: 0;
          margin: 0;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 48px 24px;

    section {
    h2 {
      font-size: 40px;
    }

      ul {
        max-width: 100%;
        padding: 0;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
  padding: 32px 0;

    section {
      h2 {
        font-size: 24px;
      }

      p {
        font-size: 16px;
        line-height: 24px;
        padding: 8px 0;
      }

      ul {

        li {
          font-size: 12px;

          p {
            font-size: 16px;
          }
        }
      }
    }
  }
`
