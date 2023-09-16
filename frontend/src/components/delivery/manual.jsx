import React from 'react'
import {ManualDeliveryInfo} from "../styles/payment.style";
function Manual() {
  return (
    <ManualDeliveryInfo>
      <div className='country'>
        <p>Country</p>
        <input placeholder='Country' type='text' />
      </div>
      <div className='city'>
        <p>City</p>
        <input placeholder='City' type='text' />
      </div>
      <div className='streat'>
        <p>Streat</p>
        <input placeholder='Streat' type='text' />
      </div>
      <div className='phoneNumber'>
        <p>phone number</p>
        <input placeholder='phone number' type='text' />
      </div>

      
      
    </ManualDeliveryInfo>
  )
}

export default Manual
