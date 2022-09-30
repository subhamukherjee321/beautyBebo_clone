import React from 'react'
import "./Navbar.css"
import {BsFillHeartFill} from 'react-icons/bs';
import {BsFillPersonFill} from 'react-icons/bs';
import {BsFillBagPlusFill} from 'react-icons/bs';

import {FaSearch} from 'react-icons/fa';
import {Link} from "react-router-dom"



const Navbar = () => {
  return (
   
<div>
    <div className="image"><img src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" alt="image1"/></div>
    <div className="middle">
        <div className="logo">
        <Link to="/">   <div><img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt="logo"/></div></Link> 
        </div>

        <div className="search">
            <div className="left">
                 <div><select id="select">
                                <option value="">All Categories</option>
                                <option value="MakeUp">MakeUp</option>
                                <option value="Hair">Hair</option>
                                <option value="Personal Care">Personal Care</option>
                                <option value="Skin">Skin</option>
                                <option value="Mom & Baby Care">Mom & Baby Care</option>
                                <option value="Ayurveda">Ayurveda</option>
                                <option value="Brands">Brands</option>
                            </select></div>
            </div>

            <di className="line"></di>

            <div className="right">
                <input className="text" type="text" placeholder="Enter Your Search..."/>
                <button className="icon1"><div><FaSearch/></div></button>
            </div>
        </div>

        <div className="account">
            <button className="icon2"><BsFillHeartFill/></button>
        <Link to="./login">   <button className="icon3"><BsFillPersonFill/></button></Link> 
            <div className="ac"><a href="#">My Account</a></div>
        </div>
    </div>
    <div className="nav">
        <div className="sidebar">
        <ul >
         <Link to="/">   <li className="active btn">HOME</li></Link>
         <Link to="/makeup"><li  className="btn">MAKEUP</li></Link>
         <Link to="/hair">   <li className="btn">HAIR</li></Link>
         <Link to="/personalcare">  <li className="btn">PERSONAL CARE</li></Link>
         <Link to="/skin">  <li className="btn">SKIN</li></Link>
         <Link to="/fragrance">  <li className="btn">FRAGRANCE</li></Link>
          <li className="btn">AYURVEDA</li>
          <li className="btn">BRANDS</li>
            
        </ul>
    </div>
       <div class="mycart active btn"><Link to="/cart"> MY CART</Link> </div>

    </div>
   </div>
  )
}

export default Navbar
