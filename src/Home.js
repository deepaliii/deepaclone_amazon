import React from 'react'
import './Home.css'
import Product from './Product';
import Headerthree from './Headerthree';
import db from './firebase';
import { useState,useEffect } from 'react';
function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
    db.database().ref("Amazon_Items").on('value',(snap)=>{
        let products = snap.val();
        let newProduct=[];

        for(let product in products){
            newProduct.push(
                {
                    title:products[product].title,
                    description:products[product].description,
                    imageLink:products[product].imageLink,
                    rate:products[product].rate,
                    price:products[product].price,

                }
            );

            }
        setData(newProduct);
    })
  }, []);

    

    return (
       <div className="div_imagee">
        <div className="div_image">
            
            <img className="image_home" src="https://www.webretailer.com/wp-content/uploads/2019/10/Amazon-shopper-survey-results.png" alt=""/>
            <Headerthree/>
            <div className="home__row">
           {
                    data.map((product)=>{
                        return (
                            <div>
                                
                            <Product 
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rate}
                                    image={product.imageLink} />


                            </div>
                        )
                    })
                }

           </div>
            
        </div>
        </div>
        
    )
}

export default Home
