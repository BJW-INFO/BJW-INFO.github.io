import { usePages } from "@/hooks";
import { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const JavaMarket = forwardRef(({ main, handleHrefs }, ref) => {
    const { go } = usePages();

    const handleReadME = (e,param) => {
        e.preventDefault();
        go(`projects?current=${param}`);
    }

    return (<li ref={ref}>
        <h2 className="title">
            JAVA-MARKET
            <small>.team(3)</small>
        </h2>
        <p className="tip">
            <strong>Hellow World, Java Start</strong>
            <small>JSP, Servlet, OrcaleSQL을 활용 실습 페이지 입니다.</small>
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
                    {/* <div>
                        <FaGithub />
                        <a onClick={(e)=>handleHrefs(e,"https://github.com/theJE-project")}>
                            to GitHub
                        </a>
                    </div> */}
                    <div>
                        <CgFileDocument />
                        <a onClick={(e)=>handleHrefs(e,"https://docs.google.com/presentation/d/1ir6cdoqqAdqrQxFi2KZ70a-32yo7cTOFFff4Hqnj9LE/edit")}>
                            to Docs
                        </a>
                    </div>
                </div>
                <div className="desc">
                    <ul>
                        <li>OracleSQL을 활용을 실습 하였습니다.</li>
                        <li>BLOB을 사용해, 이미지 저장을 구현 하였습니다.</li>
                        <li>
                            전반적인 프로젝트 전체를 담당하였으며,<br/> 
                            SQL, 서버 사이드 렌더링에 대한 공부가 되었습니다.
                        </li>
                    </ul>
                </div >
                <div className='thing'>
                    <string>🔍Review</string>
                    <p>
                    JSP와 Servlet을 처음 다뤄보았는데, 생각보다 재미있었습니다. 
                    OracleSQL을 사용하여 BLOB으로 이미지를 저장하는 기능을 구현하는 과정이 처음에는 다소 헷갈렸지만, 
                    결국 제대로 구현하면서 OracleSQL과 서버 사이드 렌더링에 대한 이해도가 확실히 높아졌습니다. 
                    Java와 JSP를 이용해 웹 애플리케이션을 개발하면서 처음에는 어려움을 느꼈지만, 
                    점차 프로젝트를 완성해가며 큰 성취감을 느꼈습니다. 
                    전체 프로젝트를 맡으면서 제가 만든 시스템이 실제로 작동하는 모습을 보니 자신감도 생겼고, 
                    앞으로 더 복잡한 프로젝트에도 도전할 수 있을 것 같습니다.
                    </p>
                </div>
            </>
            )
        }
        <div className='technique'>
            <p> JSP, OracleSQL, Java</p>
        </div>
    </li>
    )
});

export default JavaMarket;