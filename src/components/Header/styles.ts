import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const HeaderStyle = styled.header`
  background-color: ${colors.black};
  padding: 16px 0;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    h1 {
      font-size: 36px;
    }

    img {
      height: 36px;
    }
  }

  ul {
    display: flex;
    list-style: none;
    padding-left: 0;

    li {
      padding: 16px;

      a {
        color: ${colors.gray};
        text-decoration: none;
        font-size: 18px;
      }
    }
  }

  button {
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
  }
`
