import React from 'react'
import Img1 from "./images/event-corporate.png"
import Img2 from "./images/event-weedings.png"
import {FiPlay}  from "react-icons/fi"
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn,zoomIn,planetVariants  } from "../utils/frameMotion"


const Together = () => {
  return (
    <div className='together-main div-center-80 main-div-margins'>
        <motion.div  initial="hidden" whileInView="show" variants={planetVariants("left")}   className='img-1'>
            <div className='play-main div-perfect-center'>
            <FiPlay style={{fontSize:"30px"}}  className='play'/>
            </div>
         <img src={Img1}/>
        </motion.div>

        <motion.div  initial="hidden" whileInView="show" variants={planetVariants("right")}   className='img-2'>
         <img src={Img2}/>
        </motion.div>
    </div>
  )
}

export default Together
