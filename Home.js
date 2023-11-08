import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return <><div>
    <header>
      <nav>
        <div className="logo">Job Hunting</div>
        <ul className="menu">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Login">Job Seeker</Link></li>
          <li><Link to="/Employer">Empolyer</Link></li>
          <li><Link to="/Admin">Admin</Link></li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  </div>
  <div>
    <section className="hero">
      <div className="hero-content">
        <h2>Find a Job</h2>
        <div className="flex">
          <form>
          <input type="text" placeholder="Role" />
          <input type="text" placeholder="Location" />
          <button type="submit">Search</button>
        </form>
        </div>
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
  </>
}

  export default Home

