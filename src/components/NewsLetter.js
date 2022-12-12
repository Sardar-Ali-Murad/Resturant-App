import React from 'react'

const NewsLetter = () => {
  return (
    <div className='div-center-80 letter-main main-div-margins'>

      <div>
        <h1>Join Newsletter</h1>
        <p>Get notified with the latest news and recent offers from the “Shaif’s Cuisine”</p>
      </div>
       
       <div className='join-input'>
         <input className='dark' placeholder='Your Email Adress'/>
         <a className='app-btn'>Join</a>
       </div>

    </div>
  )
}

export default NewsLetter
