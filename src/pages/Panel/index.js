import React from 'react';

import {
  FaPlus, FaSignOutAlt, FaPen, FaTrash,
} from 'react-icons/fa';

import {
  Container, SideBar, Items, Item,
} from './styles';

const Panel = () => (
  <Container>
    <SideBar>
      <Items>
        <Item href="#" texto="Criar um post">
          <FaPlus />
        </Item>
        <Item href="#" texto="Editar um post">
          <FaPen />
        </Item>
        <Item href="#" texto="Deletar um post">
          <FaTrash />
        </Item>
      </Items>
      <Items>
        <Item href="#" texto="Sair">
          <FaSignOutAlt />
        </Item>
      </Items>
    </SideBar>
  </Container>
);

export default Panel;
