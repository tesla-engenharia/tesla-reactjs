import React from "react";

import Header from "./header";
import SideDrawer from "./SideDrawer";

export const withHeader = Component => props => (
  <div>
    <SideDrawer />
    <Header />
    <Component {...props} />
  </div>
);
