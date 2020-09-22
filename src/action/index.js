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
