import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
 
import {useDispatch } from "react-redux/es/exports";
 import { addCart } from "../../store/actions/index";
import "./Product.css"
 
const Product = () => {
  const [product, setproduct] = useState({});
  
  const { id } = useParams();
  useEffect(() => {
    if(id) {
      
       fetch(`https://shrawani-masai.herokuapp.com/products/${id}`)
       .then((r)=>r.json())
       .then((d) =>setproduct(d))
    }
  
  }, [id]);



  const dispatch =useDispatch()

  const addProducts =(product)=>{
    dispatch(addCart(product))
  }
  return  (
                      
                         <>
                         <div className="single">
                            <div className="ppppp1">
                            <img className="sinimg" src={product.image} alt="" />
                            </div>
                              <div>
                                           
                              <h1>{product.discription}</h1>
                              <p>{product.title}</p>
                              <p><i className="fa-solid fa-indian-rupee-sign"></i>{product.price}</p>
                               <hr />
                   <button className="sin1" onClick={()=>addProducts(product)}>Add To Bag</button>
                              </div>
                         </div>
                      
                         </>
  )
}

export default Product;
