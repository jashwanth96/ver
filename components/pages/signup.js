// pages/signup.js

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './signup.css'

const SignUp = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		dob: '',
		gender: 'male',
		city: '',
		state: '',
		country: '',
	  });
	
	  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
		  ...formData,
		  [name]: value,
		});
	  };
	
	  const handleSubmit = (e) => {
		e.preventDefault();
		// Add your form submission logic here, e.g., API calls, validation, etc.
	  };
	
	return (
    <>
    <div className="container">
    	<div className='cont'>
			<form onSubmit={handleSubmit}>
				<h1>Signup</h1>
				<label>Username*</label>
				<input
				type="text"
				id="name"
				name="name"
				placeholder="Full Name"
				value={formData.name}
				onChange={handleChange}
				required
				/> <br />
				<label>Email*</label>
				<input
				type="email"
				id="email"
				name="email"
				placeholder="Email"
				value={formData.email}
				onChange={handleChange}
				required
				/> <br />
				<label>Password*</label>
				<input
				type="password"
				id="password"
				name="password"
				placeholder="Password"
				value={formData.password}
				onChange={handleChange}
				required
				/> <br />
				<label>Confirm Password*</label>
				<input
				type="password"
				id="confirmPassword"
				name="confirmPassword"
				placeholder="Confirm Password"
				value={formData.confirmPassword}
				onChange={handleChange}
				required
				/> <br />
				<label>Date of Birth*</label>
				<input
				type="text"
				id="dob"
				name="dob"
				placeholder="dd/mm/yyyy"
				value={formData.dob}
				onChange={handleChange}
				/> <br />
				<label>Gender*</label>
				<select
				id="gender"
				name="gender" 
				value={formData.gender}
				onChange={handleChange}
				>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="other">Other</option>
				</select> <br />
				<label>City*</label>
				<input
				type="text"
				id="city"
				name="city"
				placeholder="City"
				value={formData.city}
				onChange={handleChange}
				/> <br />
				<label>State*</label>
				<input
				type="text"
				id="state"
				name="state"
				placeholder="State"
				value={formData.state}
				onChange={handleChange}
				/> <br />
				<label>Country*</label>
				<input
				type="text"
				id="country"
				name="country"
				placeholder="Country"
				value={formData.country}
				onChange={handleChange}
				/>
				<br />
				<label htmlFor="resume">Upload Resume</label>
				<input type="file" id="resume" name="resume" />
				<br />
				<Link to={"/"}><button type="submit">Sign Up</button></Link>
				<br />
				<p>Already have an account? <Link to={"/login"}>Login</Link> </p>
			</form>
      </div>
    </div>
		</>
	);
};

export default SignUp;
