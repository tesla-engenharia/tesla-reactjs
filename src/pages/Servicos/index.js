import React from "react";
import { withFooter } from "~/components/Footer";
import { withHeader } from "~/components/Header";

import { Container, TitleWrapper, ContentWrapper, Content } from "./styles";

import smartHouse from "~/assets/smartHouse.png";
import transformer from "~/assets/transformer.png";
import solarEnergy from "~/assets/solarEnergy.png";
import soundCard from "~/assets/soundCard.png";
import lightBulb from "~/assets/lightBulb.png";

const Servicos = () => (
  <Container>
    <h1>Serviços qualificados para a sua necessidade.</h1>
    <TitleWrapper>
      <span>Projetos</span>
    </TitleWrapper>
    <ContentWrapper>
      <Content>
        <p>SPDA</p>
        <img src={smartHouse} alt="SPDA" />
        <span>
          Elaboração de projeto dos sistemas de proteção contra descarga
          atmosférica
        </span>
      </Content>
      <Content>
        <p>Cabeamento estruturado</p>
        <img src={transformer} alt="Cabeamento estrutural" />
        <span>
          Importante para a valorização de qualquer imóvel e para um bom
          desempenho da infraestrutura de TI
        </span>
      </Content>
      <Content>
        <p>Energia solar</p>
        <img src={solarEnergy} alt="Energia solar" />
        <span>
          Projeto para utilização de energia solar para redução dos gastos de
          energia
        </span>
      </Content>
      <Content>
        <p>RDU e RDR</p>
        <img src={lightBulb} alt="Desenvolvimento de software" />
        <span>
          Elaboração para projeto de rede de distribuição urbana e rural
        </span>
      </Content>
      <Content>
        <p>Desenvolvimento de software</p>
        <img src={soundCard} alt="Desenvolvimento de software" />
        <span>
          Busca conceitos relevantes para a organização e padronização da
          qualidade no desenvolvimento de aplicações
        </span>
      </Content>
    </ContentWrapper>
  </Container>
);

export default withHeader(withFooter(Servicos));
