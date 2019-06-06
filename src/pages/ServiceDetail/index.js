import React, { Component } from "react";

import { withFooter } from "~/components/Footer";
import { withHeader } from "~/components/Header";

import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Creators as MenuActions } from "~/store/ducks/menu";
import { Creators as ServiceActions } from "~/store/ducks/service";

import { MdRefresh } from "react-icons/md";
import "~/styles/loading.css";

// import { Container } from './styles';

class ServiceDetail extends Component {
  componentDidMount() {
    const { updateActive, showRequest, match } = this.props;
    updateActive({
      name: "Serviços",
      page: "/servicos"
    });
    showRequest(match.params.id);
  }

  render() {
    const { loading } = this.props.service;
    return (
      <div>
        {loading ? <MdRefresh className="icon-spin" /> : <div>Olá mundo</div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  service: state.service
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MenuActions, ...ServiceActions }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFooter,
  withHeader
)(ServiceDetail);
