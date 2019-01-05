import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Drawer, Backdrop } from './styles';

import menuItems from '~/config/MenuItems';

const SideDrawer = () => (
  <Fragment>
    <Drawer>
      {menuItems.map((menuItem, actualIndex) => (
        <Link key={actualIndex} to={menuItem.page}>
          {menuItem.name}
        </Link>
      ))}
    </Drawer>

    <Backdrop />
  </Fragment>
);

export default withRouter(SideDrawer);
