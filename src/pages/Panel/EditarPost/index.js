import React, { Component } from "react";
import { Helmet } from "react-helmet";

// import { Container } from './styles';

export default class EditarPost extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Tesla Engenharia | Editar post</title>
          <meta
            name="Editar post"
            description="Selecione um post para editar"
          />
          <meta name="robots" content="noindex" />
        </Helmet>
        <h1>Editar post</h1>
      </div>
    );
  }
}
