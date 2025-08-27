"use client";
import { media } from "@/utils";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import tinycolor from "tinycolor2";
import * as DefualStyle from "src/components/default"
import { usePages } from "@/hooks";
import { useEffect, useRef } from "react";

const language = [
    {
        name: "TypeScript",
        color: "#A3C9F1", // 파스텔 블루
        desc: "JavaScript의 상위 집합으로, 정적 타입을 제공합니다. 개발 시 오류를 미리 확인할 수 있습니다.",
        sub: ["React", "NextJS"],
    },
    {
        name: "Java",
        color: "#A3D1A1", // 파스텔 그린
        desc: "고성능 서버 및 엔터프라이즈 애플리케이션을 개발할 때 많이 사용되는 객체 지향 언어입니다.",
        sub: ["JSP", "SpringBoot", "jQuery", "MyBatis"],
    },
    {
        name: "JavaScript",
        color: "#F1E4A3", // 파스텔 옐로우
        desc: "웹 개발에서 가장 많이 사용되는 동적 타입의 프로그래밍 언어로, 클라이언트 및 서버 측에서 사용됩니다.",
        sub: ["React", "NextJS", "jQuery"],
    },
    {
        name: "Dart",
        color: "#A1F2C4", // 파스텔 민트
        desc: "Google에서 개발한 객체 지향 프로그래밍 언어로, 주로 Flutter와 함께 사용됩니다.",
        sub: ["Flutter"],
    },
    {
        name: "C",
        color: "#A8B9CC", // 파스텔 블루그레이
        desc: "시스템 프로그래밍, 임베디드 시스템 개발 등에 널리 사용되는 고전적인 프로그래밍 언어입니다.",
        sub: ["WindowForm"],
    },
    {
        name: "C++",
        color: "#B4D2E7", // 파스텔 블루
        desc: "C의 확장 언어로, 객체 지향 프로그래밍을 지원하며 고성능 애플리케이션 개발에 많이 사용됩니다.",
        sub: ["Unreal"],
    },
    {
        name: "C#",
        color: "#D1A1F2", // 파스텔 퍼플
        desc: "Microsoft의 .NET 프레임워크에서 사용되는 언어로, 게임 개발에 많이 사용되는 Unity와 호환됩니다.",
        sub: ["Unity", "WindowForm"],
    },
];

const technology = [
    {
        name: "React",
        color: "#A3D8F1", // 파스텔 블루
        desc: "컴포넌트 기반의 UI 라이브러리로, 빠르고 효율적인 웹 애플리케이션을 구축하는 데 사용됩니다.",
        sub: ["react-router-dom", "Redux", "Jotai", "Axios", "Emotion", "Styled-Component", "TailwindCSS"],
    },
    {
        name: "NextJS",
        color: "#C2C1F3", // 파스텔 퍼플
        desc: "서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG)을 지원하는 React 기반의 프레임워크입니다.",
        sub: ["React"],
    },
    {
        name: "Emotion",
        color: "#D7A1F2", // 파스텔 라벤더
        desc: "JavaScript에서 CSS를 작성할 수 있는 라이브러리로, 스타일을 컴포넌트에 직접 적용할 수 있습니다.",
        sub: ["React"],
    },
    {
        name: "TailwindCSS",
        color: "#A3F2D1", // 파스텔 민트
        desc: "유틸리티 클래스 기반의 CSS 프레임워크로, 빠르게 UI를 구축할 수 있도록 도와줍니다.",
        sub: ["React"],
    },
    {
        name: "StyledComponent",
        color: "#F2A1D1", // 파스텔 핑크
        desc: "CSS-in-JS 방식을 사용하여 JavaScript에서 스타일을 정의하고 관리할 수 있습니다.",
        sub: ["React"],
    },
    {
        name: "OracleSQL",
        color: "#F2D1A1", // 파스텔 오렌지
        desc: "Oracle 데이터베이스에서 사용하는 SQL로, 강력한 데이터 처리 기능을 제공합니다.",
        sub: ["JPA", "SpringBoot"],
    },
    {
        name: "MySQL",
        color: "#A1D8E7", // 파스텔 블루
        desc: "가장 널리 사용되는 관계형 데이터베이스 관리 시스템(RDBMS)으로, 웹 애플리케이션과 함께 자주 사용됩니다.",
        sub: ["Unity", "SpringBoot"],
    },
    {
        name: "PostgreSQL",
        color: "#A1D8D0", // 파스텔 터콰이즈
        desc: "오픈 소스 객체 관계형 데이터베이스로, 복잡한 데이터 모델링과 쿼리 성능을 제공합니다.",
        sub: ["SupaBase"],
    },
    {
        name: "MyBatis",
        color: "#D1F2A1", // 파스텔 라임
        desc: "SQL을 직접 작성하여 데이터베이스와 상호 작용할 수 있는 Java 기반의 ORM 프레임워크입니다.",
        sub: ["SpringBoot"],
    },
    {
        name: "SpringBoot",
        color: "#D1F2E7", // 파스텔 민트
        desc: "Java 기반의 웹 애플리케이션 프레임워크로, 빠르게 웹 애플리케이션을 개발할 수 있도록 도와줍니다.",
        sub: ["Java", "Spring Security"],
    },
    {
        name: "SupaBase",
        color: "#A1C1F2", // 파스텔 블루
        desc: "오픈 소스 Firebase 대안으로, SQL 데이터베이스와 인증 기능을 제공하는 서비스입니다.",
        sub: ["Java", "PostgreSQL"],
    },
    {
        name: "JSP",
        color: "#D1A1F2", // 파스텔 퍼플
        desc: "Java로 서버 측에서 HTML을 생성하는 웹 애플리케이션 기술입니다.",
        sub: ["Java"],
    },
    {
        name: "Unity",
        color: "#F2F1A1", // 파스텔 옐로우
        desc: "게임 개발에 사용되는 엔진으로, 2D 및 3D 게임을 개발할 수 있습니다.",
        sub: ["C", "C++", "C#"],
    },
    {
        name: "WindowForm",
        color: "#F2B1D1", // 파스텔 핑크
        desc: "Windows 환경에서 GUI 기반 애플리케이션을 개발할 수 있는 .NET 프레임워크입니다.",
        sub: ["C", "C++", "C#"],
    },
];

const devOps = [
    {
        name: "GitHub",
        color: "#D1A1F2", // 파스텔 그레이
        desc: "소스 코드 관리와 버전 관리를 위한 웹 기반 플랫폼입니다.",
        sub: ["GitHubPages", "SourceTree"],
    },
    {
        name: "AWS",
        color: "#F2E1A1", // 파스텔 옐로우
        desc: "Amazon Web Services는 클라우드 컴퓨팅 플랫폼으로, 다양한 서비스를 제공합니다.",
        sub: ["EC2", "S3"],
    },
    {
        name: "Thunder",
        color: "#A1E4F2", // 파스텔 블루 (예시)
        desc: "VS Code 확장형 가볍고 빠른 REST API 테스트 도구로, 컬렉션 및 환경 변수, GraphQL을 지원합니다.",
    },
];



// 이름과 배열을 쌍으로 묶음
const options = [
    ["Language", language],
    ["Technology", technology],
    ["DevOps", devOps],
];

export default function Stacks() {
    const itemRefs = useRef({});
    const { params, path, go } = usePages();
    const { current } = params;
    const isMain = !path ?true:false;

    const hendleItems = (e,path) => {
        e.preventDefault();
        go(`/stacks?current=${path}`)
    }
    
    useEffect(()=>{ if(current !== undefined && itemRefs.current[current]) {
        itemRefs.current[current].scrollIntoView({ behavior: "smooth", block: "start" });
    }},[current])

    return (
        <DefualStyle.Section>
            {options.map(([title, items], idx) => (
                <div key={idx}>
                    <DefualStyle.Title>{title}</DefualStyle.Title>
                    <List>
                        {items.map((o, i) => (
                            <ListItem 
                            key={i} bgColor={o.color} main={isMain}
                            ref={(el) => (itemRefs.current[o.name] = el)}
                            onClick={(e)=>hendleItems(e,o.name)}
                            >
                                <strong>{o.name}</strong>
                                {!isMain && o.desc && (<Description>{o.desc}</Description>)}
                                {!isMain && o.sub && (
                                    <SubList>
                                        {o.sub.map((subItem, subIndex) => (
                                            <SubListItem key={subIndex} palette={o.color}>{subItem}</SubListItem>
                                        ))}
                                    </SubList>
                                )}
                            </ListItem>
                        ))}
                    </List>
                </div>
            ))}
        </DefualStyle.Section>
    );
}

const List = styled.ul`
  all: unset;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
`;

const ListItem = styled.li`
  all: unset;
  border-radius: 5px;
  background-color: ${({ main, bgColor, theme }) => (main ? `${bgColor}` : `${theme.bgColor[2]}`)};
  display: block;
  margin: 5px 5px 5px ;
  padding: 10px 20px;
  width: ${({ main }) => (main ? "fit-content" : "40%")};
  color: ${({theme})=>theme.textColor[0]};
  strong {
    display: block;
    font-weight: 700; 
    color: black;
    background: ${({ bgColor }) => `${bgColor}`};  /* 'back-ground' -> 'background' */
    padding: ${({ main }) => (main ? "0px" : "5px 10px")};
    width: fit-content;
  }

  ${({ main }) => !main && css`
    ${media.tablet`
      width: calc(100% - 100px);
    `}
  `}
`;

const Description = styled.small`
  display: block;
  white-space: pre-line;
  margin-top: 5px;
  padding: 5px 0;
  border-top: 2px solid ${({theme})=>theme.textColor[2]};
`;

const SubList = styled.ul`
    all: unset;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    flex-wrap: wrap;
`;

const SubListItem = styled.li`
    all: unset;
    width: fit-content;
    height: fit-content;
    display: block;
    margin: 5px 5px 5px 0;
    padding: 5px 10px;
    font-size: 0.8rem;
    font-weight: 700;
    
    color: black;
    border: 1px solid ${({ palette }) => tinycolor(palette).brighten(12.5).toString()};
    border-left: 5px solid ${({ palette }) => tinycolor(palette).brighten(12.5).toString()};
    ${({ palette }) => css`
        background: ${tinycolor(palette).desaturate(0).toString()};  /* 색상 밝게 */
    `}
`;