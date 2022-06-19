import React from "react";
import { useSelector } from "react-redux";
import "./Cart";
import { Link } from "react-router-dom";
const Cart = () => {
  const state = useSelector((state) => state.handlcart);
  var total =0
  const carttt = (e) => {
   total =total + e.price
    return (
                      <> 
      <div className="containercart" key={e.id} style={{display : "flex"}}>
        <div className="imgcart">
          <img className="imgcart1" width={"300px"} src={e.image} alt="" />
        </div>
        <div>
          <h1>{e.title}</h1>
          <h3>{e.discription}</h3>
          <h4 className="pr">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {e.price } 
          </h4>
          
        </div>
      
         
      </div>
      

      
      </>
    );
  };

  return <div  style={{padding : "30px"}}>{state.length !== 0 && state.map(carttt)}  
  <h2 >Total : {total}</h2>
  <Link to="checkout">  <button className="btncart" style={{backgroundColor : "black" ,color : "white" }}>Check Out</button></Link> 
  </div>;
};

export default Cart;
