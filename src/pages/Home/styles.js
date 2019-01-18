import styled from "styled-components";

import { colors, metrics } from "~/styles";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;

  max-width: 800px;
  margin: 0 auto;
`;

export const Box = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: ${metrics.baseMargin * 3}px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  color: ${colors.secundary};

  h1 {
    margin-bottom: ${metrics.baseMargin}px;
  }
`;

export const Image = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;

  flex: 1;

  img {
    width: 80%;
    position: absolute;
    top: 120px;
  }
`;
