import React from 'react'
import { addToCart } from './action'
import './Product.css'
import {useSelector} from 'react-redux';
import {useHistory } from 'react-router-dom';

import {useDispatch} from "react-redux";
function Product({title,image,price,rating}) {

    const authReducer=useSelector(state=>state.authReducer)
    const history=useHistory();

    const dispatch=useDispatch();

    function addToBasket(){

        if(authReducer){
            dispatch(addToCart({
                title:title,
                image:image,
                price:price,
                rating:rating,
            }))
        }
        else{
            alert("PLEASE LOGIN FIRST")
            history.push("/login")
        }


     
    }
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <img className="product__image" src={image} alt="Image not showing coz you have low budget "/>
                <p className="product__price">
                <small>Rs</small><strong>{price}</strong>
                </p>
                <p className="product__rating">{rating}</p>
                <button onClick={addToBasket} className="but">Add to Cart</button>
                </div>  
        </div>
        
    )
}

export default Product
