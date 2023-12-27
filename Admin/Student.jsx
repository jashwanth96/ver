import React, { useState, useEffect } from 'react';

function StudentDashboard() {
  const [studentInfo, setStudentInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        // Replace with your actual API endpoint for student information
        const response = await fetch('/api/studentInfo');
        const data = await response.json();

        setStudentInfo(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching student information:', error);
        setIsLoading(false);
      }
    };

    fetchStudentInfo();
  }, []);

  return (
    <div>
      <h2>Students</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : studentInfo ? (
        <div>
          <p>Total Students: {studentInfo.totalStudents}</p>
          <h3>Job Applications:</h3>
          <ul>
            {studentInfo.applications.map((application, index) => (
              <li key={index}>
                <strong>Job Type:</strong> {application.jobType},{' '}
                <strong>Number of Applicants:</strong> {application.numApplicants}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No student information available.</p>
      )}
    </div>
  );
}

export default StudentDashboard;
