import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


function About() {
  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    navigate('/'); 
  };

  return (
  <div>
      <h1>About Us</h1>
      <Button type="primary" onClick={handleHomeButtonClick}>
        Go to Home Page
      </Button>
    </div>
    );
};

export default About;
