import React from 'react'
import Pic1 from "./images/whyUs-icon1.svg"
import Pic2 from "./images/whyUs-icon2.svg"
import Pic3 from "./images/whyUs-icon3.svg"
import Pic4 from "./images/whyUs-icon4.svg"


const Food = () => {
  return ( 
    <div className='div-center-70 grid-even-2 food-main main-div-margins'>

      <div className='food-content'>
        <h2>Why Choose Our Food </h2>
        <p>Quality of Service, Food, Ambiance, and Value of Money are the primary elements for choosing a restaurant. Shaif's Cuisine is one of the most exquisite fine-dinning restaurant in Chittagong cities with a captivating view of GEC Hills, perfect ambiance, and scrumptious food. </p>
      </div>

      <div className='grid-even-2'>
         <div className='text-center food-single'>
           <img src={Pic1}/>
           <p>Quality Food</p>
         </div>
         <div className='text-center food-single'>
           <img src={Pic2}/>
           <p>Classical taste</p>
         </div>
         <div className='text-center food-single'>
           <img src={Pic3}/>
           <p>Skilled chef</p>
         </div>
         <div className='text-center food-single'>
           <img src={Pic4}/>
           <p>Best service</p>
         </div>

      </div>
    </div>
  )
}

export default Food
