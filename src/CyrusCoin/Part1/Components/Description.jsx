import React from 'react'
import shape from '../../images/Path 519.png'

export default function Description() {
  return (
    <div className="Cyrus-description-container" id='description'>
        <div className="Cyrus-description">
          <p className="Cyrus-description-text">
            CyrusCoin is universal currency and payment <br />
            tool but it also provides opportunities for <br />
            people to take advantage of their own <br />
            innovations and new projects . Cyrus Coin is <br />
            supported by a great technical team with a <br />
            wide range of commerical skills . it is unique <br />
            decentralized system for joint decision making <br />
            between the lead team , project representatives <br />
            and all investors as well as owners of the <br />
            currency
          </p>
          <img
            src={shape}
            alt=""
            className="Cyrus-description-shape"
          />
        </div>
        <div className="Whats-cyrus">
          <h1>
            Whats <br />
            Cyrus Coin
          </h1>
          <a href="#"> Learn More </a>
        </div>
      </div>
  )
}
