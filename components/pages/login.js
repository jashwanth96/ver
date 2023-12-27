import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., API calls and authentication.
    // formData.username and formData.password contain the user input.
  };

  return (
    <>
    <div className="login-container">
      <div className='log'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <FontAwesomeIcon icon={faUser} />
            <input type="text" id="username" name="username" placeholder="Username" required />
          </div>
          <div className="form-group">
          <FontAwesomeIcon icon={faLock} /> 
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            </div>
            <div className='pwd'>
              <span
                onClick={togglePasswordVisibility}
                className={`password-toggle ${showPassword ? 'show' : ''}`}
              >
                <input type='checkbox'/>{showPassword ? "Hide password" : "Show password"}
              </span>
              <Link to={"/"}>Forgot password?</Link>
            </div>
          
          <div className='fog'>
            
          </div>
          <div className="form-group">
            <Link to={"/"}><button type="submit">Login</button></Link>
          </div>
          <div className='reg'>
            <p>Don't have account? <Link to={"/signup"}>Register</Link></p> <br />
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
