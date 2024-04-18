import React, { useState } from 'react'
import "./Login.css"
import { assets } from '../../assets/assets'
const Login = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
                <input type="email" placeholder='Your Email' required/>
                <input type="password" placeholder='Password' required/>
            </div>
            <button className='custom__button'>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account? <span className='text-light' onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span className='text-light' onClick={()=>setCurrState("Login")}>Login here</span></p>
            
        }
        </form>
    </div>
  )
}

export default Login