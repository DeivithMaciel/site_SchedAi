import styled from "styled-components";
import { breakpoints } from "../../styles/GlobalStyles";

export const Container = styled.div`
  margin-top: 200px;
  padding-bottom: 48px;

  section {
    display: flex;
    gap: 128px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    section {
      gap: 32px;
    }

    img {
      height: 85%;
      // width: 90%;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h2 {
    font-size: 48px;
    }

    p {
      font-size: 24px;
      line-height: 36px;
      padding-bottom: 36px;
  }

  button {
    margin-right: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    h2 {
      font-size: 36px;
    }

    p {
      font-size: 18px;
    }
  }
`
