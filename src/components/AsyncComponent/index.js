import React, { Component } from "react";

import { FaCircleNotch } from "react-icons/fa";
import "~/styles/loading.css";

import { Loading } from "./styles";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    state = {
      C: null
    };

    async componentDidMount() {
      const { default: C } = await importComponent();

      this.setState({ C });
    }

    render() {
      const { C } = this.state;
      return C ? (
        <C {...this.props} />
      ) : (
        <Loading>
          <FaCircleNotch className="icon-spin" />
        </Loading>
      );
    }
  }

  return AsyncComponent;
}
