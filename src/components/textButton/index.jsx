/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { media } from '@/utils';

const blink = keyframes`
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.1);
  }
`;

export const TextButton = styled.li`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background: ${({theme})=>theme.yellow[0]};
  color: ${({theme})=>theme.bgColor[4]};
  height: fit-content;

  ${({ $blink }) =>
    $blink &&
    css`
      animation: ${blink} 2s infinite;
    `}

  & > svg {
    top: 5px;
    font-size: 2rem;

    ${media.desktop`
      font-size: 1.5rem;
    `}
  }

  & > p {
    font-size: 0.8rem;
    font-weight: 700;
    opacity: 0;
    max-height: 0;
    transition: all 0.3s ease;
    overflow: hidden;
    visibility: hidden;
  }

  &:hover {
    ${({ $notHover }) =>
      !$notHover &&
      css`
        padding-bottom: 5px;

        & > p {
          opacity: 1;
          max-height: 20px;
          visibility: visible;
        }
      `}
  }
`;
