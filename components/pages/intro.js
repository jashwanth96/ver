// pages/blogs.js

import React from "react";
import { Link } from "react-router-dom";
import './intro.css'

const Intro = () => {
	return (
		<>
		<div className="back">
			<h2>Welcome to Job Hunting</h2>
			<Link to='/home'> <button>Get Started</button> </Link>
		</div>
		</>
	);
};

export default Intro;
