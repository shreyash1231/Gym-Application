import { useNavigate } from "react-router-dom";

const useAdduser = () => {
  const navigate = useNavigate();

  const adduser = async (userData) => {
    if (!userData) {
      alert("User data is missing.");
      return;
    }

    // Match backend field names (camelCase for Spring Boot)
    const Data = {
      full_name: userData.consumer_name,
      gender: userData.gender,
      email_id: userData.email,
      membership_duration: userData.membership_duration,
      primary_address: userData.primary_address,
      total_amount: userData.total_amount,
      amount_paid: userData.amount_paid,
      consumer_mobile_no: userData.mobile_no
    };

    try {
      const response = await fetch("https://gl1v1db1-8080.inc1.devtunnels.ms/api/ConsumerSignup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Data)
      });
      if(response.status!==200)
      {
        alert("failed to add user");
      }
      alert("user added successfully");
    } catch (error) {
      alert("Invalid Input. Please try again later.");
      console.error("Signup error:", error);
    }
  };

  return { adduser };
};

export default useAdduser;
