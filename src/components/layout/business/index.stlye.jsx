/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { media, device } from '@/utils'; // 절대 경로 alias 사용

export const CardButton = styled.div`
  width: 100%;
  max-width: ${device.desktop + 70}px;
  display: flex;

  & > li {
    // margin-left: auto;
  }
`;

export const Card = styled.section`
  margin-left: 0;
  width: 100%;
  max-width: ${device.mobile}px;
  padding: 10px;
  height: fit-content;
  background: ${({theme})=>theme.bgColor[1]};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 10px 0px;
  display: flex;
  justify-content: center;
  flex-direction: row;

  ${media.tablet`
    flex-direction: column;
    width: fit-content;
  `}

  & > .imageBox {
    width: ${device.mobile / 3}px;
    height: ${device.mobile / 3}px;

    & > img {
      width: calc( 100% - 20px );
      height: calc ( 100% - 20px );
      margin-top: 5px;
      border-radius: 50%;
      padding: 10px;
    }
  }

  & > span {
    display: block;
    width: calc(100% - ${device.mobile / 3}px);
    padding: 10px;

    ${media.tablet`
      width: 100%;
    `}

    & > p {
      display: flex;
      flex-direction: row;
      gap: 5px;
      align-items: center;
      line-height: 1.5;
    }

    & > div {
      margin-top: 5px;
      display: flex;
      flex-direction: row;
      gap: 5px;
      margin-left: -2px;
      width: 100%;

      & > li {
        width: 45%;
        max-width: 75px;

        ${media.tablet`
          width: calc(50% - 2.5px);
          max-width: 100%;
        `}
      }
    }
  }
`;

export const Business = styled.div`
  position: fixed;
  width: calc(100% - 1.25rem);
  max-width: calc(${device.desktop}px + 4.5rem);
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 0px 10px;
  transition: top 0.2s ease-in, box-shadow 0.2s ease-in;
  z-index: 100;
  
  ${({ $height }) => css`
    top: -${$height}px;
  `}

  & > ${Card} {
    ${({ $height }) =>
      $height !== 0 &&
      css`
        box-shadow: none;
      `}
  }

  ${media.desktop`
    width: calc(100% - 0.6rem);
  `}
`;

export const Container = styled.div`
  display: flex;
`;
