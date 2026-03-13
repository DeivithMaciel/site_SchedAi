import * as S from './styles'

import logo from '../../assets/gifs/logo.gif'

export const Header = () => {
  return (
    <S.HeaderStyle>
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
        <S.Button>Free Trial</S.Button>
      </section>
    </S.HeaderStyle>
  )
}
