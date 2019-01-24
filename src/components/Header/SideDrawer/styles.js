import styled from "styled-components";

import { colors, metrics } from "~/styles";

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

  transform: ${props => (props.open ? "translateX(0)" : "translateX(-105%)")};
  transition: transform 0.3s ease-out;
  -webkit-transition: transform 0.3s ease-out;

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
  background-color: ${props =>
    props.open ? colors.lessDarkTransparent : colors.transparent};
  z-index: 100;

  display: ${props => (props.open ? "absolute" : "none")};

  transition: background-color 0.5s ease-in-out;
`;
