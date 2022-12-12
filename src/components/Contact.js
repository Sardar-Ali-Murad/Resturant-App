import React from 'react'
import {AiOutlineClockCircle}  from "react-icons/ai"
import {CiLocationArrow1}  from "react-icons/ci"
import {BsTelephone} from "react-icons/bs"
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn} from "../utils/frameMotion"


const Contact = () => {
  return (
    <div className='div-center-60 grid-even-3 main-div-margins contact-main'>

      <motion.div  initial="hidden" whileInView="show" variants={slideIn('left', 'tween', .2, 1)}  className='single-contact text-center'>
          <AiOutlineClockCircle className='green' style={{fontSize:"40px"}}/>
          <h4>10 AM - 7 PM </h4>
          <p>Opening Hour </p>
      </motion.div>

      <motion.div  initial="hidden" whileInView="show" variants={slideIn('left', 'tween', .5, 1)}  className='single-contact text-center'>
          <CiLocationArrow1 className='green' style={{fontSize:"40px"}}/>
          <h4>10 AM - 7 PM </h4>
          <p>Address </p>
      </motion.div>

      <motion.div  initial="hidden" whileInView="show" variants={slideIn('left', 'tween', .7, 1)}  className='single-contact text-center' style={{fontSize:"40px"}}>
          <BsTelephone className='green'/>
          <h4>+880123443 </h4>
          <p>Call Now </p>
      </motion.div>



    </div>
  )
}

export default Contact
