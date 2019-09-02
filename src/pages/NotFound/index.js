import React from "react";
import { withFooter } from "~/components/Footer";
import { withHeader } from "~/components/Header";

import { Container } from "./styles";

import error from "~/assets/error.png";

import { Helmet } from "react-helmet";

const NotFound = () => (
  <Container>
    <Helmet>
      <title>Tesla Engenharia | Não encontramos o que está procurando</title>
      <meta
        name="Página não encontrada"
        description="A pagina que você procurou não existe. Verifique o endereço ou retorne à pagina inicial."
      />
      <meta name="robots" content="noindex" />
      <meta
        name="keywords"
        content="Tesla Engenharia, erro 404, página não encontrada"
      />
    </Helmet>
    <img src={error} alt="Página 404" />
    <p>Parece que você está tentando acessar uma página que não existe.</p>
  </Container>
);

export default withHeader(withFooter(NotFound));
