function cartReducer(state=[],action){

    switch(action.type){
        case 'INCREAMENT':
            return [...state,action.data];
            //state=act
        case 'DECREAMENT':
            console.log(state)
            return [...state];
        default:
            return state;

    }
}

export default cartReducer;

