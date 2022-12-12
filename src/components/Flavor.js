import React from 'react'
import Food1 from "./images/food-1.png"
import Food2 from "./images/food-2.png"
import Food3 from "./images/food-3.png"
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn} from "../utils/frameMotion"

const Flavor = () => {
  return (
    <div className='div-center-80 grid-even-2 main-div-margins flavor-main'>

      <motion.div  initial="hidden" whileInView="show" variants={slideIn('left', 'tween', .3, 1)}  className='menu-content'>
        <h1>The flavor of <br/> tradition</h1>
        <p>We are a multi-cuisine restaurant offering a wide variety of food experience in both casual and fine dining environment. </p>
        <div className='flex'>
            <a className='app-btn roboto'>Explore Menu</a>
            <h3 className='green'>Book a Table</h3>
        </div>
      </motion.div>

      <motion.div  initial="hidden" whileInView="show" variants={slideIn('right', 'tween', .3, 1)}   className='menu-grid'>
        <div className='f1 f-div'>
          <img className=' f-img' src={Food1}/>
        </div>
        <div className=' f2 f-div'>
          <img className=' f-img' src={Food2}/>
        </div>
        <div className=' f3 f-div'>
          <img className=' f-img' src={Food3}/>
        </div>
      </motion.div>

    </div>
  )
}

export default Flavor
