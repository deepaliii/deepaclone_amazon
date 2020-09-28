import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import db from './firebase';
import {useHistory } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {addUser} from './action'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history=useHistory();
    const dispatch=useDispatch();

    const signin = (e) =>
    {
        e.preventDefault();
        db.auth().signInWithEmailAndPassword(email,password).then((e)=>{
            console.log("Signed IN")
            dispatch(
                addUser(e.user.displayName)
            )
            history.push('/');// client side rendering to HOME PAGE

        }).catch((err)=>{
            if(err){
                console.error(err)
                alert(err.message)
            }
            else{
                console.log("Signed IN SuCCESSFULLY")
            }
        })

    }
    return (
            
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>
            <div className="login__container">
            <form>
            <h1>Sign In</h1>
            <h5>Email</h5>
            <input type="email" placeholder="Enter Email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type="password" placeholder="Enter Password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button className="login__signInButton" type="submit" onClick={signin}>Sign In</button>
            </form>
            <p>By Signing-in, you agree to Amazon FAKE CLONE Conditions of Use and Privacy Notice. </p>
            <Link to="/Signup">
            <button className="login__registerButton" type="submit">Create your new account</button>
             </Link>
        </div>
        </div>


        )
}


export default Login
