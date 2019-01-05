import styled from 'styled-components';

import { colors, metrics } from '~/styles';

export const Bar = styled.div`
  height: 64px;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${colors.secundary};
`;

export const Toolbox = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-wrap: 0;

  max-width: ${metrics.contentWidth}px;
  margin: 0 ${metrics.baseMargin * 3}px;

  color: ${colors.white};
`;

export const Social = styled.div`
  display: flex;
  flex-wrap: 0;

  a {
    padding-left: ${metrics.basePadding}px;

    &:first-child {
      padding-left: 0;
    }

    img {
      height: 18px;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;

  button {
    padding: 0;
    border: 0;
    background: none;
    color: ${colors.white};
    height: 20px;
    width: 20px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Logo = styled.img`
  height: ${props => (props.mobile ? '35px' : '43px')};

  padding-right: ${metrics.baseMargin * 2}px;
  margin-right: ${metrics.baseMargin * 2}px;

  border-width: 0px 1px 0px 0px;
  border-style: solid;
  border-color: ${colors.whiteTransparent};
`;

export const Menu = styled.div`
  a {
    text-decoration: none;
    color: ${colors.whiteTransparent};
    font-size: 1.2em;
    font-weight: bold;
    margin-left: ${metrics.basePadding * 1.5}px;

    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: rgba(255, 255, 255, 0);

    transition: border-bottom-color 0.3s, padding-bottom 0.3s, color 0.3s;
    -webkit-transition: border-bottom-color 0.3s, padding-bottom 0.3s, color 0.3s;

    transition-timing-function: ease-in-out;

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      border-bottom-color: rgba(255, 255, 255, 1);
      color: ${colors.white};
      padding-bottom: 5px;
    }
  }
`;
