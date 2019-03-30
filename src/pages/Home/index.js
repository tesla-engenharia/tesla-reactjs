import React from "react";
import { withFooter } from "~/components/Footer";
import { withHeader } from "~/components/Header";

import { Container, Box, Content, BackgroundColor, Background } from "./styles";

import MediaQuery from "react-responsive";
import { Slide } from "react-slideshow-image";

import { colors } from "~/styles";

import biblioteca from "~/assets/biblioteca.png";
import papeis from "~/assets/papeis.png";

const slideProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

const Home = () => (
  <Background>
    <BackgroundColor color={colors.white}>
      <Container>
        <Box>
          <Content>
            <h2>Engenharia Elétrica aplicada do jeito certo</h2>
            <p>
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
      <Slide
        {...slideProperties}
        style={{ margin: "60px auto", maxWidth: 800, padding: "0 20px" }}
      >
        <div
          className="each-slide"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
          }}
        >
          <div style={{ maxWidth: "70%", textAlign: "center", color: "white" }}>
            <strong>Missão</strong>
            <div>
              Oferecer serviços em Engenharia Elétrica que garantam segurança e
              qualidade técnica, disponíveis a um valor acessível para as
              diferentes classes sociais que formam a sociedade.
            </div>
          </div>
        </div>
        <div
          className="each-slide"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
          }}
        >
          <div style={{ maxWidth: "70%", textAlign: "center", color: "white" }}>
            <strong>Visão</strong>
            <div>
              Tornar-se uma empresa referência na atuação e qualificação
              profissional de estudantes de Engenharia Elétrica, capacitando-os
              para ter habilidades em administração, noções de mercado, gestão
              de pessoas, trabalho em equipe, conhecimentos técnicos em
              Engenharia, relacionamento interpessoal e excelência em execução
              de serviços.
            </div>
          </div>
        </div>
      </Slide>
    </BackgroundColor>
  </Background>
);

export default withHeader(withFooter(Home));
