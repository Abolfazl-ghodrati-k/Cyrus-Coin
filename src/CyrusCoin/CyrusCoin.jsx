import React from 'react'
import Navbar from './Components/Navbar'
import './Css/Navbar.css'
import './Css/Actions.css'
import './Css/Companies.css'
import './Css/ContactUs.css'
import './Css/Desc.css'
import './Css/footer.css'
import './Css/Inprogress.css'
import './Css/Othercoins.css'
import './Css/SocialMedia.css'
import './Css/Welcome.css'
import './Css/style.css'
import Section1 from './Part1/Section1'
import Section2 from './Part2/Section2'
import Footer from './Components/Footer'
export default function CyrusCoin() {
  return (
    <div className='cyrus-app'>
        <Navbar />
        <Section1 />
        <Section2 />
        <Footer />
    </div>
  )
}
