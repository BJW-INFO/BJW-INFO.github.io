import { css } from "@emotion/react";
import { device } from "./device";

export const media = Object.keys(device).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (max-width: ${device[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});