import React, { useState } from 'react';

const JobApplications = () => {
  const [jobApplications, setJobApplications] = useState(0);

  const handleApplyJobClick = () => {
    setJobApplications(jobApplications + 1);
  };

  return (
    <div>
      <h2>Total Job Applications: {jobApplications}</h2>
      <button onClick={handleApplyJobClick}>Apply Job</button>
    </div>
  );
};

const Dashboards = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = ['Python', 'Java', 'Testing', 'UI/UX', 'AWS'];

  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <h2>Categories</h2>
        <table>
          <thead>
            <tr>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} onClick={() => handleCategoryClick(category)}>
                <td>{category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        {selectedCategory && (
          <div>
            <h2>Selected Category: {selectedCategory}</h2>
            {/* Render content related to the selected category */}
          </div>
        )}
      </div>

      <JobApplications />
    </div>
  );
};

export default Dashboards;
