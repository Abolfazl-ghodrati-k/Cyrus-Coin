import React from 'react'
import Actions from './Components/Actions'
import Companies from './Components/Companies'
import ContactUs from './Components/ContactUs'
import SocialMedia from './Components/SocialMedia'

export default function Section2() {
  return (
    <section className='p2'>
        <Actions />
        <Companies />
        <SocialMedia />
        <ContactUs />
    </section>
  )
}
