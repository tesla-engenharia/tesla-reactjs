import styled from "styled-components";

import { colors, metrics } from "~/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${metrics.basePadding}px;
  padding-bottom: ${metrics.basePadding + 100}px;

  max-width: ${metrics.contentWidth}px;

  margin: 0 auto;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  position: relative;
  z-index: 0;

  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: ${colors.secundary};

  margin: ${metrics.baseMargin}px 0px;
  padding: ${metrics.basePadding}px;
  border-radius: ${metrics.baseRadius * 3}px;

  min-height: 200px;

  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-3px);

    cursor: pointer;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;

    background: black;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    opacity: 0.4;
    z-index: 1;

    border-radius: ${metrics.baseRadius * 3}px;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};

  padding-bottom: ${metrics.basePadding}px;

  z-index: 10;
`;

export const Info = styled.h4`
  color: ${colors.white};
  font-weight: normal;

  z-index: 10;

  span {
    font-weight: bold;
  }
`;

export const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex: 1;
  width: 100%;
  height: 100vh;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  z-index: 200;

  svg {
    width: 5%;
    height: 5%;

    color: ${colors.secundary};
  }
`;

export const BotaoMais = styled.div`
  display: flex;
  flex: 1;

  height: 40px;

  margin-top: ${metrics.baseMargin * 3}px;

  justify-content: center;

  svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
    color: ${colors.secundary};
  }
`;
