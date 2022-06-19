import React from "react";
import { useState } from "react";
import Footer from "../../Footer/Footer";
import { useDispatch  } from "react-redux";
import {   useNavigate } from "react-router-dom";
import { loginApi } from "../../store/actions";
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });


  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginApi(loginCreds));
    navigate("/")
 
  };

   

  
 
  return (
    <>
      <div className="login">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <p>ALREADY HAVE AN ACCOUNT?</p>
            <h4>CONTINUE</h4>
            <input id="" className="inputlog"  placeholder="email"   value={loginCreds.email}
          onChange={hanldeChange}/>
            <br />
            <input className="inputlog" name="password"    value={loginCreds.password}
          onChange={hanldeChange} />
            <p>Forgot Password</p>
            <button className="loginbtn">continue</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
