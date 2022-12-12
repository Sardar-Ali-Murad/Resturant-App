import React from 'react'
import Pic1 from "./images/food-3.png"
import Pic2 from "./images/food-4.png"
import Pic3 from "./images/food-5.png"
import Rating from '@mui/material/Rating';
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn} from "../utils/frameMotion"





const Special = () => {
  return (
    <div className='div-center-80 grid-even-3 main-div-margins special-main' style={{marginTop:"300px"}}>
      
      <motion.div  initial="hidden" whileInView="show" variants={slideIn('right', 'tween', .2, 1)}   className='special-div '>
         <img src={Pic1}/>
         <div className='content-div'>

         <h1>Sweet Potato <br/> Fries Bow</h1>
         <h3 className='green'>$18</h3>
        <Rating className='green' name="size-large" defaultValue={2} size="large" />
        <p>These Sweet Potato Fries bowl are a glorious, messy plate of goodness. Crispy sweet potato fries loaded with lots of fresh summer vegetables and a lime ranch. By adding a seasoning blend with chipotle powder, garlic, and onion, these spicy sweet potato fries are full of flavor. </p>
         </div>
      </motion.div>

      <motion.div  initial="hidden" whileInView="show" variants={slideIn('right', 'tween', .5, 1)}   className='special-div'>
      <img src={Pic2}/>
      <div  className='content-div'>
         <h1>Vegan Salad  bowl </h1>
         <h3 className='green'>$18 </h3>
        <Rating className='green' name="size-large" defaultValue={4} size="large" />
        <p>Vegan salad bowl are immensely satisfying with any combination of whole grains, pulses, noodles, raw or cooked fruits, and veggies all topped off with a delicious sauce or dressing – each bite is an explosion of flavors and textures.  </p>
      </div>
      </motion.div>

      <motion.div  initial="hidden" whileInView="show" variants={slideIn('right', 'tween', .7, 1)}  >
        <h1>Our Specials</h1>
         <p>All of our food is prepared daily at our restaurants to ensure the highest quality, freshest meals are delivered to our customers</p>
         <h3 className='app-btn'>Book Table</h3>
      </motion.div>

    </div>
  )
}

export default Special
