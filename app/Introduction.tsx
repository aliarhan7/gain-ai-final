import React from 'react'
import Header from "./components/Header"
import Intro from "./components/Intro"
import About from "./components/About"
import Subscription from './components/Subscription'

const Introduction = () => {
  return (
    <div className='flex flex-col'>
     <Header
        brand="GainAi"
        navLinks={["Homepage","Pricing", "About"]}
        buttonText="Sign In"
      />
     <Intro/>
     <div className='flex justify-center w-70vw'>
     <About/>
     
     </div>
     <Subscription/>
    </div>
  )
}

export default Introduction
