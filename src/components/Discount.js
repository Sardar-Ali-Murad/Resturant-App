import React from 'react'
import Food1 from "./images/food-1.png"
import Food2 from "./images/food-2.png"
import Food3 from "./images/food-3.png"
import Rating from '@mui/material/Rating';
import Gip from "./images/discount-illustration.png"
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn,zoomIn } from "../utils/frameMotion"



const Discount = () => {
  return (

      <div   className='discount-main div-center-90  main-div-margins'>
        <img src={Gip} className="gif"/>
      <div className='img1'>
        <img className='img' src={Food1}/>
      </div>
      <div className='img2'>
        <img className='img' src={Food2}/>
      </div>
      <div className='temp-img img3'>
        <img className='img' src={Food3}/>
      </div>
      <div className='cont'>
        <h3 className='green'>20% OFF</h3>
        <h3>Demo Dish For Discount</h3>
        <div className="discount-flex"><h2 className='underline'>$45</h2><h2 className='green'>$30</h2></div>
        <Rating className='green' name="size-large" defaultValue={4} size="large" />
        <a className='app-btn roboto'>book a table</a>
      </div>

    </div>

  )
}

export default Discount
