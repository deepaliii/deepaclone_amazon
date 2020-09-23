import React, { useEffect ,useState} from 'react'
import './Checkout.css'
import {useSelector} from 'react-redux';
import Header from './Header'
import {useHistory } from 'react-router-dom'
import {useDispatch} from "react-redux";
import {removeFromBasket}from './action';
function Checkout() {
    const  cartReducer=useSelector(state=>state.cartReducer);
    //cartReducer=[1,2,3,4,5]
    const history=useHistory();
    const dispatch=useDispatch();
    const [price, setprice] = useState(0)
    useEffect(() => {
       let x=0
        cartReducer.map((product)=>{
            x+=parseInt(product.price);
        })
        setprice(x)
    }, [])
    function remove(product){
    
        console.log(product);
        for(let i in cartReducer){
            if(cartReducer[i].title==product){
                cartReducer.splice(i,1);
            }
        }
        //cartReducer=[2,3,4,5]
        dispatch(
            removeFromBasket(cartReducer)
        )
     }
    return (
        <div className="checkout">
            <Header/>
            <h1 className="heading">Shopping Cart</h1>
            
            <div className="buttton">
                <button>PAY: {price}</button>
             </div>
            <div className="checkout__detail">
            {
                    cartReducer.length>0
                        ?<div className="checkout__info">

                            {
                                cartReducer.map((product)=>(
                                    <div className="checkout__data">
                                        <h1 className="checkout__title">Title-{product.title}</h1>
                                        <h2 className="checkout__rate">Rate-{product.rating}</h2>
                                        <h3 className="checkout__price">Price-{product.price}</h3>
                                        <img className="checkout__image" src={product.image} alt=""/>
                                        <button className="check" onClick={()=>remove(`${product.title}`)}> Remove from cart</button>

                                    </div>
                                ))
                            }
                            </div>
                            :<div>
                            <h1>Your cart is empty , please buy ..</h1>
                            </div>
                        }
        </div>
       
        </div>


       
    );
    }


export default Checkout
