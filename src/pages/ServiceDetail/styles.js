import styled from "styled-components";

import { colors, metrics } from "~/styles";

export const DetailWrapper = styled.div``;

export const Portfolio = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;

  position: relative;
`;

export const Job = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  img {
    width: 350px;
  }
`;

export const JobTitle = styled.div`
  padding-bottom: 10px;
`;

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const JobDescription = styled.div`
  text-align: justify;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${metrics.basePadding}px 0px;
  padding-bottom: ${metrics.basePadding}px;

  max-width: ${metrics.contentWidth}px;

  margin: 0 auto;

  color: ${colors.secundary};

  img {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: ${({ big }) => (big ? "54" : "42")}px;
  font-weight: bold;
  padding: ${metrics.basePadding}px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px ${metrics.basePadding}px;
  padding-bottom: ${metrics.basePadding * 3}px;

  flex-wrap: wrap;
  flex-grow: 1;
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
  padding: 0px ${metrics.basePadding}px ${metrics.basePadding * 2}px;
  text-align: justify;
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
  blockquote,
  iframe {
    margin-bottom: ${metrics.basePadding}px;
  }

  a {
    text-decoration: none;
    color: ${colors.primary};
    font-weight: bold;
  }

  ul,
  ol {
    margin: 0 0 25px;
    padding-left: ${metrics.basePadding}px;
  }

  ol {
    list-style: decimal inside;
  }

  iframe {
    width: 100%;
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
