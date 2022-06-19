import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {Link} from "react-router-dom"
const Navbar = () => {

  const state =useSelector((state)=> state.handlcart)
  return (
    <div className="nav">
      <div className="nav_black">
        <p className="p">
          25% off sitewide, plus create a 3-piece summer travel kit with your
          $75+ order.
        </p>
      </div>

      <div className="left-right">
      <div className="left">
      <Link to="/products">   <p className="pp">Shop</p></Link>
        <p className="pp">Learn</p>
        <p className="pp">Search</p>
      </div>
      <div className="right">
        <Link to ="/"></Link>
        <Link to ="/cart/checkout"></Link>
        <Link to ="/cart/checkout/order"></Link>
        <Link to ="/products/:id"></Link>
       
        <Link to ="/login"className="pp">Sign in</Link>
        <Link to="/cart" className="pp">Bag({state.length})</Link>
      </div>
      </div>

      
 
     
    </div>
  );
};

export default Navbar;
