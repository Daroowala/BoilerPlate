import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <Menu className='bg-neutral-300 font-bold ' mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />} style={{ color: 'blue', fontSize: '18px'}}>
        Home
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />} style={{ color: 'blue', fontSize: '18px' }}>
        About
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />}style={{ color: 'blue', fontSize: '18px' }}>
        Contact
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
