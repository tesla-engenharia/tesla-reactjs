import React from 'react';

import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Header = () => (
  <div>
    <div>
      <h1>Tesla</h1>

      <Link to="/">Início</Link>
      <Link to="/servicos">Serviços</Link>
      <Link to="/blog">Blog</Link>
    </div>

    <div>
      <p>Redes Sociais</p>
    </div>
  </div>
);

export default Header;
