import { Facebook, Instagram, Mail, Twitter } from 'lucide-react'

import { Container } from './styles'

import logo from '../../assets/gifs/logo.gif'

export const Footer = () => (
  <Container>
    <section className="container">
      <h1>SchedAi<img src={logo}/></h1>
      <div className="icons">
            <a
              href="https://instagram.com/deivith_a_maciel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={48} />
            </a>

            <a href="#">
              <Facebook size={48} />
            </a>

            <a href="#">
              <Twitter size={48} />
            </a>

            <a href="mailto:deivithfagundes@gmail.com">
              <Mail size={48} />
            </a>
          </div>
    </section>
    <span>&copy;{new Date().getFullYear()} SchedAI all rights reserved</span>
  </Container >
)
