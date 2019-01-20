import styled from "styled-components";

import { colors } from "~/styles";

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
