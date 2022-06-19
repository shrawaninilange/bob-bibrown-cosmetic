import  handlcart  from "./handlcart";
 import authReducer from "./authreducer";
import { combineReducers } from "redux";
 

const rootReducer = combineReducers({
                      handlcart ,
                      auth : authReducer

                      
          
})

export default rootReducer

