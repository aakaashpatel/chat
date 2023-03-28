import React, { useState } from 'react'
import "./Join.css"
import logo from "../../image/logo.png"
import {Link} from "react-router-dom";


let user;

const sendUser = () =>{
  user = document.getElementById('joininput').value;
   document.getElementById('joininput').value = "";
}
const Join = () => {
    
    const [name, setname] = useState("")

  return (
    <div className="JoinPage">
        <div className="JoinContainer">
            <img src={logo} alt="logo" />
            <h1>Chat</h1>
            <input onChange={(e) => setname(e.target.value)} type="text" id="joininput" placeholder='Enter Your Name' required/>
            <Link onClick={(e) => !name ?e.preventDefault():null} to="/chat"><button onClick={sendUser} className='joinbtn'>Log In</button></Link>
        </div>
    </div>
  )
}

export default Join
export {user}