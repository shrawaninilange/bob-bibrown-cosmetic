// import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
 
 
// import cartReducer from "./cart/reducer";

// const rootReducer = combineReducers({
//   cart: cartReducer,
 
// });
// export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// // reducers are not ready


import { legacy_createStore} from "redux";

import { applyMiddleware } from "redux";

import thunk from "redux-thunk"
import rootReducer from "./reducer";


const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store