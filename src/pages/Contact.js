import React from 'react'
import Contacts  from '../components/Contact'
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn} from "../utils/frameMotion"


const Contact = () => {
  return (
    <div className='div-center-80 contact-main'>
       <div className='main-div-margins'>
        <Contacts/>
       </div>

       <div className='main-div-margins  g'>
          <h1>Contact & Inquiry </h1>
          <form className='grid-22 c-form'>
             <div>
                <h4  style={{margin:"0px"}}>First name</h4>
                <input  style={{margin:"0px",marginTop:"20px"}} className='form form-input'/>
             </div>
             <div>
                <h4  style={{margin:"0px"}}>Last Name</h4>
                <input  style={{margin:"0px",marginTop:"20px"}} className='form form-input'/>
             </div>
             <div>
                <h4  style={{margin:"0px"}}>Email</h4>
                <input  style={{margin:"0px",marginTop:"20px"}} className='form form-input'/>
             </div>
             <div>
                <h4  style={{margin:"0px"}}>Subject</h4>
                <input  style={{margin:"0px",marginTop:"20px"}} className='form form-input'/>
             </div>
             <div>
                <h4  style={{margin:"0px"}}>Reason</h4>
                <textarea  style={{margin:"0px",marginTop:"20px"}} className='form form-textarea'></textarea>
             </div>
          </form>
       </div>
    </div>
  )
}

export default Contact
