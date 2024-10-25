import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


function About() {
  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    navigate('/'); 
  };

  return (
  <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-4xl font-bold">About Us</h1>
      <Button type="primary" onClick={handleHomeButtonClick}>
        Go to Home Page
      </Button>
    </div>
    );
};

export default About;
