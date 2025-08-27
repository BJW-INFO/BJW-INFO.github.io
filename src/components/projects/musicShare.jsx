import { usePages } from "@/hooks";
import { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const MusicShare = forwardRef(({ main, handleHrefs }, ref) => {
    const { go } = usePages();

    const handleReadME = (e,param) => {
        e.preventDefault();
        go(`projects?current=${param}`);
    }

    return (<li ref={ref}>
        <h2 className="title">
            MusicShare
            <small>.team(5)</small>
        </h2>
        <p className="tip">
            <strong>Music, Connecting Us ALL</strong>
            <small>음악과 SNS를 함께 즐기는 커뮤니티 입니다.</small>
            <small>React, Flutter, SpringBoot 를 활용 하였습니다.</small>
        </p>
        {main
            ? (<>
                <div 
                className='readMeBtn'
                onClick={(e)=>handleReadME(e,'MusicShare')}
                >
                    <p>README</p>
                </div>
            </>
            )
            : (<>
                <div className="url">
                    {/* <div>
                        <FaGithub />
                        <a onClick={(e)=>handleHrefs(e,"https://github.com/theJE-project")}>
                            to GitHubPage
                        </a>
                    </div> */}
                    <div>
                        <FaGithub />
                        <a onClick={(e)=>handleHrefs(e,"https://github.com/theJE-project")}>
                            to GitHub
                        </a>
                    </div>
                    <div>
                        <CgFileDocument />
                        <a onClick={(e)=>handleHrefs(e,"https://docs.google.com/presentation/d/1qF-VFww1ggozeEBRSYD2sO2cZnSSmJZlJ4X1F7FQ5u0/edit?usp=sharing")}>
                            to Docs
                        </a>
                    </div>
                </div>
                <div className="desc">
                    <ul>
                        <li> 
                            DEZER API 를 SpringBoot에서 사용하여<br/>
                            React 와 Flutter 에서 효율적으로 사용합니다.
                        </li>
                        <li>SpringBoot의 email 기능을 사용 로그인을 구현 하였습니다.</li>
                        <li>
                            서버의 메모리를 사용하여, uuid를 임시 저장 후 <br/>
                            email 인증을 받아야 회원가입이 가능하게 구현 하였습니다.
                        </li>
                        <li>Hook을 Jotai로 만들어 컴포넌트 반복을 줄였습니다.</li>
                        <li>
                            Rotuer의 Loader를 사용하여 컴포넌트 반복을 줄였습니다.
                        </li>
                    </ul>
                </div >
                <div className='thing'>
                    <string>🔍Review</string>
                    <p>
                        이번 프로젝트는 SpringBoot와 Flutter를 처음으로 도입하여 진행한 경험이었습니다.
                        SpringBoot에서는 DEZER API 연동과 이메일 기반 로그인 및 회원가입 기능을 구현하였고, 서버 메모리를 활용해 UUID를 임시 저장한 뒤 이메일 인증을 거쳐야만 회원가입이 가능하도록 설계하여 보안성을 강화했습니다.
                        프론트엔드에서는 React와 Flutter 양쪽에서 API를 효율적으로 사용할 수 있도록 구조를 설계했으며, Jotai를 활용한 Hook과 Router Loader 기능을 통해 불필요한 컴포넌트 반복을 줄이고 코드의 가독성과 재사용성을 높일 수 있었습니다.
                        이 과정을 통해 새로운 기술 스택을 학습하면서 백엔드와 프론트엔드 간의 연동 방식을 깊이 이해할 수 있었고, 앞으로의 프로젝트에서 더 효율적이고 확장성 있는 아키텍처를 설계하는 데 큰 도움이 되었다고 생각합니다
                    </p>
                </div>
            </>
            )
        }
        <div className='technique'>
            <p> Flutter, React, React-Router-Dom, Jotai, TailwindCSS</p>
            <p> SpringBoot, MySQL, MyBatis, AWS(EC2), Supabase(storage) </p>
        </div>
    </li>
    )
});

export default MusicShare;