import React from 'react';
 import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate('/')
    }
  return(
    <div>
        <button onClick={handleLogout}>logout</button>
    </div>
  );
};
export default Dashboard
