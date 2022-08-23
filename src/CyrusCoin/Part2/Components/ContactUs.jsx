import React from 'react'
import Dots from '../../Components/Dots'

export default function ContactUs() {
  return (
    <div className="Contact-container" id='contact'>
        <div className="Contact-title-container">
          <Dots />
          <div className="Contact-title">
            <h1>Contact Us</h1>
            <br />

            <p>
              Feel Free To Contact Us Any Time . We Will get back to you as soon
              as we can!
            </p>
          </div>
        </div>

        <div className="form-container">
          <form className="form">
            <input className="username" type="text" placeholder="Name" />
            <input className="password" type="text" placeholder="Email address" />
            <textarea className="message" placeholder="Message"></textarea>
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
  )
}
