import React from 'react'
import Hero from '../Components/Hero'
import Feature from "../Components/Features"
import PortfolioCarousel from '../Components/PortfolioCarousel'
import StatsSection from '../Components/StatsSection'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Feature/>
        <PortfolioCarousel/>
        <StatsSection/>

    </div>
  )
}

export default Home