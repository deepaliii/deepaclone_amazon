import { combineReducers } from 'redux'
import authReducer from './auth'
import cartReducer from './cart'
const allReducer=combineReducers({
    authReducer:authReducer,
    cartReducer:cartReducer
});

export default allReducer;