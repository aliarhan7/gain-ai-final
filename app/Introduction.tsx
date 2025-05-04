import React from 'react'
import Header from "./components/Header"
import Intro from "./components/Intro"


const Introduction = () => {
  return (
    <div>
     <Header
        brand="GainAi"
        navLinks={["Homepage","Pricing", "About"]}
        buttonText="Sign In"
      />
     <Intro/>

    </div>
  )
}

export default Introduction
