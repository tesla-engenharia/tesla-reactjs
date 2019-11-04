import React from "react";

import { Container, TitleWrapper, ContentWrapper, Service } from "./styles";
import { Link } from "react-router-dom";

export default function ListServicos({ lista }) {
  return (
    <Container>
      <h1>Serviços qualificados para a sua necessidade.</h1>
      <TitleWrapper>
        <span>Projetos</span>
      </TitleWrapper>
      <ContentWrapper>
        {lista.map(service => (
          <Service itemtype="https://schema.org/Service">
            <p itemprop="name">{service.title}</p>
            <img
              itemprop="image"
              src={process.env.REACT_APP_API_URL + "/files/" + service.icon_id}
              alt={service.title}
            />
            <span itemprop="description">{service.description}</span>
            <Link to={"/servicos/" + service.id}>
              <h3>Saiba mais</h3>
            </Link>
          </Service>
        ))}
      </ContentWrapper>
    </Container>
  );
}
