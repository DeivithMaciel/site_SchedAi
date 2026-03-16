import { Facebook, Instagram, Mail, Twitter } from 'lucide-react'

import logo from '../../assets/gifs/logo.gif'

export const Footer = () => (
  <div>
    <section className="container">
      <h1>SchedAi<img src={logo}/></h1>
      <div className="icons">
            <a
              href="https://instagram.com/deivith_a_maciel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={36} />
            </a>

            <a href="#">
              <Facebook size={36} />
            </a>

            <a href="tel:+5551981458704">
              <Twitter size={36} />
            </a>

            <a href="mailto:deivithfagundes@gmail.com">
              <Mail size={36} />
            </a>
          </div>
    </section>
    <span>&copy;{new Date().getFullYear()} SchedAI all rights reserved</span>
  </div>
)
