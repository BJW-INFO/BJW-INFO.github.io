"use client";
import { device, media, outPages } from "@/utils";
import styled from "@emotion/styled";
import * as DefualStyle from "src/components/default"
import { TextButton } from "src/components/textButton";
import { FaUser, FaBirthdayCake, FaMapMarkerAlt, FaPhoneAlt, FaUniversity } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Stacks from "./stacks";
import Projects from "./projects";
import About from "./about";

const profile = [
  { icon: FaUser, desc: `백종욱` },
  { icon: FaBirthdayCake, desc: `1995.01.02 ( 31 )` },
  { icon: FaMapMarkerAlt, desc: `서울시, 은평구` },
  { icon: FaPhoneAlt, desc: `010 - 5549 - 1292` },
  { icon: MdEmail, desc: `BEAK19950102@gmail.com` },
  { icon: FaUniversity, desc: `경민 전문 대학교 \n( 3년제, 게임 컨텐츠과 )` },
]

export default function Main() {
  
  const handleHrefs = (e,path) => {
    e.preventDefault();
    window.open(path, '_blank');
  } 

  return (
    <Container>
      <Grids>
        <Info>
          <div className="imageCard">
            <div className="background">
              <div />
            </div>
            <ul className="profile">{profile.map((o, i) => {
              const Svg = o.icon;
              return (
                <li key={i}>
                  <strong>
                    <Svg /> 
                  </strong>
                  {o.desc}
                </li>
              )
            })}</ul>
          </div>
          <div style={{ display: "flex", flexDirection: 'row', padding: "5px 0", gap: 5 }}>{
            outPages.map((o,i)=>
              <TextButton
              style={{ width: 75 }}
              onClick={(e)=>handleHrefs(e,o.path)}
              >
                {o.icon}
                <p>{o.name}</p>
              </TextButton>
            )  
          }</div>
        </Info>
      </Grids>
      <Grids max style={{ display: "flex", flexDirection: "column" }}> 
        <About main />
        <Stacks main />
        <Projects main />
      </Grids>
    </Container>
  );
}

const Info = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${device.extra - 20}px;
  min-width: ${device.extra - 20}px;
  position: sticky;
  top: 0px;
  & > .imageCard {
    background: ${({ theme }) => theme.bgColor[1]};
    width: 100%;
    border-radius: 10px;
    & > .profile {
      all: unset;
      display: flex;
      flex-direction: column;
      padding: 20px 5px;
      padding-top: 0px;
      width: calc(100% - 10px);
      & > li {
        all: unset;
        font-weight: 700;
        display: flex;
        align-items: center;
        width: 100%;
        white-space: pre-line;
        & > strong {
          margin-top: 5px;
          padding: 0px 10px;
          font-size: 1.2rem;
          color: ${({theme})=>theme.yellow[0]};
        }
      }
    }
    & > .background {
      margin: 10%;
      border-radius: 50%;
      overflow: hidden;
      background-color: ${({ theme }) => theme.bgColor[3]};
      transition: transform 0.6s ease;
      & > div {
        width: 100%;
        aspect-ratio: 1 / 1;
        min-height: 100px;ㄷ
        background-color: ${({ theme }) => theme.bgColor[3]};
        background-image: url('/myPhoto.Art.png');
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        transition: all 0.3s ease;
      }
    }
    &:hover {
      & > .background {
        transform: rotate(360deg);
        background-color: ${({ theme }) => theme.yellow[0]};
        & > div {
          background-image: url('/myPhoto.Art.png');
        }
      }
    }
  }
`

const Grids = styled.section`
  width: ${({ max }) => (max ? "auto" : `${device.extra}px`)};
  padding: 0px 10px;
  flex: ${({ max }) => (max ? 1 : "none")};
  ${media.tablet`
    width: 100% !important;
    flex: none !important;
    display: flex;
    justify-content: center;
  `}

  & > .main-title {
    display: flex;
    flex-direction: row;
    align-items: end;
    font-size: 1.75rem;
    font-weight: 700;
    & > strong {
      display: block;
      padding: 0px 10px;
      color: ${({theme})=>theme.yellow[0]};
      font-size: 2.3rem;
    }
  }

  & > .main-desc {
    font-weight: 700;
    & > b, strong {
      font-size: 1.5em;
      font-weight: 700;
    }
    & > strong {
      color: ${({theme})=>theme.yellow[0]};
    }
  }

  ${media.mobile`
      justify-content: flex-start; 
  `}
`;

const Container = styled(DefualStyle.Section)`
  display: flex;
  width: 100%;
  ${media.desktop`
    width: calc(100% - 60px);
  `}

  ${media.tablet`
    flex-direction: column;
  `}
`;
