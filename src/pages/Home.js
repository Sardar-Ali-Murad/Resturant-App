import React from 'react'
import {Header,Flavor,Contact,Special,Top,Discount,Together,Events,Food,Customer,NewsLetter, Footer}  from "../components/index"


const Home = () => {
  return (
    <div style={{overflowX:"hidden"}}>
        
        <Flavor/>
        <Contact/>
        <Special/>
        <Top/>
       <Discount/>
      <Together/>
      <Events/>
      <Food/>
      <Customer/>
      <NewsLetter/>
    
    </div>
  )
}

export default Home
