import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  padding: 64px 0;

  section {
    background-color: ${colors.black};
    padding: 48px;
    border-radius: 16px;
    text-align: center;
  }

  h2 {
    font-size: 40px;
    margin: 0;
  }

  p {
    font-size: 24px;
    margin: 24px 0 48px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 48px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
    }
    .buttons {
      gap: 8px;
      flex-direction: column;

      button {
        // font-size: 16px;
      }
    }
  }
`
