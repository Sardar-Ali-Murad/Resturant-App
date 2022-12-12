import React from 'react'
import Img1 from "../components/images/ourStoryImg.png"
import Img2 from "../components/images/ourGoals_img1.png"
import Img3 from "../components/images/ourGoals_img2.png"
import Img4 from "../components/images/ourGoals_img3.png"
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn,zoomIn} from "../utils/frameMotion"

const About = () => {
  return (
    <div className='div-center-90 a-main' style={{overflow:"hidden"}}>
      {/*  */}
      <div className='grid-even-2 a-front main-div-margins'>

      <motion.div  initial="hidden" whileInView="show" variants={slideIn('left', 'tween', .3, 1)}  className='about-img'>
        <img src={Img1}/>
      </motion.div>

      <motion.div  initial="hidden" whileInView="show" variants={slideIn('right', 'tween', .3, 1)} className='about-content'>
        <h1>Our Story </h1>
        <h5>It's all started since 1998 </h5>
        <p>Welcome to Shaif's Cuisine. We take pride in delivering warm, friendly service and creating mouth-watering culinary delights for all. Using only the freshest locally sourced ingredients, we’ll ensure you have a dining experience to remember.</p>
        <p>Since 1998, we are the perfect place for a romantic meal for two, a catch-up with friends, family parties, business meetings, and bringing loved ones together. With comfortable surroundings, affordable prices, and seating for up to 65 guests, we can cater for all occasions. </p>
      </motion.div>
      </div>
{/*  */}

{/*  */}
<div className='main-div-margins'>
     <h1 className='text-center'>Our Goals</h1>
     <p className='text-center'>We shall sell delicious and remarkable food and beverages that meet the highest quality, freshness, and seasonality criteria while combining modern-creative and classic cooking traditions. By showcasing warmth, graciousness, efficiency, skill, professionalism, and integrity in our work, we will continually serve our consumers with exceptional service. To have every customer who comes through our doors leave impressed by their experience at Shaif's Cuisine and excited to come back again. </p>
</div>
{/*  */}

{/*  */} 
           <motion.div  initial="hidden" whileInView="show" variants={zoomIn(.3,1)} className='a-grid main-div-margins'>
              <img  className='I-1' src={Img2}/>
              <img className='I-2' src={Img3}/>
              <img className='I-3' src={Img4}/>
           </motion.div>
{/*  */}
    </div>
  )
}

export default About
