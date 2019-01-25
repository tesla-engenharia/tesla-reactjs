import styled from "styled-components";

import { colors, metrics } from "~/styles";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;

  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${metrics.basePadding}px;
`;

export const Box = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${metrics.baseMargin * 6}px 0px;

  img {
    max-width: 45%;
  }
`;

export const Content = styled.div`
  display: block;
  width: 100%;

  color: ${({ escuro }) => (escuro ? colors.white : colors.secundary)};

  text-align: ${({ escuro }) => escuro && "right"};

  h2 {
    font-size: 2em;
  }

  p {
    font-size: 1.05em;
    margin-top: ${metrics.baseMargin}px;
  }

  a {
    display: inline-block;
    text-decoration: none;

    margin-top: 20px;
    padding: ${metrics.basePadding / 2}px ${metrics.basePadding * 3}px;

    border-radius: ${metrics.baseRadius * 2}px;

    font-weight: bold;
    font-size: 1.1em;
    color: ${colors.white};
    background-color: ${colors.primary};

    transition: opacity 150ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const BackgroundColor = styled.div`
  background-color: ${props => props.color};
  flex-grow: 1;
`;

export const Background = styled.div`
  background-color: ${colors.secundary};
  flex: 1;
`;
