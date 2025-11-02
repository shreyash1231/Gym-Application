import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"; 
function Paymentstatus() {
  const [consumers, setConsumers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchConsumers = async () => {
      try {
        const response = await axios.get("https://gl1v1db1-8080.inc1.devtunnels.ms/api/paymentstatus");

        if (response.status!==200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setMessage(response.message); // backend message
        console.log(response.data,response.message)
        setConsumers(response.data); // actual data array
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchConsumers();
  }, []);

  if (loading) return <p>Loading consumer data...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
 console.log(consumers);
  return (
   <div id="allusersdata">
   <button className="Backbtn" onClick={()=> navigate('/Dashboard')}>Login</button>
  {consumers.length > 0 ? (
    <div className="card-container">
      {consumers.map((c) => (
        <div className="consumer-card" key={c.consumer_id}>
          <div className="consumer-info">
            {/* Left side */}
            <div className="consumer-left">
              <h3 className="consumer-fullname"><strong>Name :</strong> {c[5]}</h3>
              <p className="consumer-gender"><strong>Gender :</strong> {c[6]}</p>
              <p className="consumer-email"><strong>Email :</strong> {c[4]}</p>
              <p className="consumer-mobile"><strong>Mobile No :</strong>  {c[3]}</p>
              <p className="consumer-start"><strong>Membership Start :</strong> {c[9]}</p>
                <p className="consumer-end"><strong>Membership End :</strong> {c[8]}</p>
              <p className="consumer-duration"><strong>Duration (Months) :</strong> {c[7]}</p>
            </div>

            {/* Right side */}
            <div className="consumer-right">
              <p className="consumer-address"><strong>Address :</strong> {c[10]}</p>
              <p className="consumer-paid"><strong>Amount Paid :</strong> ₹{c[1]}</p>
              <p className="consumer-total"><strong>Total Amount :</strong> ₹{c[11]}</p>
              <p className="consumer-remaining"><strong>Amount Remaining :</strong> ₹{c[2]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p>No consumers found</p>
  )}
</div>

  );
}

export default Paymentstatus;
