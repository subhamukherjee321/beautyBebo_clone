import React from 'react'

import { FaFacebookSquare } from "react-icons/fa";
import "./Register.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {

    const [password,setPassword]=useState("");
const [email,setEmail]=useState("");
const [flag,setFlag]=useState(false);
const [login,setLogin]=useState(false);
const Navigate=useNavigate()


const handleSubmit=(e)=>{
    console.log("clicked")
     e.preventDefault();
    // if ( !email || !password) {
    //   setFlag(true);
   
      
    // } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password",JSON.stringify(password));
      console.log("Saved in Local Storage");
      setLogin(!login);
      alert("Successfull");
      Navigate("/login")
     
    // }
}
  

  return (
    <div>
        <div className="register_cont_at">
        <div className="register_at">
            <div className="registermainheading_at">CREATE NEW CUSTOMER ACCOUNT</div>

            <div className="signin_options_at">
                <div class="facebooklogo_at">
                    <div> <FaFacebookSquare/></div>
                   
                    <div>Sign in with Facebook</div> 
                </div>
                <div class="googlelogo_at">
                    <div><i class="fa-brands fa-google"></i></div>
                    
                    <div>Sign in with Google</div>
                    
                </div>
            </div>

            <div>--OR--</div>
            <form >
            <div className="info_container_at">
                <div className="title_at">PERSONAL INFORMATION</div>

                <div className="registerdetails_at">
                    <div class="inp">
                        <label for="firstname_at">First Name</label>
                        <input type="text" className="firstname_at" required/>
                    </div>

                    <div class="inp">
                        <label for="lastname_at">Last Name</label>
                        <input type="text" className="lastname_at" required/>
                    </div>

                    <div class="inp">
                        <label for="email_at">Email</label>
                        <input type="email" className="email_at" required onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>

                    <div class="inp">
                        <label for="phone_at">Phone</label>
                        <input type="number" className="phone_at" required/>
                    </div>

                    <div class="inp">
                        <label for="password_at">Password</label>
                        <input type="password" className="password_at" required onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>

                    <div class="inp">
                        <label for="confirmpassword_at">Confirm Password</label>
                        <input type="password" className="confirmpassword_at" required />
                    </div>
                </div>
                <button className="registerbutton_at" type='submit' onClick={handleSubmit}>Create An Account</button>
            </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Register
