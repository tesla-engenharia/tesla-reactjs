import React from "react";
import { withFooter } from "~/components/Footer";
import { withHeader } from "~/components/Header";

import { Container } from "./styles";

import error from "~/assets/error.png";

const NotFound = () => (
  <Container>
    <img src={error} alt="Página 404" />
    <p>Parece que você está tentando acessar uma página que não existe.</p>
  </Container>
);

export default withHeader(withFooter(NotFound));
