import React from 'react'
import "./Button.css"
import { useNavigate } from 'react-router-dom'

const Button = () => {
  let Navigate=useNavigate()
  return (
    <div>
      <button className='PaymentBtn' onClick={()=>{
        alert("Order Placed Successfully!")
        Navigate("/")
        
      }}>Place order</button>
    </div>
  )
}

export default Button
