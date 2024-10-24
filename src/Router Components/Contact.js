import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    navigate('/'); 
  };
  return (
    <div>
        <h1>Contact Us</h1>
        <Button type="primary" onClick={handleHomeButtonClick}>
          Go to Home Page
        </Button>
      </div>
      );
}

export default Contact;
