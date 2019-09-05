import React from "react";
import { withFooter } from "~/components/Footer";
import { withHeader } from "~/components/Header";

import { Container, Box, Content, BackgroundColor, Background } from "./styles";

import MediaQuery from "react-responsive";

import { colors } from "~/styles";

import biblioteca from "~/assets/biblioteca.png";
import papeis from "~/assets/papeis.png";

import { Helmet } from "react-helmet";

const Home = () => (
  <Background>
    <Helmet>
      <title>Tesla Engenharia</title>
      <meta
        name="Tesla Engenharia"
        description="A Tesla Engenharia é a empresa júnior do curso de Engenharia Elétrica da Universidade Federal do Tocantins."
      />
      <meta
        name="keywords"
        content="Tesla Engenharia, Universidade Federal do Tocantins, UFT, MEJ, Movimento Empresa Júnior, empresa júnior"
      />
      />
    </Helmet>
    <BackgroundColor color={colors.white}>
      <Container>
        <Box>
          <Content itemtype="https://schema.org/LocalBusiness">
            <h1 itemprop="name">Engenharia Elétrica aplicada do jeito certo</h1>
            <p itemprop="description">
              A Tesla Engenharia é a empresa júnior do curso de Engenharia
              Elétrica da Universidade Federal do Tocantins.
            </p>
            <p>Não é familiar com o conceito de empresa júnior?</p>
            <a
              href="https://brasiljunior.org.br/conheca-o-mej"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clique aqui
            </a>
          </Content>
          <MediaQuery query="(min-width: 800px)">
            <img
              src={biblioteca}
              alt="Biblioteca da UFT"
              style={{ marginBottom: -250 }}
            />
          </MediaQuery>
        </Box>
      </Container>
    </BackgroundColor>
    <BackgroundColor color={colors.secundary} ultimo>
      <Container>
        <Box>
          <MediaQuery query="(min-width: 800px)">
            <img src={papeis} alt="Biblioteca da UFT" />
          </MediaQuery>
          <Content escuro>
            <h2>O que oferecemos?</h2>
            <p>
              Nós fazemos projetos, serviços e prestamos consultoria com a
              qualidade, expertise e profundidade de conhecimento técnico
              disponibilizados por uma Universidade Federal.
            </p>
            <p>
              Além disso, disponilizamos estes serviços à baixo custo. Confira!
            </p>
          </Content>
        </Box>
      </Container>
    </BackgroundColor>
  </Background>
);

export default withHeader(withFooter(Home));
