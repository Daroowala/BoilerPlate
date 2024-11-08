import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Yahan apna logout logic likhein, jaise Firebase signOut call
    console.log("User logged out");
    
    // Logout ke baad Login page par navigate karna
    navigate("/login");
  };
  return (
    <>
    
    <Menu className='bg-neutral-300 font-bold ' mode="horizontal">
    
      <Menu.Item key="mail" icon={<MailOutlined />} style={{ color: 'blue', fontSize: '18px'}}>
       <Link to="/">Home</Link> 
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />} style={{ color: 'blue', fontSize: '18px' }}>
      <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />}style={{ color: 'blue', fontSize: '18px' }}>
      <Link to="/contact">Contact</Link>
      <ul style={{color:'blue', display:'flex', marginLeft:'845px'}}>
      <li>
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button style={{marginLeft:'30px'}}>Login</button>
          </Link>
        </li>
        
        </ul>
        
      </Menu.Item>
    </Menu>
    
    </>
  );
};

export default Navbar;
