import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Trusted } from "../../components/Trusted"
import { About } from "../../components/About"
import { Features } from "../../components/Features"
import { Works } from "../../components/Works"
import { Product } from "../../components/Product"
import { Princing } from "../../components/Pricing"
import { Testonials } from "../../components/Testimonials"
import { CTA } from "../../components/CTA"
import { Footer } from "../../components/Footer"

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Trusted />
      <About />
      <Features />
      <Works />
      <Product />
      <Princing />
      <Testonials />
      <CTA />
      <Footer />
    </>
  )
}
