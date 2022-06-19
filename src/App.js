 
  
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Footer from './Footer/Footer';
import { Route ,Routes} from "react-router-dom"
import Product from './components/Products/Product';
 import Cart from './components/Products/Cart';
 import Checkout from './components/Products/Checkout';
import Order from './components/Products/Order';
 
function App() {


  
 
  return (
    <div className="App"> 
    
       <Navbar/>
         

       <Routes>
       <Route
          path="/"
          element={
           
              <Home />
          
          }
        />
       <Route path ="/login"  element={<Login/>} />  
         <Route path ="/products" element={<Products/>}/> 
         <Route path ="/products/:id" element={< Product/>}/> 
         <Route path ="/cart" element={<Cart/>}/> 
         <Route path ="/cart/checkout" element={<Checkout/>}/> 
         <Route path ="/cart/checkout/order" element={<Order/>}/>
       </Routes>
 <Footer/>
    </div>
  );
}

export default App;
