import styled from "styled-components";

import { colors, metrics } from "~/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${metrics.basePadding}px 0px;
  padding-bottom: ${metrics.basePadding}px;

  max-width: ${metrics.contentWidth}px;

  margin: 0 auto;

  color: ${colors.secundary};

  h1.grande {
    font-size: 54px;
    font-weight: bold;
    padding: ${metrics.basePadding}px;
  }

  h1.pequeno {
    font-size: 42px;
    font-weight: bold;
    padding: ${metrics.basePadding}px;
  }

  div.info {
    display: flex;
    flex-direction: row;
    padding: 0px ${metrics.basePadding}px;
    padding-bottom: ${metrics.basePadding * 3}px;

    flex-wrap: wrap;
    flex-grow: 1;

    p {
      padding: ${metrics.basePadding / 2}px 0px;
      margin-right: ${metrics.baseMargin * 4}px;

      display: flex;
      align-items: center;

      svg {
        margin-right: ${metrics.baseMargin / 2}px;
      }

      span {
        font-weight: bold;
        padding: 0px 5px;
      }

      &:last-child {
        padding: 0px;
      }
    }
  }

  img {
    max-width: 100%;
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

export const Content = styled.div`
  padding: ${metrics.basePadding * 3}px ${metrics.basePadding}px;

  line-height: 2;
  font-size: 19px;

  p,
  ul,
  ol,
  img,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote {
    margin-bottom: ${metrics.basePadding}px;
  }

  ul,
  ol {
    margin: 0 0 25px;
    padding-left: ${metrics.basePadding}px;
  }

  ol {
    list-style: decimal inside;
  }

  img {
    display: flex;
    flex: 1;
    margin: auto;
    padding: ${metrics.basePadding}px 0px;
  }

  blockquote {
    font-size: 21px;
    font-style: italic;
    margin-left: -15px;
    padding: 20px;
    border-left: 5px solid ${colors.light};
  }
`;
