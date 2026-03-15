import { PrimaryButton } from '../../styles/GlobalStyles'
import { Container } from './styles'

export const Princing = () => (
  <Container>
    <section className="container">
      <h5>Plicing</h5>
      <h2>Flexible plans for professionals and teams</h2>
      <h3>Start for free and upgrade as your scheduling needs grow.</h3>
      <ul>
        <li>
          <h4>Free</h4>
          <span>$0/month</span>
          <i>Features</i>
          <div className='features'>
            <p>- Basic scheduling</p>
            <p>- Limited AI suggestions</p>
            <p>- Email reminders</p>
            <p>- Up to 5 meetings per week</p>
          </div>
          <PrimaryButton>Start Free trial</PrimaryButton>
        </li>
        <li className='pro'>
          <h4>Pro⭐</h4>
          <span>$15/month</span>
          <i>Features</i>
          <div className='features'>
            <p>- Full AI scheduling</p>
            <p>- Conflict detection</p>
            <p>- Unlimited meetings</p>
            <p>- Smart reminders</p>
            <p>- Productivity analytics</p>
          </div>
          <PrimaryButton>Start Free trial</PrimaryButton>
        </li>
        <li>
          <h4>Team</h4>
          <span>$39/month</span>
          <i>Features</i>
          <div className='features'>
            <p>- Multi-user access</p>
            <p>- Shared calendars</p>
            <p>- Team analytics</p>
            <p>- Priority support</p>
            <p>- Advanced AI scheduling</p>
          </div>
          <PrimaryButton>Start Free trial</PrimaryButton>
        </li>
      </ul>
    </section>
  </Container>
)
