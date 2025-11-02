import { useNavigate } from "react-router-dom";
import axios from "axios"; 

const useSignup=()=>{
  const navigate = useNavigate();
  const signup = async (email,username,mobile_no,password,confirmPassword)=>{
    if(password!==confirmPassword)
    {
      return "password dosen't match";
    }
    const userdata={
      email:email,
      username:username,
      mobile_no:mobile_no,
      password:password,
      confirmPassword:confirmPassword
    }
    const response = await axios.post("https://gl1v1db1-8080.inc1.devtunnels.ms/api/signup",{ email:email,
      username:username,
      mobile_no:mobile_no,
      password:password,
      confirmPassword:confirmPassword})
      console.log(response.data); 
      console.log(response.status)
      console.log(response);
    if(response.status!==200)
    {
      alert("error from server");
    }
    alert("data store successfully");
    navigate("/dashboard");
  }
  return {signup};
};
export default useSignup;






























// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const useSignup = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const signup = async (userData) => {
//     setError(null);

//     if (!userData) {
//       setError("Signup data is missing.");
//       return;
//     }
//     console.log(userData.password, userData.confirmpassword);
//     if (userData.password !== userData.confirmpassword) {
//       setError("Passwords do not match.");
//       return;
//     }
//     console.log("hooks",userData);
//     const Data = {
//       email: userData.email.trim(),
//       username: userData.username.trim(),
//       mobile_no: userData.mobile_no,
//       password: userData.password,
//       confirmPassword: userData.confirmpassword // matches backend
//     };
//     console.log(Data.ConfirmPassword);
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:8080/api/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(Data)
//       });

//       const result = await response.json();
//       console.log("Server response:", result);

//       if (!response.ok) {
//         setError(result.message || "Signup failed. Please try again.");
//         return;
//       }

//       // ✅ Redirect only on success
//       navigate("/Dashboard");

//     } catch (err) {
//       setError("Network error. Please try again later.");
//       console.error("Signup error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { signup, loading, error };
// };

// export default useSignup;
