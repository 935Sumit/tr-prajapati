

import React from 'react'
import Companies from "./Companies/Companies";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Residencies from "./Residencies/Residencies";
import Value from "./Value/Value";
import Header from './Header/Header'
import Footer from './Footer/Footer'


const Home = () => {
  return (<>
    <Header/>
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Hero />
    </div>    
    <Companies />
    <Residencies/>
    <Value/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default Home