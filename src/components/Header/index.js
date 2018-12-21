import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { colors } from '~/styles';

import Tau from '~/assets/tau.png';

import facebook from '~/assets/social_Face.png';
import instagram from '~/assets/social_Insta.png';
import twitter from '~/assets/social_Twitter.png';
import youtube from '~/assets/social_youtube.png';

import { Container, Content, Navigation } from './styles';

const menuItems = [
  {
    name: 'Início',
    page: '/',
  },
  {
    name: 'Serviços',
    page: '/servicos',
  },
  {
    name: 'Blog',
    page: '/blog',
  },
];

export default class Header extends Component {
  state = {
    active: {
      name: 'Início',
      page: '/',
    },
  };

  handleClick(menuItem) {
    this.setState({ active: menuItem });
  }

  render() {
    const activeStyle = {
      color: colors.primary,
    };

    return (
      <Container>
        <Content>
          <Navigation>
            <img src={Tau} alt="Logotipo da Tesla" />

            <div className="menu">
              {menuItems.map(menuItem => (
                <Link
                  style={this.state.active.name === menuItem.name ? activeStyle : {}}
                  onClick={() => this.handleClick(menuItem)}
                  to={menuItem.page}
                >
                  {menuItem.name}
                </Link>
              ))}
            </div>
          </Navigation>

          <div className="social">
            <a href="https://www.facebook.com/TeslaEJ/">
              <img src={facebook} alt="Facebook da Tesla" />
            </a>
            <a href="https://www.instagram.com/teslaej/">
              <img src={instagram} alt="Instagram da Tesla" />
            </a>
            <a href="/">
              <img src={twitter} alt="Twitter da Tesla" />
            </a>
            <a href="/">
              <img src={youtube} alt="Canal do Youtube da Tesla" />
            </a>
          </div>
        </Content>
      </Container>
    );
  }
}
