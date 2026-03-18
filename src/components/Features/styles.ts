import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  display: flex;
  text-align: center;
  padding: 96px 0;

  h5 {
    color: ${colors.green};
    font-size: 16px;
  }

  h2 {
    font-size: 48px;
    padding-bottom: 16px;
  }

  ul {
    display: grid;
    margin: 0;
    padding-left: 0;
    gap: 48px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    li {
      border-top: 1px solid ${colors.green};
      border-bottom: 1px solid ${colors.green};
      padding: 16px;
      border-radius: 16px;
      transition: transform 0.3s ease;

      &:hover {
        filter: brightness(1.3);
        transform: translateY(-6px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      }

      h3 {
        font-size: 32px;
      }

      p {
        font-size: 24px;
        line-height: 36px;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    h2 {
      font-size: 36px;
    }

    ul {
      gap: 16px;
      grid-template-columns: 1fr 1fr;
      padding: 0 48px;

      li {
        width: 80%;
      }
    }
  }
`
