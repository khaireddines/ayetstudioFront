import React from 'react';
import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { ApiOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const AdapterIcon = {
  width: '0',
  marginRight: '0',
  paddingLeft: '0',
  display: 'block',
  color: '#ADB4D2',
};
const MenuItems = ({ darkMode, toggleCollapsed, topMenu }) => {
  const { path } = useRouteMatch();
  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');
  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = keys => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = item => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      theme={darkMode && 'dark'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
      openKeys={openKeys}
    >
      <Menu.Item key="home" icon={<FeatherIcon icon="home" />}>
        <NavLink onClick={toggleCollapsed} to={`${path}`}>
          Dashboard
        </NavLink>
      </Menu.Item>
      <SubMenu key="AccountModule" icon={!topMenu && <ApiOutlined style={AdapterIcon} />} title="Account Module">
        <Menu.Item key="AccountDetails">
          <NavLink onClick={toggleCollapsed} to={`${path}/AccountModule`}>
            Account Module
          </NavLink>
        </Menu.Item>
        <Menu.Item key="AccountDetails">
          <NavLink onClick={toggleCollapsed} to={`${path}/AccountModule2`}>
            Account Module
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="CampaignsModule" icon={!topMenu && <FeatherIcon icon="radio" />} title="Campaigns Module">
        <Menu.Item key="MyCampaigns">
          <NavLink onClick={toggleCollapsed} to={`${path}/Campaigns`}>
            My Campaigns (CRUD)
          </NavLink>
        </Menu.Item>
        <Menu.Item key="PerformActions">
          <NavLink onClick={toggleCollapsed} to={`${path}/CampaignPerformActions`}>
            Perform Actions (Actions)
          </NavLink>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="ReportingModule" icon={<FeatherIcon icon="bar-chart-2" />}>
        <NavLink onClick={toggleCollapsed} to={`${path}/ReportingModule`}>
          Reporting Module
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
