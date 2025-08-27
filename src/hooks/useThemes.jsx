import { useAtom } from 'jotai'
import { themeAtom } from '../jotai'
import { MdOutlineWbSunny } from "react-icons/md";
import { AiFillMoon } from "react-icons/ai";

const publicTheme = {
    yellow: [
        '#F9A825', // 기준색 (태양빛 노랑)
        '#F57F17', // 짙은 머스타드 옐로우
        '#FFB300', // 선명한 골드 옐로우
        '#FFCA28', // 밝고 따뜻한 레몬 옐로우
    ],
    
    blue: [
        '#1976D2', // 딥 블루 (신뢰감)
        '#0288D1', // 라이트 블루 (모던함)
        '#0277BD', // 클래식 블루
        '#039BE5', // 스카이 블루
    ],
    
    teal: [
        '#00796B', // 딥 틸 (전문성)
        '#26A69A', // 프레시 틸
        '#4DB6AC', // 소프트 틸
        '#00ACC1', // 시안 틸
    ],
    
    purple: [
        '#7B1FA2', // 딥 퍼플 (창의성)
        '#8E24AA', // 바이올렛 퍼플
        '#AB47BC', // 미디엄 퍼플
        '#9C27B0', // 클래식 퍼플
    ],
    
    orange: [
        '#F57C00', // 딥 오렌지 (열정)
        '#FF9800', // 클래식 오렌지
        '#FB8C00', // 머터리얼 오렌지
        '#FF8F00', // 앰버 오렌지
    ]
}

const themePicker = {
    light:{
        ...publicTheme,
        icon: <MdOutlineWbSunny/>,
        bgColor:[
            '#ffffff', // 완전 밝은 흰색
            '#f9f9f9', // 매우 밝은 그레이 (거의 화이트)
            '#eaeaea', // 연한 그레이
            '#d5d5d5', // 밝은 중간 그레이
        ],
        textColor:[
            '#1c1c1c',
            '#3d3d3d',
            '#5f5f5f',
            '#959595',
        ],
    },
    dark:{
        ...publicTheme,
        icon: <AiFillMoon/>,
        bgColor:[
            '#1c1c1c',
            '#3d3d3d',
            '#5f5f5f',
            '#959595',
        ],
        textColor:[
            '#f4f4f4',
            '#d2d2d2',
            '#a6a6a6',
            '#636363',
        ],
    },
} 

export const useThemes = () => {
    const [getTheme, setTheme] = useAtom(themeAtom)
    const chageTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }
    return {
        name:getTheme,
        theme:themePicker[getTheme],
        chageTheme 
    }
}