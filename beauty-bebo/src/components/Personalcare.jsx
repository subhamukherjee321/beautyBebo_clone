import React from 'react'
import { useState } from 'react'
import "./Product.css"
import axios from "axios";
import { useEffect } from 'react';
import {BsStarFill} from 'react-icons/bs';

import {BsHeartFill} from 'react-icons/bs';
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Personalcare = () => {
    const [makeup,setmakeup]=useState([]);
    const {handleChange}=useContext(CartContext)
    console.log(makeup)
    useEffect(()=>{
 
        axios.get("http://localhost:8080/personal_care").then((response)=>{
          setmakeup(response.data);
        })  
        },[])
        const handleSort=(e)=>{
            // let data=e.target.value;
            let selected=e.target.value;
            if (selected == 'high') {
              makeup.sort(function (a, b) {
                  if (Number(a.newprice) > Number(b.newprice)) return 1;
                  if (Number(a.newprice) < Number(b.newprice)) return -1;
                  return 0;
              })
              console.log(makeup);
              setmakeup([...makeup]);
          }
          if (selected == 'low') {
            makeup.sort(function (a, b) {
                  if (Number(a.newprice) > Number(b.newprice)) return -1;
                  if (Number(a.newprice) < Number(b.newprice)) return 1;
                  return 0;
              })
              console.log(makeup);
              setmakeup([...makeup])
          }
        }
  return (
    <div>
       <div class="product_result_ks">
        <div class="sidebar_ks">
            <div class="category_ks">
                CATEGORY
            </div>
            <div class="shop_by_ks">
                <h3>SHOP BY</h3>
                <div class="zoom">SKIN TYPE</div>
                <div class="zoom">COLOR</div>
                <div class="zoom">PRICE</div>
                <div class="zoom">BRAND</div>
                <div class="zoom">SHADES</div>
                <div class="zoom">FORMULATION</div>
            </div>
    
            <div class="delivery_img">
                <img src="https://www.beautybebo.com/pub/media/free-delivery.jpg" alt=""/>
            </div>
    
        </div>
        <div>
            
            <div  className="select_sort"><select onChange={handleSort}>
                                <option value="">Sort:Price</option>
                                <option value="high">Low To High</option>
                                <option value="low">High To Low</option>
                                
                            </select></div>
            
            <div class="product_container_ks">
     
            {makeup.map((e)=>{
              return( <div className='product_map'>

                <img src={e.img}></img>,
                <p style={{height:"60px" ,color:"rgb(102, 102, 102)",fontSize:"14px"}}>{e.title}</p>
                <div className='icons'><div><BsStarFill/></div><div><BsStarFill/></div><div><BsStarFill/></div><div><BsStarFill/></div><div><BsStarFill/></div></div>
                <div className='price'>
                    <div className='oldprice'>₹{e.oldprice}</div>
                    <div style={{color:"rgb(221, 2, 133)"}}>₹{e.newprice}</div>
                    <div className='discount'>{e.discount}</div>
                </div>
                <div className='button'><button onClick={()=>{
                  console.log("clicked")
                  alert("Product added to cart")
                 
                const data=e;
               fetch("http://localhost:8080/cart",{
                   method:"POST",
                 headers:{
                     "content-type":"application/json"
                 },
                 body:JSON.stringify(data)
               })
               handleChange(e.newprice)

            }}
                
                
                
                >Add To Cart</button><BsHeartFill style={{color:"rgb(221, 2, 133)",fontSize:"20px"}}></BsHeartFill></div>
                
              </div>
              )
            })}

        </div>
        </div>
    </div>
    </div>
  )
}

export default Personalcare
