import React, { useState } from 'react';

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = ['Python', 'Java', 'Testing', 'UI/UX', 'AWS'];

  return (
    <div>
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
    </div>
  );
};

export default Dashboard;
