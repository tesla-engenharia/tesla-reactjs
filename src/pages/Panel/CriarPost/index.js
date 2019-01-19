import React, { Component } from "react";

import { Container } from "./styles";

const instrucoes =
  "Para a correta estilização dos posts, você vai precisar saber o mínimo de HTML. \nTente utilizar, no conteúdo, componentes como:" +
  "\n<p>TEXTO</p> para parágrafos" +
  "\n<strong>NEGRITO</strong> para texto em negrito" +
  "\n<h2>TÍTULO</h2> para títulos de seções" +
  "\n<h4>SUB-TÍTULO</h4> para sub-títulos de seções" +
  "\n<ol><li>ITEM 1</li><li>ITEM 2</li></ol> para listas numeradas" +
  "\n<ul><li>ITEM 1</li><li>ITEM 2</li></ul> para listas não numeradas" +
  "\n<blockquote>CITAÇÃO</blockquote> para citações" +
  "\n<img src='LINK' alt='DESCRIÇÃO DA IMAGEM' /> para imagens durante o fluxo do post";

export default class CriarPost extends Component {
  state = {
    title: "",
    content: "",
    file_id: null
  };

  render() {
    return (
      <Container>
        <form>
          <input
            type="text"
            placeholder="Título"
            value={this.state.titulo}
            onChange={e => this.setState({ title: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="ID da imagem principal"
            value={this.state.file_id}
            onChange={e => this.setState({ file_id: e.target.value })}
            required
          />
          <textarea
            placeholder="Conteúdo"
            value={this.state.content}
            onChange={e => this.setState({ content: e.target.value })}
            required
          />
          <button type="submit">Enviar</button>
          <pre>{instrucoes}</pre>
        </form>
      </Container>
    );
  }
}
