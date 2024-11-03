import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <Menu className='bg-neutral-300 font-bold ' mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />} style={{ color: 'blue', fontSize: '18px'}}>
       <Link to="/">Home</Link> 
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />} style={{ color: 'blue', fontSize: '18px' }}>
      <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />}style={{ color: 'blue', fontSize: '18px' }}>
      <Link to="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
