import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { withFooter } from "~/components/Footer";
import { withHeader } from "~/components/Header";

import { Creators as ServiceActions } from "~/store/ducks/service";
import { MdRefresh } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "~/styles/toast.css";
import {
  Container,
  Loading,
  TitleWrapper,
  ContentWrapper,
  Content
} from "./styles";

import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";

import { Link } from "react-router-dom";

class Servicos extends Component {
  static propTypes = {
    indexRequest: PropTypes.func.isRequired,
    //response: PropTypes.shape({
    loading: PropTypes.bool,
    servicos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        icon_id: PropTypes.number,
        description: PropTypes.string,
        departament: PropTypes.string
      })
    )
    //})
  };

  componentDidMount() {
    const { indexRequest } = this.props;
    indexRequest();
  }

  render() {
    const { loading, servicos } = this.props;
    console.tron.log(servicos.response);
    const lista = Array.from(servicos.response);
    const Servico = () => (
      <Container>
        <h1>Serviços qualificados para a sua necessidade.</h1>
        <TitleWrapper>
          <span>Projetos</span>
        </TitleWrapper>
        <ContentWrapper>
          {lista.map(servico => (
            <Link to={"/servicos/" + servico.id}>
              <Content>
                <p>{servico.title}</p>
                <img
                  src={
                    process.env.REACT_APP_API_URL + "/files/" + servico.icon_id
                  }
                  alt={servico.title}
                />
                <span>{servico.description}</span>
              </Content>
            </Link>
          ))}
        </ContentWrapper>
      </Container>
    );

    return (
      <Container>
        {loading ? (
          <Loading>
            <MdRefresh className="icon-spin" />
          </Loading>
        ) : (
          servicos && <Servico />
        )}
        <ToastContainer autoClose={3000} toastClassName="round-toast" />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  servicos: state.service
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ServiceActions }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFooter,
  withHeader
)(Servicos);
