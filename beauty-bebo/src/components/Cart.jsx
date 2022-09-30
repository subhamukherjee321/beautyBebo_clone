import React from 'react'
import { useState } from 'react'
import "./Cart.css"
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext"
import { useContext } from "react";





const Cart = () => {
    
    const {cart}=useContext(CartContext);
    const {handleRemove}=useContext(CartContext)
    // const {handleRemove}=useContext(CartContext)
   
   

    const [cartitem,setcartitem]=useState([])

    // const total = cartitem.map(d => d.newprice).reduce((prev, curr) =>Number(prev)  + Number(curr), 0); 

    useEffect(()=>{
 
        // axios.get("http://localhost:8080/cart").then((response)=>{
        //   setcartitem(response.data);
        
        // })  
        
        getData()
        },[])
        

        async function getData() {
            const data=await fetch("http://localhost:8080/cart").then(d=>d.json());
             setcartitem(data);
            //  console.log(data);
        }

        function handledelete (id){
            console.log("deleted")
          fetch(`http://localhost:8080/cart/${id}`,{method:'DELETE'
          }).then((result)=>{
              result.json().then((res)=>{
                //   console.warn(res)
                // Navigate("/cart");
                // console.log(res);
               
                // setcartitem(res.data)
                
              })
          })
          setcartitem([...cartitem])
        }

      

    
  return (
    <div>
      <div className="cart_atharva">
        <h2 className="carthead_at">SHOPPING</h2>
        <div className="cartmaincontainer_at">
            <div className="showcartproducts_at">
                <div className="showcartproductshead_at cartheadhead_at" >
                    <div className="itemdiv_at item_item_at"><b>Item</b></div>
                    <div className="pricequantitydiv_at">
                        <span><b>Price</b></span>
                        <span><b>Quantity</b></span>
                        <span><b>SubTotal</b></span>
                    </div>
                </div>
                <div>
                   {cartitem.map((e)=>{
                    return(
                        <div className='cartbox_full'>
                    <div className='cartbox'>
                        <img src={e.img}></img>
                        <p>{e.title}</p>
                        <div className='priceflex'>
                            <div>{e.newprice}</div>
                            <div>{1}</div>
                            <div>{e.newprice}</div>
                        </div>
                       
                    </div>
                    <br></br>
                     <hr></hr>
                     <button onClick={()=>{
                    //  handledelete(e.id)
                   
                    
                    handleRemove(e.newprice);
                    console.log(e.newprice)
                   fetch(`http://localhost:8080/cart/${e.id}`,{
                       method:"DELETE"
                   })
                        getData();
                     
                   
                 }
               
                }>REMOVE ITEM</button>
                     <hr></hr>
                     <br></br>

                     </div>
                    )
                   })}
                   
                </div>
            </div>


            <div className="cartdetails_at">
                <div>
                    <h3>Summary</h3>
                </div>
               
                <div className="estimate_at">Estimate Shipping And Tax</div>
                <div className="selectcountry_at">
                    <div><b>country</b></div>
                    <select name="country" className="selet_at">
                        <option value="India">India</option>
                    </select>
                </div>
                <div className="selectstate">
                    <div className="spccart_at"><b>State</b></div>
                    <select name="state" className="cartcommcont_at " >  
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujrat">Gujrat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jharkand">Jharkand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerla">Kerla</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                </div>

                <div className="zipcode">
                    <div><label for="zipcode"><b>Zip/Postal Code</b></label>
                        <div>
                            <br/>
                            <input type="text"/>
                        </div>
                       

                        <div className="spediv_at">
                            <span>Subtotal:</span>
                           <span className="spedivspan_at">₹{cart}</span>
                        </div>

                        <div className="spediv_at">
                            <span>Shipping</span>
                            <span>&#8377;40.00</span>
                        </div>

                        <div className="spediv_at">
                            <span>Order Total Incl. GST:</span>
                            <span className="gst_at">₹ {cart+40}</span>
                        </div>

                        <div className="spediv_at">
                            
                                <Link to="./checkout"><button>Proceed To Checkout</button></Link>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cart
