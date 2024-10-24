import React from 'react';
import { Button } from 'antd'; // Assuming you're using Ant Design for buttons
import { useNavigate } from 'react-router-dom';
import Inputbutton from '../Inputbutton'; // Inputbutton ko import karein

const Home = () => {
  const navigate = useNavigate();

  // Handlers for button navigation
  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      
      {/* Input field and search button */}
      <Inputbutton />

      {/* About Us and Contact Us Buttons */}
      <div className="mt-6 flex space-x-4">
        <Button type="primary" onClick={handleAboutClick}>
          Go To About Us
        </Button>
        <Button type="primary" onClick={handleContactClick}>
          Go To Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Home;
