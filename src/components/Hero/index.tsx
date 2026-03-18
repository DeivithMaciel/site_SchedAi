import { PrimaryButton, SecondaryButton } from "../../styles/GlobalStyles"

import * as S from './styles'

import image from '../../assets/images/image.about.png'

export const Hero = () => {
  return (
    <S.Container>
      <section className="container">
        <S.Content>
          <h2>Let AI manage your meetings automatically</h2>
          <p>
            Stop wasting time managing your calendar. Let AI find the perfect
            time for every meeting.
          </p>
          <div>
            <PrimaryButton>Start Free</PrimaryButton>
            <SecondaryButton>Watch Demo</SecondaryButton>
          </div>
        </S.Content>
        <img src={image}/>
      </section>
    </S.Container>
  )
}
