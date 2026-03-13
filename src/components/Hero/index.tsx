import { Button } from "../Header/styles"

import image from '../../assets/images/image.about.png'

export const Hero = () => {
  return (
    <div>
      <section className="container">
        <div>
          <h2>Let AI schedule your meetings</h2>
          <p>
            Stop wasting time managing your calendar. Let AI find the perfect
            time for every meeting.
          </p>
          <div>
            <Button>Start Free</Button>
            <Button>Watch Demo</Button>
          </div>
        </div>
        <img src={image}/>
      </section>
    </div>
  )
}
