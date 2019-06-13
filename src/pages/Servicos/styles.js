import styled from "styled-components";

import { colors, metrics } from "~/styles";

export const Loading = styled.div`
  a {
    text-decoration: none;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: ${colors.secundary};
  }

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

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.secundary};

  h1 {
    padding: 0 ${metrics.basePadding}px;
    padding-top: ${metrics.basePadding}px;

    text-align: center;
  }

  max-width: 800px;
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 50px 0px 50px;

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

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 270px;
  max-width: 300px;
  margin: ${metrics.baseMargin * 2}px;
  padding-bottom: ${metrics.basePadding * 2}px;
  text-align: center;

  position: relative;
  z-index: 1;

  transition: transform 0.3s ease-out;

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
    font-size: 1.04rem;
    width: 100%;
    padding: 0px ${metrics.basePadding}px;
    flex: 1;
    color: ${colors.secundary};
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

  &:hover {
    transform: translateY(-3px);
  }
`;
