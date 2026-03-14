import { Container } from './styles'

export const About = () => (
  <Container>
    <section className="container">
      <span>About Us</span>
      <h2>The future of intelligent scheduling</h2>
      <p>
        Our platform uses artificial intelligence to simplify scheduling for
        professionals and teams. By automatically analyzing availability,
        avoiding conflicts, and organizing meetings, it helps you save time and
        focus on what truly matters. An AI-powered scheduling platform designed
        to help professionals and teams manage meetings effortlessly.
      </p>
      <ul>
        <li>
          <p>10,000+</p>
          <br />
          Active Users
        </li>
        <li>
          <p>250K+</p>
          <br />
          Meetings Scheduled
        </li>
        <li>
          <p>40%</p>
          <br />
          Time Saved
        </li>
        <li>
          <p>Used in 40+</p>
          <br />
          Countries
        </li>
      </ul>
    </section>
  </Container>
)
