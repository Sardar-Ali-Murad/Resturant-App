import React from 'react'
import ourStoryImg from "./images/ourStoryImg.png"
import Rating from '@mui/material/Rating';

const Customer = () => {
  return (
    <div className='main-div-margins div-center-70'>
      <h1 className='text-center'>What Our Customers Say</h1>
      <div className='grid-even-2 cust-main'>

        <div className='cus-single'>
            <div className='cus-img'>
             <img src={ourStoryImg}/>
            </div>
            <div  className='cus-cont'>
                <h5>Sayed Ahmed</h5>
                <Rating className='green' name="size-large" defaultValue={4} size="large" />
                <p>“Visited Shaif’s Cuisine with friends last Sunday. Really lovely meal and very warm welcome – we would recommend this lovely restaurant and will try to go back again” </p>
            </div>
        </div>

        <div className='cus-single'>
            <div className='cus-img'>
             <img src={ourStoryImg}/>
            </div>
            <div  className='cus-cont'>
                <h5>Sayed Ahmed</h5>
                <Rating className='green' name="size-large" defaultValue={4} size="large" />
                <p>“Visited Shaif’s Cuisine with friends last Sunday. Really lovely meal and very warm welcome – we would recommend this lovely restaurant and will try to go back again” </p>
            </div>
        </div>
        <div className='cus-single'>
            <div className='cus-img'>
             <img src={ourStoryImg}/>
            </div>
            <div  className='cus-cont'>
                <h5>Sayed Ahmed</h5>
                <Rating className='green' name="size-large" defaultValue={4} size="large" />
                <p>“Visited Shaif’s Cuisine with friends last Sunday. Really lovely meal and very warm welcome – we would recommend this lovely restaurant and will try to go back again” </p>
            </div>
        </div>
        <div className='cus-single'>
            <div className='cus-img'>
             <img src={ourStoryImg}/>
            </div>
            <div className='cus-cont'>
                <h5>Sayed Ahmed</h5>
                <Rating className='green' name="size-large" defaultValue={4} size="large" />
                <p>“Visited Shaif’s Cuisine with friends last Sunday. Really lovely meal and very warm welcome – we would recommend this lovely restaurant and will try to go back again” </p>
            </div>
        </div>


      </div>
    </div>
  )
}

export default Customer
