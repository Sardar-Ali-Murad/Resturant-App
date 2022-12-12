import React from 'react'
import {BsCupStraw}  from "react-icons/bs"
import "./index.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose}  from "react-icons/ai"
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn} from "../utils/frameMotion"

const Header = () => {
    let [ham,setHam]=React.useState(true)
  return (
    <div  className='header-main'>

       <motion.div  initial="hidden" whileInView="show" variants={navVariants} className='header-front'>
         <BsCupStraw className='header-icon'/>
         <div>
         <p style={{margin:"0px"}}>Sardar</p>
         <p style={{margin:"0px"}}>Cuisine</p>
         </div>
       </motion.div>
       <motion.div  initial="hidden" whileInView="show" variants={navVariants}>
       <nav className='big-nav'>
          <ul className='roboto'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <h4>Book A Table</h4>
       </nav>
       </motion.div>

       {/* Small Screen */}
       <GiHamburgerMenu className='nav-ham' onClick={()=>setHam(false)}/>

<div className={`smal-screen-nav comp2-nav ${!ham?"small-screen-nav-active":""}`}>
  <AiOutlineClose onClick={()=>setHam(true)} className='small-screen-close'/>
 <nav className='roboto'>
       <ul>
           <li><Link to="/" className='links' onClick={()=>setHam(true)}>Home</Link></li>
           <li><Link to="/menu" className='links' onClick={()=>setHam(true)}>Menu</Link></li>
           <li><Link to="/about" className='links' onClick={()=>setHam(true)}>About </Link></li>
           <li><Link to="contact" className='links' onClick={()=>setHam(true)}>Contact</Link></li>
       </ul>
    </nav>

 </div>


    </div>
  )
}

export default Header
