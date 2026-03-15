import { About } from "../../components/About"
import { Features } from "../../components/Features"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
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
    </>
  )
}
