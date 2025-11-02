import Signup from './comp/Signup';
import Login from './comp/Login';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './comp/Dashboard';
import Adduser from './comp/Adduser';
import Allusersdata from './comp/Allusersdata';
import Membershipstatus from './comp/Membershipstatus';
import Paymentstatus from './comp/Paymentstatus';
function App() {
  return (
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} /> 
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/AddUser" element={<Adduser />} /> 
          <Route path="/Allusersdata" element={<Allusersdata />} /> 
          <Route path="/Membershipstatus" element={<Membershipstatus />} />
          <Route path="/Paymentstatus" element={<Paymentstatus />} /> 
    </Routes>
  );
}

export default App;
