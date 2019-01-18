import React from "react";

import { Container, Box, Content, Image } from "./styles";

import biblioteca from "~/assets/biblioteca.png";

const Home = () => (
  <Container>
    <Box>
      <Content>
        <h1>Engenharia Elétrica aplicada do jeito certo</h1>
        <p>
          A Tesla Engenharia é a empresa júnior do curso de Engenharia Elétrica
          da Universidade Federal do Tocantins.
        </p>
        <p>
          Não é familiar com o conceito de empresa júnior?{" "}
          <a href="/">Clique aqui</a>
        </p>
      </Content>
      <Content>
        <Image>
          <img src={biblioteca} alt="Biblioteca da UFT" />
        </Image>
      </Content>
    </Box>
  </Container>
);

export default Home;
