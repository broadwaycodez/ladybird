import React from 'react'
import './Main.css'
import Home from '../Home/Home';
import Blurb from '../Blurb/Blurb'

const Main = props => {
  return (
    <div className="Main">
      <div id="home" className="page-section">
        <Home />
        <div className="sticky-side">
          <img src="/assets/ladybird-interior/ladybird-interior-picture.png" alt="Ladybird interior" />
        </div>
      </div>
      <div className="page-section">
        <Blurb />
        <div className="sticky-side">
          <img src="/assets/kale-salad/kalesalad.png" alt="Kale Salad" />
        </div>
      </div>
      <div id="menus" className="page-section">
        <div className="sticky-side"></div>
        {/* <Menus /> */}
      </div>
      <div id="about" className="page-section">
        {/* <About /> */}
        <div className="sticky-side"></div>
      </div>
      <div className="full-screen-image"></div>
      <div id="events" className="page-section">
        <div className="sticky-side"></div>
        {/* <Events /> */}
      </div>
      <div id="contact" className="page-section">
        {/* <Contact /> */}
        <div className="sticky-side"></div>
      </div>
    </div>
  )
}

export default Main