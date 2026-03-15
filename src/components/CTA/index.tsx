import { PrimaryButton, SecondaryButton } from "../../styles/GlobalStyles";
import { Container } from "./styles";

export const CTA = () => (
  <Container>
    <section className="container">
      <h2>Take control of your meetings with AI</h2>
      <p>Join thousands of professionals already using SchedAI to organize meetings and save valuable time.</p>
      <div className="buttons">
        <PrimaryButton>Start Free Trial</PrimaryButton>
        <SecondaryButton>Watch Demo</SecondaryButton>
      </div>
    </section>
  </Container>
)
