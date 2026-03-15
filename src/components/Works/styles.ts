import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  display: flex;
  text-align: center;
  padding-bottom: 48px;

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
`
