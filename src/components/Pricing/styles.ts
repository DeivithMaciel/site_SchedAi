import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Container = styled.div`
  background-color: ${colors.darkGray};
  text-align: center;
  padding: 64px 0;

  h5 {
    color: ${colors.green};
    font-size: 16px;
    margin: 0;
  }

  h2 {
    font-size: 48px;
  }

  h3 {
    font-size: 24px;
  }

  ul {
    display: flex;
    gap: 20%;
    padding: 48px 0 0 0;

    li {
      display: flex;
      flex-direction: column;
      width: 100%;
      border: 1px solid ${colors.gray};
      border-radius: 16px;
      padding: 24px;
      transition: transform 0.3s ease;

      &:hover {
        filter: brightness(1.2);
        transform: translateY(-6px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      }

      h4 {
        margin-top: 16px;
        font-size: 36px;
      }

      i {
        font-size: 18px;
        padding: 24px 0 8px;
      }

      p {
        margin: 0 0 16px;
        text-align: left;
      }

      button {
        margin: auto 0 8px
      }
    }
  }
`
