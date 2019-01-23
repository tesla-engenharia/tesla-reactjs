import styled from "styled-components";

import { colors, metrics } from "~/styles";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  color: ${colors.secundary};

  h1 {
    padding-top: ${metrics.basePadding}px;

    text-align: center;
  }

  justify-content: center;

  max-width: 800px;
  margin: 0 auto;
  padding: ${metrics.basePadding}px;
`;

export const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 100px 0px 50px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0px;
    width: 100%;
    height: 2px;
    background-color: ${colors.primary};
    opacity: 0.2;
  }

  span {
    position: relative;
    text-transform: uppercase;
    color: ${colors.primary};
    background-color: ${colors.white};
    z-index: 2;
    padding: 0px 25px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: ${metrics.baseMargin * 2}px ${metrics.baseMargin * 4}px;
  padding-bottom: ${metrics.basePadding * 2}px;
  text-align: center;

  position: relative;
  z-index: 1;

  p {
    color: ${colors.dark};
    font-size: 24px;
    font-weight: bold;
  }

  img {
    height: 100px;
    overflow: hidden;
    margin: 30px 0px 25px;
  }

  span {
    font-size: 16px;
    max-width: 200px;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 20px;
    left: 0px;
    width: 100%;
    height: 50%;
    background-color: ${colors.light};
    z-index: -1;
    opacity: 0.4;
    border-radius: ${metrics.baseRadius}px;
  }
`;
