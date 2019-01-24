import styled from "styled-components";

import { colors, metrics } from "~/styles";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-image: linear-gradient(
    to bottom right,
    ${colors.secundary} 20%,
    ${colors.primary} 120%
  );

  color: ${colors.darker};

  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;

  img {
    width: 70px;
    margin-bottom: ${metrics.baseMargin * 3}px;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  min-width: 270px;
  min-height: 300px;

  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;

  h1 {
    margin-bottom: ${metrics.baseMargin * 3}px;
    font-size: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      height: 35px;
      padding: 0px ${metrics.baseMargin}px;
      margin: 0px ${metrics.baseMargin * 2}px ${metrics.baseMargin}px;
      border-radius: ${metrics.baseRadius}px;
      border: 1px solid ${colors.light};
    }

    button {
      height: 35px;
      margin: 0px ${metrics.baseMargin * 2}px ${metrics.baseMargin}px;
      border-radius: ${metrics.baseRadius}px;
      border: 0;

      cursor: pointer;

      font-weight: bold;
      font-size: 1em;
      color: ${colors.white};

      background: ${colors.success};

      transition: opacity 0.2s ease-in-out;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  a {
    text-decoration: none;
    font-size: 0.8em;
    padding-top: ${metrics.basePadding / 2}px;

    color: ${colors.regular};
  }
`;
