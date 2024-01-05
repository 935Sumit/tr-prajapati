

import React from 'react'
import Companies from "./Companies/Companies";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Residencies from "./Residencies/Residencies";
import Value from "./Value/Value";
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ScrollUpTransition from './ScrollUpTransition/ScrollUpTransition';


const Home = () => {
  return (<>
    <Header/>
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Hero />
    </div>  
    <ScrollUpTransition> 
      <Companies />
    </ScrollUpTransition> 

     <Residencies/>

    <ScrollUpTransition>
      <Value/>
    </ScrollUpTransition>  

    <ScrollUpTransition> 
     <Contact/>
    </ScrollUpTransition>
   
   
    <Footer/>
    </div>
    </>
  )
}

export default Home