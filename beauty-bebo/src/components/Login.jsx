import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import {Navigate, useNavigate} from "react-router-dom" 


const Login = () => {

  const {handleAuth}=useContext(AuthContext);
  const Navigate=useNavigate()

  const [emaillog,setEmaillog] = useState("");
  const [passwordlog,setPasswordlog] = useState("");
  console.log(emaillog)
  console.log(passwordlog)

  const [flag,setFlag] = useState(false);
  const [home,setHome] = useState(false);
  



  function handleLogin(e) {
    e.preventDefault();
    let pass = JSON.parse(localStorage.getItem("Password"))
    let mail = JSON.parse(localStorage.getItem("Email"))  
    console.log(pass)
    console.log(mail) 
    

    if (passwordlog != pass || emaillog != mail) {
      setFlag(true);
      setHome(false);
      alert ("Invalid username or password");
    } else {
      setHome(true);
      setFlag(false);
      handleAuth(true);

      localStorage.setItem("token",true);
      alert("Login Sucessfull")
      Navigate("/cart");
    }
  }
  useEffect(()=>{
    let token=localStorage.getItem("token");
    if(token){
      // navigate("/")
    }
  })

  return (
    <div>
      <div className="loginheader_at"><h4>Customer Login</h4></div>
      <div className="container">
        <div className="loginsection_at">
            
           
            <div className="logandregiter_at" >
                
                 <div className="login_heading_at">REGISTRED CUSTOMERS</div>
                  <div className="logintext_at">If you have an account, sign in with your email address.</div>
                    <form onSubmit={handleLogin}>
                        <label for="email" className="loginlabel_at">Email: </label>
                        <input type="email"  className="input_at" onChange={(e)=>{setEmaillog(e.target.value)}}/>
                        <label for="password" className="label_at">Password: </label>
                        <input type="password"  className="input_at" onChange={(e)=>{setPasswordlog(e.target.value)}}/>
                    
                   
                    <span>
                        <button className="login_button_at" type='submit'>SIGN IN</button>
                        <a href="#" className="forgotpwd_at"> Forgot Your Password?</a>
                    </span>
                    </form>

                </div>

                <div  className="logandregiter_at">
                    <div className="login_heading_at">NEW CUSTOMERS</div>
                    <div className="logintext_at">Creating an account has many benefits: check out faster, keep more than one address, track orders and more.
                    </div>
                   <Link to="/register"><button className="login_button_at" onclick="gotoregister()">CREATE AN ACCOUNT</button></Link> 
                </div>
         </div>    
    </div>
    </div>
  )
}

export default Login
