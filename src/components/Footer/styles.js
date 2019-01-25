import styled from "styled-components";

import { colors, metrics } from "~/styles";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${colors.secundary};

  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Content = styled.div`
  height: 100%;
  margin: auto;

  padding: 0px ${metrics.basePadding}px;

  max-width: ${metrics.contentWidth}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  color: ${colors.white};

  justify-content: center;
  align-items: flex-end;

  h4 {
    font-size: 13px;
    padding-bottom: ${metrics.basePadding / 3}px;
  }

  h5 {
    font-weight: normal;

    font-size: 13px;
  }

  a {
    text-decoration: none;
    color: ${colors.white};
    font-size: 13px;
    padding-bottom: 6.667px;

    &:last-child {
      padding-bottom: 0;
    }
  }

  &:first-child {
    align-items: flex-start;
  }
`;

export const BottomSpacer = styled.div`
  padding-bottom: 100px !important;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
