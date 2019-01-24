import React from "react";
import { withFooter } from "~/components/Footer";

import { Container, TitleWrapper, ContentWrapper, Content } from "./styles";

import eletricTower from "~/assets/eletricTower.png";
import plug from "~/assets/plug.png";
import solarEnergy from "~/assets/solarEnergy.png";
import lightBulb from "~/assets/lightBulb.png";
import notepad from "~/assets/notepad.png";

const Servicos = () => (
  <Container>
    <h1>Serviços qualificados para a sua necessidade.</h1>
    <TitleWrapper>
      <span>Projetos</span>
    </TitleWrapper>
    <ContentWrapper>
      <Content>
        <p>Média e alta tensão</p>
        <img src={eletricTower} alt="Média tensão" />
        <span>
          Projetos de subestações, postos de transformação, rede de distribuição
          particular
        </span>
      </Content>
      <Content>
        <p>Baixa tensão</p>
        <img src={plug} alt="Baixa tensão" />
        <span>Projetos elétricos residenciais e comerciais</span>
      </Content>
      <Content>
        <p>Energia solar</p>
        <img src={solarEnergy} alt="Energia solar" />
        <span>
          Projetos devidamente dimensionados de sistemas on-grid e off-grid
        </span>
      </Content>
      <Content>
        <p>Eficiência energética</p>
        <img src={lightBulb} alt="Eficiência energética" />
        <span>
          Otimização dos sistemas consumidores de energia em busca da
          sustentabilidade e redução de custos
        </span>
      </Content>
    </ContentWrapper>
    <TitleWrapper>
      <span>Consultoria</span>
    </TitleWrapper>
    <ContentWrapper>
      <Content>
        <p>Laudos técnicos</p>
        <img src={notepad} alt="Média tensão" />
        <span>
          Aterramento, Sistema de Proteção contra Descargas Atmosféricas
        </span>
      </Content>
    </ContentWrapper>
  </Container>
);

export default withFooter(Servicos);
