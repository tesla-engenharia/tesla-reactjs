import styled from "styled-components";

import { colors, metrics } from "~/styles";

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;

  background-color: ${colors.darker};
`;

export const SideBar = styled.div`
  height: 100%;
  width: 43px;

  border-right: 1px solid ${colors.dark};
  padding: ${metrics.baseMargin}px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.a`
  text-decoration: none;
  color: ${colors.white};

  cursor: pointer;

  font-weight: bold;
  font-size: 1.1em;

  margin-bottom: ${metrics.baseMargin * 1.2}px;

  position: relative;

  z-index: 2;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
      content: '${props => props.texto || ""}';
      display: none;

      white-space:nowrap;

      top: -7px;
      left: -10px;

      background: ${colors.darkTransparent};
      border-radius: ${metrics.baseRadius}px;

      padding: 5px 0;
      padding-left: 40px;
      padding-right: 15px;

      position: absolute;
      z-index: -1;
    }

    &:hover:before{
      display: inherit;
    }
`;
