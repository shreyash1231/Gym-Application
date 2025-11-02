import { useNavigate } from "react-router-dom";

function Dashboard(){
    const navigate = useNavigate();
    const handleClick=(url)=>{
        navigate(url);
    }
    return(
      <div className="Dashboard">
            <div className="button-container">
                <button onClick={() => handleClick('/AddUser')} className="Dashboard-btn">
                    Add New Consumer
                </button>
                <button onClick={()=>handleClick('/Allusersdata')} className="Dashboard-btn">
                    View All Consumers
                </button>
                <button onClick={()=>handleClick('/Membershipstatus')} className="Dashboard-btn">
                    Check Membership Status
                </button>
                <button onClick={()=>handleClick('/Paymentstatus')} className="Dashboard-btn">
                    View Pending Payments
                </button>
            </div>
        </div>
    );
}
export default Dashboard;