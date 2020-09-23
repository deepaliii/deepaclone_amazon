import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addAdmin} from './action'
import db from './firebase'

function Admin() {
    const [AdminName, setAdminName] = useState('');
    const [Password, setPassword] = useState('');
    const history=useHistory();
    const dispatch=useDispatch();
    const signin =e=>
    {
        if(AdminName==="ADMIN@gmail.com"){

            db.auth().signInWithEmailAndPassword(AdminName,Password).then((e)=>{
                dispatch(
                    addAdmin("ADMIN")
                )

                history.push('/admindashboard')
            })
            
        }else{
            alert("WRONG CREDENTIALS")
        }
    }

    
    return (
        
        <div>
            <div className="admin_page">
            <h1>ADMIN LOGIN</h1>
            <span>Email</span>
            <input type="email" placeholder="Enter Email" value={AdminName} onChange={e=>setAdminName(e.target.value)}/>
            <span>Password</span>
            <input type="text" placeholder="Enter Password" value={Password} onChange={e=>setPassword(e.target.value)}/>
            <button type="submit" onClick={signin}>Sign In</button>
            </div>
        </div>
    )

    }
export default Admin
