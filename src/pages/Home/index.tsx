import { About } from "../../components/About"
import { CTA } from "../../components/CTA"
import { Features } from "../../components/Features"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Princing } from "../../components/Pricing"
import { Product } from "../../components/Product"
import { Testonials } from "../../components/Testimonials"
import { Trusted } from "../../components/Trusted"
import { Works } from "../../components/Works"

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
