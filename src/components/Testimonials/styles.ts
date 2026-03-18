import styled from 'styled-components'
import { breakpoints, colors } from '../../styles/GlobalStyles'

export const Container = styled.div`
  padding: 96px 0;
  text-align: center;

  h5 {
    color: ${colors.green};
    font-size: 16px;
  }

  h2 {
    font-size: 36px;
    padding-bottom: 36px;
  }

  ul {
    display: flex;
    gap: 15%;
    justify-content: center;
    align-items: stretch;

    li {
      background-color: ${colors.darkGray};
      color: ${colors.gray};
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      // width: 100%;
      max-width: 100%;
      padding: 16px;
      transition: transform 0.3s ease;

      &:hover {
        filter: brightness(1.2);
        transform: translateY(-6px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      }

      img {
        height: 128px;
        width: 128px;
        border-radius: 50%;
      }

      h3 {
        font-size: 24px;
      }

      p {
        font-size: 18px;
        line-height: 24px;
      }

      span {
        margin: auto auto 8px 8px;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 36px;

    h2 {
      font-size: 32px;
    }

    ul {
      gap: 5%;
      padding: 0;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    ul {
      flex-direction: column;
      gap: 16px;
      justify-content: center;

      li {
        // width: 50%;
        // max-width: 100%;

        img {
          height: 84px;
          width: 84px;
        }
        h3 {
          font-size: 16px;
        }
        p {
          font-size: 12px;
          line-height: 16px;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
`
