import React from 'react'
import { Header,Food, Footer } from '../components/index'
import "./index.css"
import Pic1 from "../components/images/food-5.png"
import Pic2 from "../components/images/food-6.png"
import Rating from '@mui/material/Rating';

const Menu = () => {
  return (
    <div className='main-div-margins div-center-80'>
     {/*  */}
        <div>
           <h2>Explore Our Menu </h2>
           <h3>Our Specials</h3>

           <div className='grid-even-2 menu-front'>
  
           <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>

           </div>
        </div>

        {/*  */}

        {/*  */}
        <div className='main-div-margins'>
            <h2>Top Dishes </h2>
             
      <div className='grid-20'>

<div style={{display:"flex"}} className="single-top">
    <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
    <div>
        <h3>Vegan Salad bowl</h3>
        <h3>$12</h3>
        <Rating className='green' name="size-large" defaultValue={2} size="large" />
    </div>
</div>
<div style={{display:"flex"}} className="single-top">
    <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
    <div>
        <h3>Vegan Salad bowl</h3>
        <h3>$12</h3>
        <Rating className='green' name="size-large" defaultValue={2} size="large" />
    </div>
</div>
<div style={{display:"flex"}} className="single-top">
    <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
    <div>
        <h3>Vegan Salad bowl</h3>
        <h3>$12</h3>
        <Rating className='green' name="size-large" defaultValue={2} size="large" />
    </div>
</div>

</div>
        </div>

        {/*  */}

        {/*  */}

         <div className='main-div-margins'>
            <h2>Breakfast</h2>
            <div className='grid-20'>

      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
   
      </div>
         </div>
        {/*  */}

        {/*  */}
        <div className='main-div-margins'>
        <h2>Dinner</h2>
            <div className='grid-20'>

      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
   
      </div>
        </div>
        {/*  */}

        {/*  */}
        <div className='main-div-margins'>
        <h2>Lunch</h2>
            <div className='grid-20'>

      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
      <div style={{display:"flex"}} className="single-top">
          <img src={Pic1} style={{borderRadius:"20px",height:"100%"}}/>
          <div>
              <h3>Vegan Salad bowl</h3>
              <h3>$12</h3>
              <Rating className='green' name="size-large" defaultValue={2} size="large" />
          </div>
      </div>
   
      </div>
        </div>
        {/*  */}

    </div>
  )
}

export default Menu
