import { useNavigate } from "react-router-dom";
import axios from "axios"; 

const useLogin = () => {
  const navigate = useNavigate();

  const login = async (email, password) => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      console.log("Sending login data:", { email, password });

      const response = await axios.post("https://gl1v1db1-8080.inc1.devtunnels.ms/api/login", {
        email,
        password,
      });

      console.log("Login response:", response.data);

      alert("Logging in to dashboard...");
      navigate("/dashboard"); // ✅ consistent casing

    } catch (error) {
      // Handle axios errors properly
      if (error.response) {
        // Server responded with non-2xx status
        console.error("Login failed:", error.response.data);
        alert(error.response.data.message || "Invalid email or password");
      } else if (error.request) {
        // Request made but no response
        console.error("No response received:", error.request);
        alert("Server not responding. Please try again later.");
      } else {
        // Something else happened
        console.error("Error:", error.message);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return { login };
};

export default useLogin;
