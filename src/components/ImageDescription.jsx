import React from 'react'
import './Styles/ImageDescription.css'

export default function ImageDescription() {

  return (
    < >
      <article>
        <p className='CompanyName'>SNEAKER COMPANY</p> 
        <h1 className='CompanyTitle'>Fall Limited Edition Sneakers</h1> 
        <p className='CompanyDecription'>These low-profile sneakers are your perfect casual wear companion. 
        Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
      </article>   
      <section className='CompanyPrice'>
        <div className='Price'>
          <p className='NewPrice'>$125.00</p>
          <span className='Rabais'> 50% </span>
        </div>
          <p className='OldPrice'> $250.00</p>
      </section>
    </>
  )
}
