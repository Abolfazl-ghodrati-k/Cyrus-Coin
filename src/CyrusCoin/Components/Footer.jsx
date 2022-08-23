import React from 'react'
import phone from '../images/footer/Layer 2.png'
import loc from '../images/footer/location-sign-svgrepo-com.png'
import mail from '../images/footer/iconmonstr-email-1 (1).png'

export default function Footer() {
  return (
    <footer>
    <div className="phone">
      <img src={phone} alt="" />
    </div>
    <div className="main-footer">
      <div className="phone-numb">+44-161-8840607</div>
      <div className="address">
        <img src={loc} alt="" />
        <p>
          Suite 72 Cariocca Business Park 2 Sawaley Road <br />
          Manchester Lancshire ENGELAND M40 8BB
        </p>
      </div>
      <div className="email">Info@Cyruscoin.Io</div>
    </div>
    <div className="mail">
      <img src={mail} alt="" />
    </div>
  </footer>
  )
}
