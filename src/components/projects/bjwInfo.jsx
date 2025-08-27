import { usePages } from "@/hooks";
import { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const BjwInfo = forwardRef(({ main, handleHrefs }, ref) => {
    const { go } = usePages();

    const handleReadME = (e, param) => {
        e.preventDefault();
        go(`projects?current=${param}`);
    }

    return (<li ref={ref}>
        <h2 className="title">
            BJW-INFO
            <small>.solo(1)</small>
        </h2>
        <p className="tip">
            <strong>자신을 소개하는 시간</strong>
            <small>Next.JS를 사용하여 서버 사이드 렌더링을 경험 하였습니다.</small>
            <small>현재 페이지 입니다.</small>
        </p>
        {main
            ? (<>
                <div
                    className='readMeBtn'
                    onClick={(e) => handleReadME(e, 'MusicShare')}
                >
                    <p>README</p>
                </div>
            </>
            )
            : (<>
                <div className="desc">
                    <ul>
                        <li>서버 사이드 렌더링을 해보고 싶어 제작 하였습니다.</li>
                        <li>기존 Styled-Components를 자주 활용하여, 비슷한 Emotion으로 구현 했습니다.</li>
                        <li>최대한 공통 컴포넌트를 사용하여 구현하였습니다.</li>
                        <li>간단하게 테마 모드를 적용 하였습니다.</li>
                    </ul>
                </div >
                <div className='thing'>
                    <string>🔍Review</string>
                    <p>
                        BJW-INFO 프로젝트는 Next.js를 사용해서 서버 사이드 렌더링(SSR)을 경험한 프로젝트입니다. 처음으로 SSR을 직접 구현하면서 React의 렌더링 방식과 서버 사이드에서 데이터를 처리하는 방법을 더 잘 이해할 수 있었어요.
                        기존에 Styled-Components를 자주 사용했지만, Emotion을 사용해서 스타일링을 구현하면서 CSS를 효율적으로 관리하고, 여러 페이지에서 공통된 스타일을 쉽게 적용할 수 있었습니다.
                        또한, 테마 모드를 적용해서 사용자 경험을 개선하고, 공통 컴포넌트를 최대한 재사용하면서 코드의 일관성을 유지할 수 있었죠.
                        이 프로젝트를 통해 Next.js와 SSR의 장점을 직접 경험하고, React의 기본적인 렌더링 방식 외에도 서버 사이드 렌더링의 필요성을 깨달을 수 있었습니다.
                        간단하게 구현한 테마 모드와 공통 컴포넌트 덕분에 프로젝트 유지보수성과 확장성에 도움이 될 것 같아요.
                    </p>
                </div>
            </>
            )
        }
        <div className='technique'>
            <p>NextJS, React, Emotion, Jotai, tinycolor2</p>
        </div>
    </li>
    )
});

export default BjwInfo;