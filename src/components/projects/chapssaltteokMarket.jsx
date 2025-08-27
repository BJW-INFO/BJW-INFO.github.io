import { usePages } from "@/hooks";
import { forwardRef } from "react";
import { CgFileDocument } from "react-icons/cg";

const ChapssaltteokMarket = forwardRef(({ main, handleHrefs }, ref) => {
    const { go } = usePages();

    const handleReadME = (e, param) => {
        e.preventDefault();
        go(`projects?current=${param}`);
    }

    return (<li ref={ref}>
        <h2 className="title">
            ChapssaltteokMarket
            <small>.solo(1)</small>
        </h2>
        <p className="tip">
            <strong>ちいかわ 직구를 더 편하게</strong>
            <small>특정 플랫폼의 배송 대행지 입력을 자동화 하였습니다.</small>
            <small>HTML로 최대한 가볍게 만들었습니다.</small>
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
                <div className="url">
                    <div>
                        <CgFileDocument />
                        <a onClick={(e) => handleHrefs(e, "https://docs.google.com/document/d/1IFPjt8nA_-7-Z8Z7VVrs2ypkEus9CS362W9SQDFAvUI/edit?pli=1&tab=t.0#heading=h.o99x1ikvd1ai")}>
                            to Docs
                        </a>
                    </div>
                </div>
                <div className="desc">
                    <ul>
                        <li>특정 사이트의 주문 메일과 크롤링을 통해 데이터를 가져옵니다.</li>
                        <li>HTML에서 크롤링을 하기에 CROS 우회 사이트로 우회 하였습니다.</li>
                        <li>
                            JavaScrpit 메서드를 자동으로 작성,<br />
                            크롬의 개발자 콘솔로 자동 작성 가능하게 만들었습니다.
                        </li>
                        <li>HTML로 만들어 최대한 가볍게 만들었습니다.</li>
                    </ul>
                </div >
                <div className='thing'>
                    <string>🔍Review</string>
                    <p>
                        ChapssaltteokMarket은 직구를 더 편하게 할 수 있도록 특정 플랫폼의 배송 대행지 입력을 자동화한 도구입니다.
                        HTML로 최대한 가볍게 만들었고, CORS 우회를 위해 AllOrigins를 사용하여 데이터를 크롤링할 수 있도록 했습니다.
                        특정 사이트의 주문 메일과 크롤링을 통해 자동으로 데이터를 가져오고,
                        JavaScript 메서드를 자동으로 작성하여 크롬 개발자 콘솔에서 바로 실행할 수 있게 했습니다.
                        JavaScript, HTML, CSS를 이용해 간단하면서도 효율적인 시스템을 구현했습니다.
                        첫 배포 사이트로서 자동화와 크롤링에 대한 경험을 쌓을 수 있었던 좋은 기회였습니다.

                    </p>
                </div>
            </>
            )
        }
        <div className='technique'>
            <p> JavaScript, HTML, CSS, Allorigins</p>
        </div>
    </li>
    )
});

export default ChapssaltteokMarket;