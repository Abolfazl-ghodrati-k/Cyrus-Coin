import{ React ,useState} from 'react'
import companyLogo from '../images/pp.jpg.png'


export default function Navbar() {
   const [Active, setActive] = useState(false)
  function classchange(){
    setActive((Active)=> Active = !Active)
    console.log(Active);
  }
  function Close(){
    setTimeout(()=>classchange(),500)
  }
  return (
    <div className='nav-container'>
      <nav className="navbar">
      <div className="navbar-title">
        <div className="nav-title">
          <img src={companyLogo} alt="" />
          <p>Cyrus Coin</p>
        </div>
        <div className="nav-toggler" onClick={()=>classchange()}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <div className={`navbar-link ${Active? "active" : ''} ` } id="navbar-link">
        <ul  onClick={Close}>
          <li className="links"><a href='#welcome'>Home</a></li>
          <li className="links"><a href='#description'>Whats CyrusCoin</a></li>
          <li className="links"><a href='#'>Learn More</a></li>
          <li className="links"><a href='#progress'>Project Progress</a></li>
          <li className="links"><a href='#actions'>Stacking</a></li>
          <li className="links"><a href='#social'>Social Media</a></li>
          <li className="links"><a href='#companies'>Supported By</a></li>
          <li className="links"><a href='#contact'>Contact Us</a></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}
