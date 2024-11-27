import React from 'react'
import Hero from './Hero'
import Categories from './Categories'
import BraggingRights from './BraggingRights'
import Faqs from './Faqs'
import SubHero from './SubHero'
import WhyChooseVendue from './WhyChooseVendue'

const HomeLandingPage = () => {
  return (
    <div>

    <Hero/>
    <WhyChooseVendue/>
    <Categories />
      <BraggingRights />
      <Faqs />
      <SubHero />


    </div>
  )
}

export default HomeLandingPage