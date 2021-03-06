import PropTypes from "prop-types";

import React, { useEffect } from "react";

import { Types as ServiceActions } from "~/store/ducks/service";
import { useDispatch, useSelector } from "react-redux";
import { compose } from "redux";

import { withFooter } from "~/components/Footer";
import { withHeader } from "~/components/Header";
import ListServicos from "./list";

import { MdRefresh } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "~/styles/toast.css";
import { Container, Loading } from "./styles";

import { Helmet } from "react-helmet";

function Servicos() {
  const { loading, services } = useSelector(state => state.service);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: ServiceActions.INDEX_REQUEST
    });
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Tesla Engenharia | Serviços</title>
        <meta
          name="O que fazemos"
          description="Conheça nossos serviços e soluções"
        />
        <meta
          name="keywords"
          content="Tesl Engenharia, Empresa Júnior, MEJ, Movimento Empresa Júnior, UFT, Universidade Federal do Tocantins, Palmas, servicos, eficiência energética, projéto elétrico, projeto, laudo técnico, SPDA, pára-raio, para raio"
        />
      </Helmet>
      {loading ? (
        <Loading>
          <MdRefresh className="icon-spin" />
        </Loading>
      ) : (
        <ListServicos lista={services} />
      )}
      <ToastContainer autoClose={3000} toastClassName="round-toast" />
    </Container>
  );
}

Servicos.propTypes = {
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
};

export default compose(
  withFooter,
  withHeader
)(Servicos);
