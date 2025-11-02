import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import useLogin from '../hooks/uselogin'; // ✅ correct case

const Login = () => {
  const navigate = useNavigate();
  const { login } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password");
      return;
    }
    login(email, password);
  };

  return (
    <div id="login-form">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleClick}>Login</button>

      <nav onClick={() => navigate('/signup')} className="navigate-signup">
        New User? Create an account
      </nav>
    </div>
  );
};

export default Login;
