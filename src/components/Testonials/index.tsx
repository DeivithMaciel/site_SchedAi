import image1 from '../../assets/images/client.1.png'
import image2 from '../../assets/images/client.2.png'
import image3 from '../../assets/images/client.3.png'
import { Container } from './styles'

export const Testonials = () => (
  <Container>
    <section className="container">
      <h5>What users say</h5>
      <h2>Trusted by thousands of professionals</h2>
      <ul>
        <li>
          <img src={image1}/>
          <h3>Freelance Consultant</h3>
          <p>“The AI scheduling feature is incredible. I can focus on my work instead of managing my calendar.”</p>
          <span>- Gabriel Santos</span>
        </li>
        <li>
          <img src={image2}/>
          <h3>Product Manager</h3>
          <p>“SchedAI completely changed the way I manage my meetings. The AI suggestions save me hours every week.”</p>
          <span>- Sarah Mitchell</span>
        </li>
        <li>
          <img src={image3}/>
          <h3>Startup Founder</h3>
          <p>“Scheduling used to be a mess for our team. Now everything is organized automatically.”</p>
          <span>- David Kim</span>
        </li>
      </ul>
    </section>
  </Container>
)
