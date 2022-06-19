import React from 'react'
import "./Order.css"
import { Link } from 'react-router-dom'
 
const Order = () => {
                     
                       
  return (
     <div className="order">
               <div>
                      <img className='orde' src="https://image.shutterstock.com/z/stock-vector-order-success-icon-771333901.jpg" alt="" />
                      <h1 className='orh11'>Thank Your</h1>
                      <h1 className='rd22'> Order Successfully Placed</h1>
                      <Link to ="/"> <button                      className='btnre'>Go to Home Page</button></Link>
                      </div>      
     </div>
  )
}

export default Order