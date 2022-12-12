import React from 'react'

import Pic1 from "./images/food-5.png"
import Pic2 from "./images/food-6.png"
import Pic3 from "./images/food-7.png"
import Rating from '@mui/material/Rating';
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn,zoomIn } from "../utils/frameMotion"



const Top = () => {
  return (
    <div className='div-center-80 main-div-margins'>
      <h1>Top Dishes </h1>

      <div className='grid-20'>

      <motion.div  initial="hidden" whileInView="show" variants={zoomIn(.3,1)}  style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </motion.div>
      <motion.div  initial="hidden" whileInView="show" variants={zoomIn(.5,1)}  style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </motion.div>
      <motion.div  initial="hidden" whileInView="show" variants={zoomIn(.7,1)}  style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </motion.div>


     

   
      </div>
       
    </div>
  )
}

export default Top
