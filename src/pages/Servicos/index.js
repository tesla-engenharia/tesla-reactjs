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
