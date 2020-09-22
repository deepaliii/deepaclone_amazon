import React from 'react'
import { addToCart } from './action'
import './Product.css'

import {useDispatch} from "react-redux";
function Product({title,image,price,rating}) {

    const dispatch=useDispatch();

    function addToBasket(){

      dispatch(addToCart({
          title:title,
          image:image,
          price:price,
          rating:rating,
      }))
    }
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <img className="product__image" src={image}/>
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
