import { auth } from "firebase";

function authReducer(state=null,action){

    switch(action.type){
        case 'SET_USER':
            return action.data;
            //state=act
        case 'REMOVE_USER':
            return null;
        default:
            return state;

    }
}

export default authReducer;