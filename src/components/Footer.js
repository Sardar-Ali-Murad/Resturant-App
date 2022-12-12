import React from 'react'
import {BsCupStraw}  from "react-icons/bs"
import {TbBrandFacebook}  from "react-icons/tb"
import {IoLogoInstagram}  from "react-icons/io"
import {CiTwitter}  from "react-icons/ci"
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn,zoomIn, footerVariants } from "../utils/frameMotion"



const Footer = () => {
  return (
    <motion.div style={{overflow:"hidden"}} initial="hidden" whileInView="show" variants={footerVariants} >

    <div className='div-center-95 grid-14 f-main'>

      <div>

      <div className='header-front'>
         <BsCupStraw className='header-icon'/>
         <div>
            <p style={{margin:"0px"}}>Sardar</p>
            <p style={{margin:"0px"}}>Cuisine</p>
         </div>
       </div>
       <p>Fresh and delicious traditional Bangladeshi food to delight the whole family. </p>
       <h6>Follow us</h6>

       <div className='f-icon-main'>
          <TbBrandFacebook className='f-icon'/>
          <IoLogoInstagram className='f-icon'/>
          <CiTwitter className='f-icon'/>
       </div>

      </div>

      <div>
        <h3>Links</h3>
        <p>Home</p>
        <p>Menu</p>
        <p>Book Table</p>
        <p>About Us</p>
        <p>contact Us</p>
        <p>Privacy Policy</p>
   
      </div>

      <div>
        <h3>Support </h3>
        <p>Contact</p>
        <p>Support Center</p>
        <p>FeedBack</p>
      </div>

      <div>
        <h3>Contact</h3>
        <p>+921386881689</p>
        <p>sardaralimuradali4@gmail.com</p>
        <p>GEC Circle, Chittagong, Bangladesh</p>
      </div>


    </div>

    <p className='text-center'>© copyright 2021 Shaif’s Cuisine | All rights reserved </p>
    </motion.div>
  )
}

export default Footer
