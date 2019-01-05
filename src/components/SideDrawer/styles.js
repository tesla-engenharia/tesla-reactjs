import styled from 'styled-components';

import { colors, metrics } from '~/styles';

export const Drawer = styled.nav`
  height: 100%;
  background: ${colors.white};
  box-shadow: 1px 0px 7px ${colors.darkTransparent};
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  z-index: 200;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${metrics.basePadding}px;

  transform: translateX(-100%);
  transition: transform 0.3s ease-out;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.3em;

    padding-bottom: ${metrics.basePadding / 2}px;

    color: ${colors.secundary};

    transition: color 0.3s;
    -webkit-transition: color 0.3s;

    transition-timing-function: ease-in-out;

    &:hover {
      color: ${colors.primary};
    }
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${colors.lessDarkTransparent};
  z-index: 100;

  display: none;
`;
