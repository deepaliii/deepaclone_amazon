export const addUser=(data)=>{

    return {
        type:"SET_USER",
        data:data
    };
};
export const addToCart=(data)=>{

    return {
        type:"INCREAMENT",
        data:data
    };
};
export const addAdmin=(data)=>{

    return {
        type:"SET_ADMIN",
        data:data
    };
};

export const removeFromBasket=(data)=>{

    return {
        type:"DECREAMENT",
        data:data
    };
};