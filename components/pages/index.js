// pages/index.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.css'

const Home = () => {
return (
	<div>
	<section className="hero">
        <div className="flex">
          <form>
          <div className='h2'>
          <h2>Find a Job</h2>
          </div>
          <div className='input'>
            <input type='text' placeholder='Role' /> {' '}
            <input type='text' placeholder='Location'/>
          </div>
          <div className='button'>
          <button>
            <FontAwesomeIcon icon={faSearch} /> Search
         </button>
          </div>
        </form>
        </div>
    </section> 

   <section className="job-listings">
      <h2>Featured Job Listings</h2>
      <div className="job-card">
        <h3>Software Engineer</h3>
        <p>Accenture</p>
        <p>Location: Hyderabad, Telangana</p>
        <br />
        <Link to="/Login" className="btn">Apply Now</Link>
      </div>
      <div className="job-card">
        <h3>Marketing Specialist</h3>
        <p>Ramco</p>
        <p>Location: Bangalore, Karnataka</p>
        <br />
        <Link to="/Login" className="btn">Apply Now</Link>
      </div>
    </section>

	<footer>
      <div className="footer"> 
      <p>@2023 Job Hunting</p>
      </div>
    </footer>
	</div>
);
};

export default Home;
