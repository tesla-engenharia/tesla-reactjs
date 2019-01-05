import React from 'react';

import MediaQuery from 'react-responsive';

// import { Container } from './styles';

const Blog = () => (
  <div>
    <h1>Eu sou o Blog</h1>
    <MediaQuery query="(max-width: 800px)">
      <p>Menu compacto</p>
    </MediaQuery>
    <MediaQuery query="(min-width: 800px)">
      <p>Menu expandido</p>
    </MediaQuery>
  </div>
);

export default Blog;
