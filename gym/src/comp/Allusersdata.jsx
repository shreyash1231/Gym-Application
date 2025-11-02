import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
function Allusersdata() {
  const [consumers, setConsumers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchConsumers = async () => {
      try {
        const response = await fetch("https://gl1v1db1-8080.inc1.devtunnels.ms/api/ViewAllConsumer");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setMessage(result.message); // backend message
        setConsumers(result.data); // actual data array
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
              <h3 className="consumer-fullname"><strong>Name :</strong> {c.full_name}</h3>
              <p className="consumer-gender"><strong>Gender :</strong> {c.gender}</p>
              <p className="consumer-email"><strong>Email :</strong> {c.email_id}</p>
              <p className="consumer-mobile"><strong>Mobile No :</strong>  {c.consumer_mobile_no}</p>
              <p className="consumer-start"><strong>Membership Start :</strong> {c.membership_start_Date}</p>
                <p className="consumer-end"><strong>Membership End :</strong> {c.membership_end_date}</p>
              <p className="consumer-duration"><strong>Duration (Months) :</strong> {c.membership_duration}</p>
            </div>

            {/* Right side */}
            <div className="consumer-right">
              <p className="consumer-address"><strong>Address :</strong> {c.primary_address}</p>
              <p className="consumer-paid"><strong>Amount Paid :</strong> ₹{c.amount_paid}</p>
              <p className="consumer-total"><strong>Total Amount :</strong> ₹{c.total_amount}</p>
              <p className="consumer-remaining"><strong>Amount Remaining :</strong> ₹{c.amount_remain}</p>
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

export default Allusersdata;
