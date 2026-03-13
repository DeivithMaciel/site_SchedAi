import * as S from './styles'

import bird from '../../assets/images/logos/bird.png'
import cycle from '../../assets/images/logos/cycle.png'
import triangules from '../../assets/images/logos/triangules.png'
import face from '../../assets/images/logos/face.png'
import vs from '../../assets/images/logos/vs.png'

export const Trusted = () => {
  return (
    <S.container>
      <section className="container">
        <h2>Trusted by 5,000+ teams worldwide</h2>
        <S.LogoList>
          <li>
            <img src={bird}/>
            <span>Winglify</span>
          </li>
          <li>
            <img src={cycle}/>
            <span>TriNova</span>
          </li>
          <li>
            <img src={triangules}/>
            <span>DualPeak</span>
          </li>
          <li>
            <img src={face}/>
            <span>SmileDesk</span>
          </li>
          <li>
            <img src={vs}/>
            <span>VectorSync</span>
          </li>
        </S.LogoList>
        <h2>And More</h2>
      </section>
    </S.container>
  )
}
