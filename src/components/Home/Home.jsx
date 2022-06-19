import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
import "./Home.css";
const Home = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch(`https://shrawani-masai.herokuapp.com/products`)
      .then((r) => r.json())
      .then((d) => setproduct(d));
  }, []);
  return (
    <div>
       <div className="h1">
                      <p className="h1h1">BOBBI BROWN</p>
      </div>
      <div className="img">
        <img
          className="img"
          src="https://www.bobbibrowncosmetics.com/media/export/cms/Homepage/SS22/SS22_JuneTier_Bestsellers_pc.jpg"
          alt=""
        />
      </div>

      <div className="home_p">
        <p>GOTTE HAVE IT</p>
      </div>
      <div className="home">
        <p className="h">THRENDING NOW</p>
        <p className="h">NEW</p>
        <p className="h">SKINCARE</p>
      </div>

      <div className="products">
        {product.map((e) => {
          return (
            
             <div className="pro_div" key={e.id}>
              <img className="imgimg" src={e.image} alt="" />
              <h4>{e.title}</h4>
              <p>{e.discription}</p>
              <p><i className="fa-solid fa-indian-rupee-sign"></i>{e.price}</p>
              <Link to={`/products/${e.id}`}>  <button className="add">Product Details</button></Link>
            </div>
            
          );
        })}
      </div>

      <div>
        <p className="hhh">SHADOW PLAY</p>
        <p className="ppp">
          Play up your smokey eye with shimmering shadow that catches the light.
        </p>
      </div>

      <div className="hom_pro">
        <div className="homeprodiv">
          <img
            className="img1"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_SpringSmokeyEye_pc_1.jpg"
            alt=""
          />

          <h3>SHIMMMER ON</h3>
          <p>Swipe on Long -Wear Cream Shadow In Cinnamon Golden Pink</p>
          <button className="add">Shop Now</button>
        </div>
        <div className="homeprodiv">
          <img
            className="img1"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_SpringSmokeyEye_pc_2.jpg"
            alt=""
          />

          <h3>SHIMMMER ON</h3>
          <p>Swipe on Long -Wear Cream Shadow In Cinnamon Golden Pink</p>
          <button className="add">Shop Now</button>
        </div>
        <div className="homeprodiv">
          <img
            className="img1"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_SpringSmokeyEye_pc_3.jpg"
            alt=""
          />

          <h3>SHIMMMER ON</h3>
          <p>Swipe on Long -Wear Cream Shadow In Cinnamon Golden Pink</p>
          <button className="add">Shop Now</button>
        </div>
      </div>

      <div>
        <p className="hhhh">PRETTY POWERFUL AND PROUD</p>
        <p className="pppp">
          This Pride Month, we’re spotlighting friends in the LGBTQIA+ community
          who embody what it means to be Pretty Powerful and proud.
        </p>
      </div>

      <div>
        <button className="btn">Discover Your Pretty Powerful Fund</button>
      </div>

      <div className="hom_pro">
        <div className="homeprodiv">
          <img
            className="img1"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_PRIDE_3.jpg"
            alt=""
          />

          <h3>Emirra D'Spain </h3>
          <p>Beauty Content Creator</p>
        </div>
        <div className="homeprodiv">
          <img
            className="img1"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_PRIDE_1.jpg"
            alt=""
          />

          <h3>Marc Reagan</h3>
          <p>Executive Director of Bobbi Global Aritisry & Consumer</p>
        </div>
        <div className="homeprodiv">
          <img
            className="img1"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_PRIDE_3.jpg"
            alt=""
          />

          <h3> CHAR ELLAESS</h3>
          <p>Founder and Director of Girls Will be Boys</p>
        </div>
      </div>



      <div  className="img33">
         <div >
          <img className="img333" src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_Minimalist_Clean_Look_pc.jpg" alt="" />
 
         </div>
          <div className="divbb">
          <p >LIVE FROM L.I IT'S NIKKI</p>
         <p  className="ptt">MINIMALIST CLEAN LOOK</p>
         <p>Watch How Artist in Residence Nikki DeRoest Creates a Minimalist Clean Look using effortsless</p>
          </div>
          
      </div>
       


       <div>
        <p className="homep">REFRESH DAD’S KIT</p>
        <p className="home-1">Dad deserves good skin, too. Refresh his stash for Father’s Day with our easy-to-use essentials.</p>
       </div>


       <div>
        <img className="bigimg" src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_FathersDay_pc.jpg" alt="" />
       </div>

       <div>
        <p className="homepp">MADE TO LAST</p>
        <p className="home-1"> Meet our summer lineup of lightweight, long-wearing formulas for a polished look that lasts..</p>
       </div>

   <div>
    <img   className="bigimg"  src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_SummerSolstice_pc.jpg" alt="" />
   </div>



   <div className="hom_pro2">
        <div className="homeprodiv2">
          <img
            className="img111"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_03.jpg"
            alt=""
          />

          <h3>CHAT NOW  </h3>
          <p>Chat with a makeup artist to get product recommendations.</p>
          <p>CHAT NOW</p>
     
        </div>
        <div className="homeprodiv2">
          <img
            className="img111"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_05.jpg"
            alt=""
          />

          <h3>FREE SHIPPING</h3>
          <p>Swipe on Long -Wear Cream Shadow In Cinnamon Golden Pink</p>
       
        </div>
        <div className="homeprodiv2">
          <img
            className="img111"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_07.jpg"
            alt=""
          />

          <h3>We want you to love it</h3>
          <p>Swipe on Long -Wear Cream Shadow In Cinnamon Golden Pink</p>
   
        </div>

        <div className="homeprodiv2">
          <img
            className="img111"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_09.jpg"
            alt=""
          />

          <h3>OFFERS</h3>
          <p>Just for you</p>
         
        </div>
      </div>  
       
    </div>
  );
};

export default Home;
