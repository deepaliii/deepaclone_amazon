function cartReducer(state=[],action){

    switch(action.type){
        case 'INCREAMENT':
            return [...state,action.data];
            //state=act
        case 'DECREAMENT':
            return null;
        default:
            return state;

    }
}

export default cartReducer;