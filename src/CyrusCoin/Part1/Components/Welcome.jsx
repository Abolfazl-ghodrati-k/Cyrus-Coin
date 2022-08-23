import React from 'react'
import Dots from '../../Components/Dots'
import welcomeImg from '../../images/Group 1.png'

export default function Welcome() {
  return (
    <div className="welcome-container" id='welcome'>
        <div className="welcome-text">
          <Dots />
          <div className="text">
            <p>
              Welcome To The <br />
              CyrusCoin Official <br />
              Website
            </p>
          </div>
          <a className="welcome-button">Whats CyrusCoin</a>
        </div>

        <img src={welcomeImg} alt="" className="welcome-img" />
      </div>
  )
}
