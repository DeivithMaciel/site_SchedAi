import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  background-color: ${colors.darkGray};
  padding: 16px;

  section {
    text-align: center;
  }

  h1 {
    font-size: 36px;
  }

  img {
    height: 36px;
    padding-left: 8px;
  }

  .icons {
    display: flex;
    justify-content: center;

    a {
      color: ${colors.gray};
      transition: transform 0.3s ease;
      padding: 8px;
      border-radius: 16px;

      &:hover {
        filter: brightness(1.2);
        transform: translateY(-6px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      }
    }
  }
`
