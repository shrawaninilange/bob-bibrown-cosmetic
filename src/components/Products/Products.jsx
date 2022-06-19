import { useEffect, useState } from "react";
import "./Products.css";
import {Link} from "react-router-dom"
const Products = () => {
  const [product, setproduct] = useState([]);
  // const [data ,setd] =useState("")
  useEffect(() => {
    fetch(`https://shrawani-masai.herokuapp.com/products`)
      .then((r) => r.json())
      .then((d) => setproduct(d));
  }, []);

  // const h = (e) => {
 
  //   let select = e.target.value;
  //   setd(select)
  //   console.log(select)
  //    product.sort( (a, b) => {
  //     if (select === "high") {
  //       return a.price - b.price;
  //     }  
  //   if (select === "low") {
  //       return b.price - a.price;
         
  //     }
  //     return setproduct(product) 
  //   });
 
  
  // };


  

  return (
    <>
      {/* <div className="sort">
        <select name="" id="cas"   onClick ={h}>
          <option value="all">- SORT</option>
          <option value="high"> LOW TO HIGH</option>
          <option value="low">  HIGH TO LOW</option>
        </select>
      </div> */}

      <div className="products">
        {product.map((e) => {
          return (
            
 
            <div className="pro_div"  key={e.id}>
              <img className="imgimg" src={e.image} alt="" />
              <p>{e.title}</p>
              <p>{e.discription}</p>
              <p>{e.price}</p>
              <Link to={`/products/${e.id}`}>      <button className="add">ADD TO BAG</button> </Link>
            </div>
            
          );
        })}
      </div>
    </>
  );
};

export default Products;
