import React from 'react'
import income from '../../images/1322818.png'
import noteBook from '../../images/notebook-pen.png'
import coin from '../../images/coin/pp.jpg.png'
import investment from '../../images/coin/140-1409239_investment-flat-icon-investment-icon-clipart.png'
import binance from '../../images/coin/Binance-Coin-BNB-icon.png'
import ada from '../../images/coin/3305878.png'
import tether from '../../images/coin/tether-usdt-logo.png'
import factory from '../../images/coin/1870459-200.png'
import Dots from '../../Components/Dots'

export default function Actions() {
  return (
    <div className="Action-container" id='actions'>
        <div className="Actions">
          <div className="recieve">
            <div className="note-img-container">
              <img className="note-img" src={noteBook} alt="" />
            </div>
            <p className="recieve-profit">Recieve profit</p>
            <div className="income-img-container">
              <img className="income-img" src={income} alt="" />
            </div>
          </div>

          <div className="register">
            <p className="register-text">register</p>
            <img className="coin-img" src={coin} alt="" />
            <p className="investing-text">
              Investing in economic <br />
              industries and trading
            </p>
          </div>

          <div className="stacking">
            <div className="investment-img-container">
              <img
                className="investment-img"
                src={investment}
                alt=""
              />
            </div>
            <p className="stacking-text">Staking</p>
            <div className="factory-img-container">
              <img className="factory-img" src={factory}/>
            </div>
          </div>
        </div>
        <div className="Learn-more-container">
          <div className="Learn-more">
            <div className="Learn-more-title">
              <h2>
                Stacking <br />
                Step
              </h2>
            </div>
            <button className="Learn-more-btn">Learn More</button>
            <div className="Learn-more-cryto">
              <div className="binance">
                <img src={binance} />
                <p>BNB</p>
              </div>
              <div className="ada">
                <img src={ada} />
                <p>ADA</p>
              </div>
              <div className="tether">
                <img src={tether} />
                <p>USDT</p>
              </div>
            </div>
          </div>
          <Dots />
        </div>
      </div>
  )
}
