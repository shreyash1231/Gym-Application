import React, { useState } from "react";
import '../App.css'; 
import { useNavigate } from "react-router-dom";
import useSignup  from '../hooks/useSignup'; // adjust path as needed
function Signup(){
    const navigate = useNavigate();
    const {signup} = useSignup();
    const [email,setemail] = useState("");
    const [username,setusername] = useState("");
    const [mobile_no,setmobile_no] = useState("");
    const [password,setpassword]=useState("");
    const [confirmpassword,setconfirmpassword] = useState("");
    const handleClick=()=>{
      if(!email||!username||!mobile_no||!password||!confirmpassword)
      {
        alert("Please fill all the details");
        return;
      }
      signup(email,username,mobile_no,password,confirmpassword);
    }
    return(
      <div id="signup-form">
        <h2>Signup</h2>
        <input type="email" id="signup-email" placeholder="Enter your email" 
         value={email}
         onChange={(e)=>{setemail(e.target.value)}}
        />
        <input type="text" id="signup-username" placeholder="Choose a username" 
         value={username}
         onChange={(e)=>{setusername(e.target.value)}}/>
        <input type="tel" id="signup-number" placeholder="Enter your mobile number"
         value={mobile_no}
         onChange={(e)=>{setmobile_no(e.target.value)}}/>
        <input type="password" id="signup-password" placeholder="Create a password" required
         value={password}
         onChange={(e)=>{setpassword(e.target.value)}} />
        <input type="password"  placeholder="Confirm password" required
         value={confirmpassword}
         onChange={(e)=>{setconfirmpassword(e.target.value)}} />
        <button onClick={() =>handleClick()} type="submit">Signup</button>

        <nav onClick={() => navigate('/')} className='navigate-signup'>
          Already have an account? Login
        </nav>
      </div>
    );
}
export default Signup;