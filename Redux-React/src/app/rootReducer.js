
   
import { combineReducers } from "redux";
import CategorySlice from "../features/CategorySlice";
import authSlice from '../features/authSlice';
import ProductSlice from "../features/ProductSlice";

const rootReducer = combineReducers(
    {
        product: ProductSlice,
        category: CategorySlice,
        auth: authSlice
});
export default rootReducer;