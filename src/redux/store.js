import { createStore, combineReducers, applyMiddleware } from "redux";
import basketReducer from "./reducers/basketReducer";
import productReducer from "./reducers/productReducer";
import {thunk} from "redux-thunk"

const rootReducer = combineReducers({
  product: productReducer,
  basket: basketReducer,
});
export default createStore(rootReducer, applyMiddleware(thunk));
