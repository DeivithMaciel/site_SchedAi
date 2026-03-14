import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const HeaderStyle = styled.header`
  background-color: ${colors.black};
  padding: 16px 0;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  transition: transform 0.3s ease-in-out;

  &.show {
    transform: translateY(0);
  }
  &.hide {
    transform: translateY(-100%);
  }

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
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      }
    }
  }

  ul {
    display: flex;
    padding-left: 0;

    li {
      padding: 16px;
      border-radius: 8px;

      &:hover {
        background-color: ${colors.darkBlack};
      }
      a {
        color: ${colors.gray};
        text-decoration: none;
        font-size: 18px;

      }
    }
  }
`
