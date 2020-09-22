import React from 'react'
import {useState} from 'react'
import db from './firebase'
import {useHistory } from 'react-router-dom'

function AdminDashboard() {
    const [title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[imageLink, setImageLink] = useState('')
    const [rate, setRating] = useState('')
    const [price, setPrice] = useState('')
    const history=useHistory();

    const signin=e=>
    {

        e.preventDefault();
        var data={
            title:title,
            description:description,
            imageLink:imageLink,
            rate:rate,
            price:price,

        };

        db.database().ref("Amazon_Items").push().set(data,(err)=>{
            if(err){
                console.error(err);
            }
            else{
                console.log("DATA SAVED")
                alert("DATA SAVED")
                
                
            }
        })

    }
    return (
        <div>
            <h1>Add Elements</h1>

            <form>
                    <h5>Title</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Title"
                        value={title} 
                        onChange={e=>setTitle(e.target.value)}
                        />

                    <h5>Description</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Description"
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                        />
                    <h5>Image Link</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Image Link"
                        value={imageLink}
                        onChange={e=>setImageLink(e.target.value)}
                        />
                    <h5>Rating</h5>
                    <input 
                        type="number" 
                        placeholder="Enter Rating"
                        value={rate}
                        onChange={e=>setRating(e.target.value)}
                        />

                <h5>Price</h5>
                    <input 
                        type="number" 
                        placeholder="Enter Price"
                        value={price}
                        onChange={e=>setPrice(e.target.value)}
                        />

                    <button 
                        type="submit"
                        onClick={signin}>
                            Add
                    </button>
                </form>
        </div>
    )
}

export default AdminDashboard
