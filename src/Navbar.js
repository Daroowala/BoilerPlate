import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Logout from './logOut';


const Navbar = () => {
  
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
      
         <div style={{ marginLeft: '790px', display: 'flex', alignItems: 'center' }}>
        <Link to="/signup" style={{ color: 'blue', marginRight: '30px' }}>SignUp</Link>
        <Link to="/login" style={{ color: 'blue', marginRight: '20px' }}>Login</Link>
        <Logout />
      </div>
      </Menu.Item>
     
    </Menu>
    </>
  );
};

export default Navbar;
