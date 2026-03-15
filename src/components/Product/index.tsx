import image from '../../assets/images/preview.png'

export const Product = () => (
  <div>
    <section className="container">
      <span>Product Preview</span>
      <h2>Take control of your schedule.</h2>
      <h4>
        Manage meetings, track availability, and let AI organize your calendar
        automatically.
      </h4>
    </section>
    <div>
      <ul>
        <li>
          <h3>AI-powered scheduling</h3>
          <p>Our system analyzes your availability and suggests the best meeting times.</p>
        </li>
        <li>
          <h3>Smart conflict detection</h3>
          <p>Avoid double bookings and scheduling mistakes automatically.</p>
        </li>
        <li>
          <h3>Real-time calendar view</h3>
          <p>See all your meetings and updates in one simple dashboard.</p>
        </li>
      </ul>
    </div>
    <img src={image}/>
  </div>
)
