import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import db from './firebase';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {useDispatch} from "react-redux";
import {addUser} from './action'

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const history = useHistory();
    const dispatch=useDispatch();

    const signup = e => {
        if (password == confirmPassword) {
            e.preventDefault();
            db.auth().createUserWithEmailAndPassword(email, password).then((e) => {
                console.log("SIGNED IN");
                e.user.updateProfile({
                    displayName: name
                });
                console.log(e)

                db.database().ref("Users").child(e.user.uid).set({
                    "name": name,
                    "email": email,
                    "password": password,
                    "uid": e.user.uid
                }, (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("DATA SAVED")

                        dispatch(
                            addUser(name)
                        )
                        history.push('/'); // client side rendering to HOME PAGE

                    }
                })
            })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(error.message);
                    // ...
                });
        } else {
            alert("Password does not match")
        }

    }
    return (

        <div className="register" >
                <Link to="/" >
                    <img className="register__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                        alt="" />
                </Link>
            <div className="register__container">
                <h1> Sign Up </h1>
                <form>
            <h5> Name </h5> 
            <input type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    /> 
                    <h5> Email </h5> <input type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            /> 
                        <h5> Password </h5> 
                        <input type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            /> 
                            <h5> Confirm Password </h5> 
                            <input type="password"
                                    placeholder="Enter Confirm Password"
                                    value={confirmPassword}
                                    onChange={e => setconfirmPassword(e.target.value)}
                                /> 
                                <button type="submit"
                                    onClick={signup} className="register__signInButton" > Sign Up </button> 
                                    </form>
                                    <Link to="/login">
                                        <button className="register__registerButton"> Already have account </button> 
                                        </Link> 
                                        </div>
                                        </div>


    )
}


export default Signup