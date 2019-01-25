import React, { Fragment } from "react";

import Header from "./header";
import SideDrawer from "./SideDrawer";

export const withHeader = Component => props => (
  <Fragment>
    <SideDrawer />
    <Header />
    <Component {...props} />
  </Fragment>
);
