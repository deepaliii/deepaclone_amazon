import React from 'react'
import './Product.css'

function Product({title,image,price,rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <img className="product__image" src={image}/>
                <p className="product__price">
                <small>Rs</small><strong>{price}</strong>
                </p>
                <p className="product__rating">{rating}</p>
                <button className="but">Add to Cart</button>
                </div>  
        </div>
        
    )
}

export default Product
