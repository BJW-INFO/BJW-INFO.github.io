import { 
    FaHome,
    FaFileAlt,
    FaCode,
    FaCodeBranch,
} from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";

export const pages = [
    {   // 통합
        path: '/',
        name: '홈',
        icon: <FaHome/>,
    },
    {   // 이력서, 자소서 등?
        path: '/about',
        name: '이력',
        icon: <FaFileAlt/>,
    },
    {   // 사용할수 있는 언어, 프로그램
        path: '/stacks',
        name: '기술',
        icon: <FaCode/>,
    },
    {   // 했던 프로젝트들
        path: '/projects',
        name: '개발',
        icon: <FaCodeBranch />,   
    }
]

export const outPages = [
    { 
        path:'https://github.com/BJW-INFO', 
        name: 'GIT',
        icon:<TbBrandGithub/> 
    },
    { 
        path:'https://docs.google.com/document/d/1L7axwAL510Ba5UXaMO_tfpRUMxdqgrzBUbgTiFA4UnA/edit?usp=sharing', 
        name: 'DOC', 
        icon:<CgFileDocument/> 
    },
]