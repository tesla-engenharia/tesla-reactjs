import styled from "styled-components";

import { colors, metrics } from "~/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  flex: 1;

  text-align: center;
  color: ${colors.secundary};

  img {
    height: 30vh;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    padding: 0px ${metrics.basePadding}px;
  }
`;
