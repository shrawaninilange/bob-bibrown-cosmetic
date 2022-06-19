import React from "react";
import { useState } from "react";
import "./Check.css";
import { Link } from "react-router-dom";
const Checkout = () => {
  const [ value, setvalue] = useState({
    username: "",
    number :"",
    add :"",
    email : ""
  });

   const handle =(e) =>{
                      setvalue({...value,username: e.target.value})
   }
   const handle1 =(e) =>{
                      setvalue({...value,number: e.target.value})
   }
   const handle2 =(e) =>{
                      setvalue({...value,add: e.target.value})
   }
   const handle3 =(e) =>{
                      setvalue({...value,email: e.target.value})
   }

   const handlesub =()=>{

   }
  return (
    <div className="inputcek">
      <div className="innchh">
        <input
        value={value.username}
          type="text "
          onChange={handle}
          id="ch11"
          placeholder="Enter Your Name"
          className="eee"
        />
        <br />
        <input
        value={value.number}
          type="text"
          onChange={handle1}
          name=""
          id="ch11"
          placeholder="Enter Your Number"
        />
        <br />
        <input
        value={value.add}
          type="text"
          onChange={handle2}
          name=""
          id="ch11"
          placeholder="Enter Address"
        />
        <br />
        <input
        value={value.email}
          type="text"
          onChange={handle3}
          name=""
          id="ch11"
          placeholder="Enter email"
        />
        <br />
 <Link to ="/cart/checkout/order"><button className="btnyy" onClick={handlesub }>submit</button></Link>
        <br />
      </div><br />
    </div>
  );
};

export default Checkout;
