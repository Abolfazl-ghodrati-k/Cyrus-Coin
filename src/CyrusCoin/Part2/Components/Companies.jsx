import React from 'react'
import leftDots from '../../images/coin/Repeat Grid 12.png'
import ducat from '../../images/coin/DUCAT-bank-4-1024x1024.png'
import npb from '../../images/coin/WhatsApp Image 2021-08-20 at 10.22.15.jpeg.png'
import sazeh from '../../images/coin/WhatsApp Image 2021-08-19 at 14.57.34.jpeg.png'
import lac from '../../images/coin/3bf4a31b-c4a1-4bce-8a56-fda1e0fea535.png'
import ocp from '../../images/coin/c2c8419c-d9c1-4715-b88b-3c1d6317f6f7.png'
import nika from '../../images/coin/778cbc8c-acc4-4982-9e25-98b0327822d6.png.png'
import sadr from '../../images/coin/be4242e6-1b66-49e2-8f48-253c5be3a21c.jpg.png'
import r from '../../images/coin/2083b999-ff0c-42f9-b1ec-dc029618f9f0.png'
import goz from '../../images/coin/73dd5005-01e8-486f-acdc-ca7f17a41ac1.png'
import gang from '../../images/coin/Untitled-112_copy.png'

export default function Companies() {
  return (
    <div className="Companies-container" id='companies'>
        <div className="Companies-title">
          <img className="left-dots" src={leftDots}/>
          <h1>Supported By</h1>
          <img className="right-dots"  src={leftDots} />
        </div>

        <div className="Comanies-p1">
          <img
            className="ducat"
            src={ducat}
            alt=""
          />
          <img
            className="nbp"
            src={npb}
            alt=""
          />
          <img
            className="sazeh"
            src={sazeh}
            alt=""
          />
          <div className="fmc">
            <div className="fmc-logo">
              <p>F</p>
              <p>M</p>
              <p>C</p>
            </div>
            <div className="fmc-name">Faraz Machine Co.</div>
          </div>
          <img
            className="lac"
            src={lac}
            alt=""
          />
        </div>

        <div className="Companies-p2">
          <img
            className="ocp"
            src={ocp}
            alt=""
          />
          <img
            className="nika"
            src={nika}
            alt=""
          />
          <div className="sadr">
            <img
              src={sadr}
              alt=""
            />
            <p>SADR FOULAD CO.</p>
          </div>
          <img
            className="r"
            src={r}
            alt=""
          />
        </div>

        <div className="Companies-p3">
          <img
            src={goz}
            alt=""
          />
          <img src={gang} alt="" />
        </div>
    </div>
  )
}
