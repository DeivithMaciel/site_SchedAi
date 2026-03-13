import bird from '../../assets/images/logos/bird.png'
import cycle from '../../assets/images/logos/cycle.png'
import triangules from '../../assets/images/logos/triangules.png'
import face from '../../assets/images/logos/face.png'
import vs from '../../assets/images/logos/vs.png'
import what from '../../assets/images/logos/what.png'



export const Trusted = () => {
  return (
    <div>
      <section className="container">
        <h2>Trusted by 5,000+ teams worldwide</h2>
        <ul>
          <li>
            <img src={bird}/>
            <span>Winglify</span>
          </li>
          <li>
            <img src={cycle}/>
            <span>TriNova</span>
          </li>
          <li>
            <img src={triangules}/>
            <span>DualPeak</span>
          </li>
          <li>
            <img src={face}/>
            <span>SmileDesk</span>
          </li>
          <li>
            <img src={vs}/>
            <span>VectorSync</span>
          </li>
          <li>
            <img src={what}/>
            <span>WhatFlow</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
