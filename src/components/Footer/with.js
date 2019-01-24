import React, { Fragment } from "react";

import Footer from "./footer";

import { BottomSpacer } from "./styles";

export const withFooter = Component => props => (
  <Fragment>
    <BottomSpacer>
      <Component {...props} />
    </BottomSpacer>
    <Footer />
  </Fragment>
);
