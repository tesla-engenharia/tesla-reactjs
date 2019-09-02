import React, { Component } from "react";
import { Helmet } from "react-helmet";

// import { Container } from './styles';

export default class DeletarPost extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Tesla Engenharia | Deletar post</title>
          <meta
            name="Deletar post"
            description="Selecione um post para deletar"
          />
          <meta name="robots" content="noindex" />
        </Helmet>
        <h1>Deletar post</h1>
      </div>
    );
  }
}
