import React from 'react'
import Pic1 from "./images/event-corporate.png"
import Pic2 from "./images/eventsMedia1.png"

const Events = () => {
  return (
    <div className='event-main main-div-margins  div-center-95 grid-22'>
       <div className='event-same grid-even-2'>
            <img src={Pic1}/>
            <div>
              <h5>Corporate Events</h5>
              <p>Shaif's Cuisine is the perfect venue for your corporate events. We specialize in private parties</p>
            </div>
       </div>

       <div>
        <h3>Book For Events</h3>
          <p>Book your private event or corporate function at Shaif's cuisine to experience a truly unique experience.</p>
          <a className='app-btn roboto'>Contact Now</a>
       </div>

       <div className='event-same grid-even-2'>
            <img src={Pic2}/>
         <div>
            <h5>Weddings</h5>
            <p>Shaif's Cuisine offers an intimately unique wedding experience set in a spectacular setting that is sophisticated and comfortable. </p>
        </div>
       </div>

    </div>
  )
}

export default Events
