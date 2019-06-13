import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { withFooter } from "~/components/Footer";
import { withHeader } from "~/components/Header";

import MediaQuery from "react-responsive";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "~/styles/toast.css";

import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Creators as MenuActions } from "~/store/ducks/menu";
import { Creators as ServiceActions } from "~/store/ducks/service";

import { MdRefresh } from "react-icons/md";
import "~/styles/loading.css";

import { Container, Loading, Content } from "./styles";

class ServiceDetail extends Component {
  state = {};

  static propTypes = {
    updateActive: PropTypes.func.isRequired,
    showRequest: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      }).isRequired
    }).isRequired,
    servicos: PropTypes.shape({
      loading: PropTypes.bool,
      service: PropTypes.shape({
        title: PropTypes.string,
        icon_id: PropTypes.number,
        long_description: PropTypes.string,
        departament: PropTypes.string
      })
    }).isRequired
  };

  static defaultProps = {
    servicos: {
      service: {}
    }
  };

  componentDidMount() {
    const { updateActive, showRequest, match } = this.props;
    updateActive({
      name: "Serviços",
      page: "/servicos"
    });
    showRequest(match.params.id);
  }

  render() {
    const { loading, service } = this.props.servicos;
    const Detalhes = () => (
      <Fragment>
        <MediaQuery query="(max-width: 600px)">
          <h1 className="pequeno">{service.title}</h1>
        </MediaQuery>
        <MediaQuery query="(min-width: 600px)">
          <h1 className="grande">{service.title}</h1>
        </MediaQuery>
        <div className="info">
          <p>
            por <span>{service.departament}</span>
          </p>
        </div>
        <img
          src={process.env.REACT_APP_API_URL + "/files/" + service.icon_id}
          alt="Imagem do post"
        />
        <Content>{service.long_description}</Content>
        <h3>Alguns de nossos trabalhos</h3>
        <div className="portfolio">
          {service.jobs &&
            service.jobs.map(job => (
              <Fragment>
                <span>{job.icon}</span>
                <img
                  src={process.env.REACT_APP_API_URL + "/files/" + job.file_id}
                  alt="Imagem do serviço"
                />
              </Fragment>
            ))}
        </div>
      </Fragment>
    );

    return (
      <Container>
        {loading ? (
          <Loading>
            <MdRefresh className="icon-spin" />
          </Loading>
        ) : (
          service && <Detalhes />
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
  bindActionCreators({ ...MenuActions, ...ServiceActions }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFooter,
  withHeader
)(ServiceDetail);
