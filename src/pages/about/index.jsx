import { usePages } from "@/hooks";
import * as DefualStyle from "src/components/default"
import { media } from "@/utils";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import tinycolor from "tinycolor2";

export default function About() {
    const { params, path, go } = usePages();
    const { current } = params;
    const isMain = !path ? true : false;

    return (<>
        <DefualStyle.Section>
            {!isMain && (<DefualStyle.Title> About Me</DefualStyle.Title>)}
            <Contents>
                <h2 className="main-title">
                    개발자<strong>백종욱</strong>입니다.
                </h2>
                <p className="main-desc">
                    <b>"불가능 하다"</b>는 말은 <b>"아직 방법을 찾지 못했다"</b> 마음가짐으로<br />
                    어제보다 나은 코드를 작성하기 위해 매일 한 걸음씩 나아가며,<br />
                    기술은 수단일 뿐
                    <strong> "문제를 해결하는 개발자" </strong>가 되기 위해 꾸준히 성장하고 있습니다.
                </p>

            </Contents>
            <DefualStyle.Title>Career</DefualStyle.Title>
            <Career>
                <li>
                    <h3>
                        조선 클라우드&nbsp;<small>(2023.11 ~ 2024.06)</small>
                    </h3>
                    <div className="decs">
                        <span>직무:&nbsp;</span>
                        <p>개발 및 유지보수</p>
                    </div>
                    <div className="decs">
                        <span>스택:&nbsp;</span>
                        <p>React, JavaScript, REST API, Git</p>
                    </div>
                    {!isMain && (
                        <div className="decs">
                            <span>업무:&nbsp;</span>
                            <p>
                                웹 기반 고객 민원 처리 시스템 개발 및 리팩토링<br />
                                기존 기능 개선 및 버그 수정<br />
                                사용자 피드백 기반 UI 개선
                            </p>
                        </div>
                    )}
                </li>
                <li>
                    <h3>
                        크라운드 터틀&nbsp;<small>(2020.3 ~ 2020.12)</small>
                    </h3>
                    <div className="decs">
                        <span>직무:&nbsp;</span>
                        <p>게임 클라이언트 개발</p>
                    </div>
                    <div className="decs">
                        <span>스택:&nbsp;</span>
                        <p>Unity, C#</p>
                    </div>
                    {!isMain && (
                        <div className="decs">
                            <span>업무:&nbsp;</span>
                            <p>
                                Unity 기반 게임 클라이언트 기능 개발<br />
                                UI/UX 구현 및 최적화<br />
                                서버 연동 기능 구현 및 테스트
                            </p>
                        </div>
                    )}
                </li>
            </Career>
            <DefualStyle.Title>Skill Up</DefualStyle.Title>
            <Career>
                <li>
                    <h3>
                        더좋은 컴퓨터 아카데미&nbsp;<small>(2025.01 ~ 2025.09)</small>
                    </h3>
                    <div className="decs">
                        <p>Java/Spring 기반 웹 개발 실무 중심 교육</p>
                    </div>
                    <div className="decs">
                        <p>프로젝트 기반 학습으로 실전 경험 강화</p>
                    </div>
                </li>
                <li>
                    <h3>
                        경일게임아카데미&nbsp;<small>(2021.11 ~ 2022.06)</small>
                    </h3>
                    <div className="decs">
                        <p>WindowForm, Unity을 활용한 2D/3D 게임 제작 학습</p>
                    </div>
                    <div className="decs">
                        <p>게임 클라이언트 구조와 물리 기반 시스템 이해</p>
                    </div>
                </li>
                <li>
                    <h3>
                        경민 전문 대학교&nbsp;<small>(2014.03 ~ 2020.03)</small>
                    </h3>
                    <div class="decs">
                        <p>Unity 기반 게임 개발 과정 수료</p>
                    </div>
                    <div class="decs">
                        <p>게임 기획 → 디자인 → 구현까지 전 과정을 아우르는 프로젝트 중심 실습</p>
                    </div>
                    <div class="decs">
                        <p>팀 프로젝트를 통해 멀티플레이 게임 프로토타입 개발 경험</p>
                    </div>
                </li>
            </Career>
        </DefualStyle.Section>
    </>)
}

const Career = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    & > li {
        & > h3 {
            color: ${({ theme }) => theme.yellow[2]};
            & > small {
                color: ${({ theme }) => theme.textColor[2]};
            }
        }
        & > .decs {
            display: flex;
            flex-direction: row;
            font-weight: 800;
            & > span {
                color: ${({ theme }) => theme.textColor[2]};
            }
        }
    }
`;

const Contents = styled.div`

    & > .main-title {
        display: flex;
        flex-direction: row;
        align-items: end;
        font-size: 1.75rem;
        font-weight: 700;
        & > strong {
        display: block;
        padding: 0px 10px;
        color: ${({ theme }) => theme.yellow[0]};
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
        color: ${({ theme }) => theme.yellow[0]};
        }
    }
`

/*
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
*/