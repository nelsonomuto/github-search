/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          padding: 20px;
        }
        * {
          box-sizing: border-box;
        }
      `}
    />
  );
}
