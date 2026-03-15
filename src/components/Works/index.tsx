import { Container } from "./styles";

export const Works = () => (
  <Container>
    <section className="container">
      <h5>How it Works</h5>
      <h2>
        SchedAI uses artificial intelligence to organize your schedule and
        eliminate the hassle of manual booking.
      </h2>
      <ul>
        <li>
          <span>1</span>
          <h3>Connect your calendar</h3>
          <p>Sync your calendar in seconds and let SchedAI analyze your availability.</p>
        </li>
        <li>
          <span>2</span>
          <h3>Let AI optimize your schedule</h3>
          <p>Our AI finds the best time for every meeting and automatically prevents conflicts.</p>
        </li>
        <li>
          <span>3</span>
          <h3>Share your booking link</h3>
          <p>Send your booking link and let clients schedule meetings instantly.</p>
        </li>
      </ul>
    </section>
  </Container>
)
