import React from 'react'
import { Link } from 'react-router-dom'
import './Headertwo.css'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

function Headertwo() {
    return (
        <div className="headerTwo">
           <div className="headerTwo__options">
            
                <div className="headerTwo__optionDeliver">
                <LocationOnOutlinedIcon/>
                        <div className="headerTwo__optionDeliverSpan">
                            <span>Deliver to</span>
                            <span>India</span>
                        </div>
                </div>
              
            
              <div className="headerTwo__optionLinks">
              <Link to="/" className="headerTwo__link">
                        <span>Today's</span>
                        <span>Deal</span>
                    </Link>
              <Link to="/" className="headerTwo__link">
                        <span>Customer</span>
                        <span>Service</span>
                    </Link>
                    <Link to="/" className="headerTwo__link">
                        <span>Gift</span>
                        <span>Cards</span>
                    </Link>
                
                    <Link to="/" className="headerTwo__link">
                        <span>Registry</span>
                        
                    </Link>
                    <Link to="/" className="headerTwo__link">
                        <span>Sell</span>
                
                    </Link>
              </div>
               
                

                <div className="">
                    <span>Amazon's response to Covid-19</span>
                    {/* <button  onClick={signout}> Sign out</button> */}
                </div>
           </div>
        </div>
    )
}


export default Headertwo
