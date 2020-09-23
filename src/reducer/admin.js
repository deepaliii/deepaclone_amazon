function adminReducer(state=null,action){
    switch(action.type){
        case 'SET_ADMIN':
            return action.data;
        default:
            return state;
    }
}
export default adminReducer;