import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />}>
        About
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />}>
        Contact
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
