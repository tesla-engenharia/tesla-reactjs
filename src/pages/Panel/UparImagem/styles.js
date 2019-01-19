import styled from "styled-components";

import { metrics, colors } from "~/styles";

export const Container = styled.div`
  margin: ${metrics.baseMargin * 2}px auto;

  flex: 1;
  max-width: ${metrics.contentWidth}px;

  color: ${colors.white};

  form {
    display: flex;

    justify-content: center;

    input {
      border: 1px solid ${colors.light};
      padding: ${metrics.basePadding}px;
      border-radius: ${metrics.baseRadius * 2}px;

      color: ${metrics.white};

      flex: 1;
    }

    button {
      margin-left: ${metrics.baseMargin * 2}px;
      padding: 0px ${metrics.basePadding}px;

      border: 0;
      background: ${colors.success};
      border-radius: ${metrics.baseRadius * 2}px;

      color: ${colors.white};

      cursor: pointer;

      svg {
        width: 30px;
        height: 20px;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }

  p {
    padding: ${metrics.basePadding}px 0px;

    a {
      text-decoration: none;
      color: ${colors.primary};
    }
  }
`;
