import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search' // doubt
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react'
import {useHistory } from 'react-router-dom'
import db from './firebase'
import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import {addUser} from './action'
import Checkout from './Checkout'

function Header() {
    const [name, setName] = useState('')
    const history=useHistory();
    const dispatch=useDispatch();

    const authReducer=useSelector(state=>state.authReducer)
    const cartReducer=useSelector(state=>state.cartReducer)
     useEffect( () => {  
        //var user=userName;
        db.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
            //   setName(db.auth().currentUser.displayName);
            //   history.push('/')
            // setName(db.auth().currentUser.displayName);
              // ...
            } else {
              // User is signed out.
              // ...
            }
          });
     }, [])

     const signout=(e)=>{
         e.preventDefault();
        db.auth().signOut().then((e)=>{

            dispatch(
                addUser(null)
            )
        }).catch((error)=>{

        })

     }
    return (

        <div className="navbar">
            <Link to="/">

                <img className="navbar_image" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div className="navbar_search">
                <input className="navbar_search_input" type="text" />
                <SearchIcon className="search_icon" />
            </div>
            <div className="navbar_nav">
                <Link to="/login">
                    <div className="navbar_content">

                        <span className="navbar_content_hello">Hello, {authReducer}</span>
                        {
                            authReducer? <span onClick={signout} className="navbar_content_sign">Sign OUT</span>
                                      :  <span   className="navbar_content_sign">Sign in</span>

                        }

                    </div>
                </Link>
            </div>

            <div className="navbar_content_1">
                <span className="navbar_content_return">Returns</span>
                <span className="navbar_content_orders">Orders</span>
            </div>

            <div className="navbar_content_2">
                <span className="navbar_content_your">Your</span>
                <span className="navbar_content_prime">Prime</span>
            </div>

            <Link to="/Checkout">
            <div className="navbar_cart">
                <ShoppingCartOutlinedIcon />
                <span className="navbar_cartt">{cartReducer.length}</span>
            </div>
            </Link>

            
        </div>



    )
}

export default Header
