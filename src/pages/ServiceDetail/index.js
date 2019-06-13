import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { withFooter } from "~/components/Footer";
import { withHeader } from "~/components/Header";

import { useSelector, useDispatch } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "~/styles/toast.css";

import { compose } from "redux";
import { Types as MenuActions } from "~/store/ducks/menu";
import { Types as ServiceActions } from "~/store/ducks/service";

import { MdRefresh } from "react-icons/md";
import "~/styles/loading.css";

import { Container, Loading } from "./styles";

import Detail from "./detail";

function ServiceDetail(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: MenuActions.UPDATE_ACTIVE,
      payload: {
        pageActive: {
          name: "Serviços",
          page: "/servicos"
        }
      }
    });

    dispatch({
      type: ServiceActions.SHOW_REQUEST,
      payload: { id: props.match.params.id }
    });
  }, []);

  const { loading, service } = useSelector(state => state.service);

  return (
    <Container>
      {loading ? (
        <Loading>
          <MdRefresh className="icon-spin" />
        </Loading>
      ) : (
        <Detail service={service} />
      )}
      <ToastContainer autoClose={3000} toastClassName="round-toast" />
    </Container>
  );
}

ServiceDetail.propTypes = {
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

export default compose(
  withFooter,
  withHeader
)(ServiceDetail);
