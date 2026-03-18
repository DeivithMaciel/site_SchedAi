import { useRef, useState, useEffect } from 'react'

import { PrimaryButton } from '../../styles/GlobalStyles'
import { HeaderStyle } from './styles'

import logo from '../../assets/gifs/logo.gif'

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        setShowHeader(true)
        lastScrollY.current = currentScrollY
        return
      }

      if (currentScrollY > lastScrollY.current) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <HeaderStyle className={`${showHeader ? 'show' : 'hide'}`}>
      <section className="container">
        <div>
          <h1>SchedAi</h1>
          <img src={logo} />
        </div>
        <ul>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#ai">AI</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <PrimaryButton>Free Trial</PrimaryButton>
      </section>
    </HeaderStyle>
  )
}
