import { About } from "../../components/About"
import { Features } from "../../components/Features"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Trusted } from "../../components/Trusted"

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Trusted />
      <About />
      <Features />
    </>
  )
}
