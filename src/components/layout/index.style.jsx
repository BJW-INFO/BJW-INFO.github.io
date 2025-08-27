import styled, { css } from "@emotion/styled";
import { media, device } from "@/utils";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: sticky;
  top:0;
  ${media.desktop`
    justify-content: flex-start;
  `}
`;

export const Main = styled.main`
  width: ${device.desktop}px;
  padding: 0px 5px;
  margin-top: 45px;
  ${media.desktop`
    width: 100%;
  `}
  & > h1 {
    display: block;
    font-size: 1.25rem;
    padding: 0.5rem;
    border-left: 10px solid rgb(255, 122, 48);
    padding-left: 10px;
    background: linear-gradient(
      to right,
      rgba(233, 227, 223, 0.25),
      rgba(233, 227, 223, 0)
    );
  }
`;