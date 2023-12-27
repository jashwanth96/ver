import React, { useState, useEffect } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Home() {
  const [studentsApplied, setStudentsApplied] = useState(0);
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalStaff, setTotalStaff] = useState(0);

  const data = [
    {
      name: 'Python',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Java',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Testing',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Aws',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Ui&ux',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  // Simulate fetching data from an API
  useEffect(() => {
    // Replace with your actual API endpoints to fetch real data
    // For now, use placeholders
    const fetchData = async () => {
      try {
        const studentsAppliedResponse = await fetch('/api/studentsApplied');
        const totalJobsResponse = await fetch('/api/totalJobs');
        const totalStaffResponse = await fetch('/api/totalStaff');

        const studentsAppliedData = await studentsAppliedResponse.json();
        const totalJobsData = await totalJobsResponse.json();
        const totalStaffData = await totalStaffResponse.json();

        setStudentsApplied(studentsAppliedData.count);
        setTotalJobs(totalJobsData.count);
        setTotalStaff(totalStaffData.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Students Applied</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>{studentsApplied}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Jobs</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>{totalJobs}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Staff</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{totalStaff}</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='pv' fill='#8884d8' />
            <Bar dataKey='uv' fill='#82ca9d' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
