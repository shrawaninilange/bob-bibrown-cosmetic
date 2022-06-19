import { LOGIN_ERROR,  LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./action.types";


  import axios from "axios";

export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const delItem = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};



   

  export const   loginApi =(data)=>(dispatch)=>{
    dispatch({type :LOGIN_LOADING})
    axios.post("https://reqres.in/api/login",{
      email : data.email,
      password :data.password,
    })
    .then((r)=>{
      dispatch({type :LOGIN_SUCCESS ,payload:r.data})
    })
    
    dispatch({type :LOGIN_ERROR})
  }

export const logout =(dispatch)=>{
  dispatch({type :LOGOUT})
}
