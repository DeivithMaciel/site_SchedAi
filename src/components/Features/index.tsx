import { Container } from "./styles";

import mind from '../../assets/gifs/mind.gif'
import timer from '../../assets/gifs/timer.gif'
import notification from '../../assets/gifs/notification.gif'
import analytics from '../../assets/gifs/analytics.gif'

export const Features = () => (
  <Container>
    <section className="container">
      <h5>Features</h5>
      <h2>Smart features built for productivity</h2>
      <ul>
        <li>
          <img src={mind}/><h3> AI Smart Scheduling</h3>
          <p>Our AI analyzes your availability and automatically suggests the best time for meetings.</p>
        </li>
        <li>
          <img src={timer}/><h3>Conflict Detection</h3>
          <p>Instantly detect scheduling conflicts and avoid double bookings with intelligent calendar management.</p>
        </li>
        <li>
          <img src={notification}/><h3>Automated Reminders</h3>
          <p>Send automatic email and notification reminders so no one misses an important meeting.</p>
        </li>
        <li>
          <img src={analytics}/><h3>Productivity Insights</h3>
          <p>Track your meetings and scheduling patterns to better understand how you spend your time.</p>
        </li>
      </ul>
    </section>
  </Container>
)
