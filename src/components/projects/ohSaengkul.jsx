import { usePages } from "@/hooks";
import { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

export const OhSaengkul = forwardRef(({ main, handleHrefs }, ref) => {
    const { go } = usePages();

    const handleReadME = (e,param) => {
        e.preventDefault();
        go(`projects?current=${param}`);
    }

    return (<li ref={ref}>
        <h2 className="title">
            오생꿀
            <small>.team(5)</small>
        </h2>
        <p className="tip">
            <strong>오늘의 생활 꿀팁 !</strong>
            <small>Supabase 와 React를 활용한 지역 기반 커뮤니티 사이트 입니다.</small>
        </p>
        {main
            ? (<>
                <div 
                className='readMeBtn'
                onClick={(e)=>handleReadME(e,'OhSaengkul')}
                >
                    <p>README</p>
                </div>
            </>)
            : (<>
                <div className="url">
                    <div>
                        <FaGithub />
                        <a onClick={(e) => handleHrefs(e, "https://thejoeunthird-admin.github.io/")}>
                            to GitHubPage
                        </a>
                    </div>
                    <div>
                        <FaGithub />
                        <a onClick={(e) => handleHrefs(e, "https://github.com/thejoeunthird-admin/thejoeunthird-admin.github.io")}>
                            to GitHub
                        </a>
                    </div>
                    <div>
                        <CgFileDocument />
                        <a onClick={(e) => handleHrefs(e, "https://docs.google.com/presentation/d/15wqRm3tmIuotjyaPodgUVXgtVZMOpVvcCa01lTzituI/edit?usp=sharing")}>
                            to Docs
                        </a>
                    </div>
                </div>
                <div className="desc">
                    <ul>
                        <li>사용자의 위치를 기반으로 지역을 찾을 수 있도록 KakaoMap과 Geolocation 기능을 통합했습니다.</li>
                        <li>Supabase와 PostgreSQL을 활용해, 소셜 로그인과 실시간 채팅 시스템을 구현했습니다.</li>
                        <li>재사용 가능한 컴포넌트를 위해 React Hook을 설계하여 코드의 효율성과 유지보수를 용이하게 했습니다.</li>
                        <li>모든 화면 크기에 맞춰 자동으로 적응하는 반응형 디자인을 적용했습니다.</li> 
                    </ul>
                </div >
                <div className='thing'>
                    <string>🔍Review</string>
                    <p>
                        이번 프로젝트는 다양한 기술 스택을 활용해 실제 사용 가능한 기능을 구현하는 데 중점을 두었습니다. 
                        KakaoMap과 Geolocation을 결합하여 사용자에게 실시간으로 지역을 기반으로 한 서비스를 제공할 수 있었고, 
                        Supabase와 PostgreSQL을 통해 빠르고 안정적인 소셜 로그인 및 채팅 시스템을 구현했습니다. 
                        상태 관리에 있어서 Redux를 사용해, 복잡한 상태 관리 로직을 간소화하고, 
                        애플리케이션 성능을 최적화할 수 있었습니다. 
                        또한 반응형 디자인과 실시간 동기화 기능을 적용해 모바일 환경에서도 원활한 사용자 경험을 제공할 수 있었습니다. 
                        전체적으로 개발과 배포가 수월하게 진행되어, 기술적인 성장뿐 아니라 실용적인 결과도 얻을 수 있었습니다.
                    </p>
                </div>
            </>)
        }
        <div className='technique'>
            <p> React, React-Router-Dom, Redux</p>
            <p> Supabase, PostgreSQL </p>
        </div>
    </li>)
});

export default OhSaengkul;