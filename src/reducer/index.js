import { combineReducers } from 'redux'
import authReducer from './auth'
import cartReducer from './cart'
import adminReducer from './admin'
const allReducer=combineReducers({
    authReducer:authReducer,
    cartReducer:cartReducer,
    adminReducer:adminReducer,
});

export default allReducer;