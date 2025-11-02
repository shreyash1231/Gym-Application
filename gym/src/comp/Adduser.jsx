import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAdduser  from '../hooks/useAdduser';

function Adduser(){
    const navigate = useNavigate(); 
    const {adduser} = useAdduser();
    const [consumer_name,setconsumer_name] = useState("");
    const [gender,setgender] = useState("");
    const [email, setemail] = useState("")
    const [membership_duration, setmembership_duration] = useState("");
    const [primary_address, setprimary_address] = useState("");
    const [total_amount, settotal_amount] = useState("");
    const [amount_paid, setamount_paid] = useState("");
    const [mobile_no , setmobile_no] = useState("");
    const Addnewmember = () => {
        const data = {
            consumer_name,
            gender,
            email,
            membership_duration,
            primary_address,
            total_amount,
            amount_paid,
            mobile_no
        };
        for (const [key, value] of Object.entries(data)) {
            if (
                value === null ||
                value === undefined ||
                (typeof value === "string" && value.trim() === "")
            ) {
                alert(`Please fill in the ${key.replace(/_/g, ' ')} field.`);
                return; 
            }
        }
        adduser(data);
    };

    const handleClick=(url)=>{
        navigate(url);
    }
    return(
       <div id="Adduser-form">
            <h2>Add Consumer</h2>
            <div className="flex-container-adduser">
                <input type="text" id="consumer-Name" placeholder="Full name of the consumer"
                 value={consumer_name}
                 onChange={(e)=>{setconsumer_name(e.target.value)}} 
                />
                <input type="text" id="consumer-gender" list="GenderList" placeholder="Select Gender"
                value={gender}
                onChange={(e)=>{setgender(e.target.value)}}  />
                <datalist id="GenderList">
                    <option value="Male" />
                    <option value="Female" />
                    <option value="Other" />
                </datalist>
            </div>
            <div className="flex-container-adduser">
                <input type="email" id="consumer-email" placeholder="Email address"
                 value={email}
                 onChange={(e)=>{setemail(e.target.value)}} />
                <input
                type="text"
                id="membership-months"
                list="valueList"
                placeholder="Select membership duration"
                value={membership_duration}
                onChange={(e) => {
                    const selected = e.target.value;
                    const number = parseInt(selected); 
                    if (!isNaN(number)) {
                    setmembership_duration(number); 
                    } else {
                    setmembership_duration(""); 
                    }
                }}
                />
                <datalist id="valueList">
                <option value="1 Month" />
                <option value="3 Months" />
                <option value="6 Months" />
                <option value="12 Months" />
                </datalist>

            </div>

            <div className="flex-container-adduser">
                <input type="text" id="consumer-Address1" placeholder="Primary address line"
                 value={primary_address}
                 onChange={(e)=>{setprimary_address(e.target.value)}}  />
                <input type="tel" id="consumer-number" placeholder="Phone number" 
                 value={mobile_no}
                 onChange={(e)=>{setmobile_no(e.target.value)}} />
            </div>

            <div className="flex-container-adduser">
                <input type="number" id="membership_amount" placeholder="Enter total amount" 
                 value={total_amount}
                 onChange={(e)=>{settotal_amount(e.target.value)}} />
                <input type="number" id="consumer-amount" placeholder="Payment amount (in ₹)" required 
                 value={amount_paid}
                 onChange={(e)=>{setamount_paid(e.target.value)}} />
            </div>
            <div className="flex-container-adduser">
                <button onClick={()=>{handleClick('/Dashboard')}}>Back</button>
                <button onClick={()=>{Addnewmember()}}>Submit</button>
            </div>
        </div>

    );
}
export default Adduser;