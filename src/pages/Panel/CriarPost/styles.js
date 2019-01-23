import styled from "styled-components";

import { metrics, colors } from "~/styles";

export const Container = styled.div`
  margin: ${metrics.baseMargin * 2}px auto;

  flex: 1;
  max-width: ${metrics.contentWidth}px;

  color: ${colors.white};

  padding: ${metrics.basePadding}px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    input,
    textarea,
    pre,
    button {
      margin-bottom: ${metrics.baseMargin * 2}px;
      padding: ${metrics.basePadding}px;
      border: 0;
      border-radius: ${metrics.baseRadius * 2}px;
      font-size: 15px;
      font-family: monospace;
    }

    input {
      height: 42px;
      width: 100%;
    }

    textarea {
      min-height: 150px;
      max-height: 150px;
      max-width: 100%;
      min-width: 100%;
    }

    button {
      font-weight: bold;
      font-size: 20px;
      color: ${colors.white};
      background: ${colors.success};
      cursor: pointer;

      width: 200px;

      &:hover {
        opacity: 0.8;
      }
    }

    pre {
      width: 100%;
      background: ${colors.danger};
    }
  }
`;
