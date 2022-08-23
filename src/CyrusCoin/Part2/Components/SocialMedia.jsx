import React from 'react'
import insBG from '../../images/social/PngItem_210796.png'
import ins from '../../images/social/5010956-download-instagram-logo-icon-free-png-transparent-image-and-clipart-transparent-instagram-logo-400_400_preview.png'
import twittBG from '../../images/social/PngItem_210797.png'
import twitt from '../../images/social/free-twitter-logo-icon-2429-thumb.png'
import disBG from '../../images/social/PngItem_210798.png'
import dis from '../../images/social/Concours-discord-cartes-voeux-fortnite-france-6.png'
import telBG from '../../images/social/PngItem_210799.png'
import tel from '../../images/social/telegram-3-226554.png'
import linkBG from '../../images/social/PngItem_210800.png'
import link from '../../images/social/229082.png'
import redBG from '../../images/social/PngItem_210801.png'
import red from '../../images/social/free-reddit-logo-icon-2436-thumb.png'
import Dots from '../../Components/Dots'


export default function SocialMedia() {
  return (
    <div className="Social-media-container" id='social'>
        <div className="Social-apps-link">
          {/* <!--instagram--> */}
          <div className="instagram">
            <p>INSTAGRAM</p>
            <div>
              <img src={insBG} alt="" />
              <img
                src={ins}
                alt=""
              />
            </div>
          </div>
          {/* <!-- twitter --> */}
          <div className="twitter">
            <p>TWITTER</p>
            <div style={{position: 'relative'}}>
              <img src={twittBG} alt="" />
              <img
                src={twitt}
                alt=""
              />
            </div>
          </div>
          {/* <!--DISCORD--> */}
          <div className="discord">
            <p>Discord</p>
            <div>
              <img src={disBG} alt="" />
              <img
                src={dis}
                alt=""
              />
            </div>
          </div>
          {/* <!--TELEGRAM--> */}
          <div className="telegram">
            <p>Telegram</p>
            <div>
              <img src={telBG} alt="" />
              <img src={tel} alt="" />
            </div>
          </div>
          {/* <!--LINKDEN--> */}
          <div className="linkden">
            <p>Linkden</p>
            <div>
              <img src={linkBG} alt="" />
              <img src={link} alt="" />
            </div>
          </div>
          {/* <!--REDDIT--> */}
          <div className="reddit">
            <p>REDDIT</p>
            <div style={{position: 'relative'}}>
              <img src={redBG} alt="" />
              <img
                src={red}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="Social-title">
          <h1>
            Social <br />
            Media
          </h1>
          <Dots />
        </div>
      </div>
  )
}
