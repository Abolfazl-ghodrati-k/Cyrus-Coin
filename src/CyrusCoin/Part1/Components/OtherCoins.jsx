import React from 'react'
import img1 from '../../images/binance-coin-bnb-logo.png'
import img2 from '../../images/pancakeswap-cake-logo.png'
import img3 from '../../images/image-09-428x428.png'
export default function OtherCoins() {
  return (
    <div className="Other-coins">
        <img
          src={img1}
          style={{height: 60,width: 60, marginRight: 28}}
          alt=""
        />
        <img
          src={img2}
          style={{height: 60,width: 60, marginRight: 28}}
          alt=""
        />
        <img
          src={img3}
          style={{height: 60,width: 60, marginRight: 28}}
          alt=""
        />
    </div>
  )
}
