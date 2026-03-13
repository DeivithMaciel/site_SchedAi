import { PrimaryButton } from "../../styles/GlobalStyles"

import { HeaderStyle } from "./styles"

import logo from '../../assets/gifs/logo.gif'

export const Header = () => {
  return (
    <HeaderStyle>
      <section className="container">
        <div>
          <h1>SchedAi</h1>
          <img src={logo} />
        </div>
        <ul>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="ai">AI</a>
          </li>
          <li>
            <a href="pricing">Pricing</a>
          </li>
          <li>
            <a href="testimonials">Testimonials</a>
          </li>
        </ul>
        <PrimaryButton>Free Trial</PrimaryButton>
      </section>
    </HeaderStyle>
  )
}
