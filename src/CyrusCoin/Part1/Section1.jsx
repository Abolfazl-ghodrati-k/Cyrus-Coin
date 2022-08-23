import React from 'react'
import Description from './Components/Description'
import Welcome from './Components/Welcome'
import OtherCoins from './Components/OtherCoins'
import InProgress from './Components/InProgress'

export default function Section1() {
  return (
    <section className='p1'>
       <Welcome />
       <Description />
       <OtherCoins />
       <InProgress />
    </section>
  )
}
