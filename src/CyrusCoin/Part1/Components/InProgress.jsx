import React from 'react'
import Dots from '../../Components/Dots'
import ShapeTop from '../../images/Path 518.png'
import ShapeBottom from '../../images/Path 517.png'
export default function InProgress() {
  return (
    <div className="Inprogress-container" id='progress'>
        <div className="Inprogress-title">
          <Dots />
          <h1>
            in progress <br />
            projects
          </h1>
        </div>
        <div className="Inprogress-desc-container">
          <img
            src={ShapeTop}
            alt=""
            className="Inprogress-desc-shape-top"
          />
          <div className="Inprogress-desc-container-main">
            <div className="Inprogress-desc-part1">
              <h3 style={{textAlign: 'center'}}>DEX</h3>
              <hr style={{marginTop: 10 ,marginBottom: 10 ,marginLeft:0 ,marginRight:0 }}/>
              <p>
                What do you think about Dex ?! <br />
                Decentralized exchange that you <br />
                can safely and without kyc make <br />
                your purchase and sale through <br />
                your wallet. We offer this section <br />
                exclusively for you to do your <br />
                activities faster and in a safe <br />
                environment.
              </p>
            </div>
            <div className="Inprogress-desc-part2">
              <h3 style={{textAlign: 'center'}}>ExChange</h3>
              <hr style={{marginTop: 10 ,marginBottom: 10 ,marginLeft:0 ,marginRight:0 }} />
              <p>
                In our platform, we provide <br />
                opportunities to make a list of <br />
                your orders and buy and sell your<br />
                favorite cryptocurrencies <br />
                especially Cyrus token in the <br />
                fastest way, so you don't need to <br />
                deal with the other exchanges. <br />
                We will make it all.<br />
              </p>
            </div>
            <div className="Inprogress-desc-part3">
              <h3 style={{textAlign: 'center'}}>Signal Project</h3>
              <hr style={{marginTop: 10 ,marginBottom: 10 ,marginLeft:0 ,marginRight:0 }} />
              <p>
                In the Signal project, we are going <br />
                beyond Cyrus! You can imagine a <br />
                community of traders who <br />
                introduce their Signals, discuss <br />
                with each other and share their <br />
                digital trading activities .<br />
              </p>
            </div>
          </div>
          <img
            className="Inprogress-desc-shape-bottom"
            src={ShapeBottom}
            alt=""
          />
        </div>
      </div>
  )
}
