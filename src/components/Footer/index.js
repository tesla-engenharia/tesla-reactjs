import React from 'react';
import MediaQuery from 'react-responsive';

import { Container, Content, Column } from './styles';

const nome = 'Tesla Engenharia - Serviços e Consultoria';
const endereco = 'UFT - Campus Palmas, Bloco B, Sala 9';
const email = 'empresajuniortesla@gmail.com';
const telefone = '+55 63 99220-8502';

const Footer = () => (
  <Container>
    <Content>
      <MediaQuery query="(min-width: 500px)">
        <Column>
          <h4>{nome}</h4>
          <h5>{endereco}</h5>
        </Column>
        <Column>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={`tel:${telefone}`}>{telefone}</a>
        </Column>
      </MediaQuery>
      <MediaQuery query="(max-width: 500px)">
        <Column>
          <h4>{nome}</h4>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={`tel:${telefone}`}>{telefone}</a>
        </Column>
      </MediaQuery>
    </Content>
  </Container>
);

export default Footer;
