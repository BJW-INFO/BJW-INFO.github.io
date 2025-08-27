import * as S from './index.style';
import { TextButton } from '../../textButton'
import { pages,outPages } from "@/utils";
import { useThemes, usePages } from "@/hooks";

export function Header() {
    const { state, path, go } = usePages();
    const { theme, chageTheme } = useThemes();

    const handleOnCkick = (e, path) => {
        e.preventDefault();
        go(path);
    }

    const handleHrefs = (e,path) => {
        e.preventDefault();
        window.open(path, '_blank');
    }

    if (!state) { return(<>오류?</>) }
    return (<>
        <S.Container $theme={theme}>
            <ul>
                <span>{state.name}</span>
                {pages.map((o, i) =>
                    <TextButton key={i} onClick={(e) => handleOnCkick(e, o.path)}>
                        {o.icon}
                        <p>{o.name}</p>
                    </TextButton>
                )}
                {path && outPages.map((o, i) =>
                    <TextButton 
                    key={i} 
                    className='linkBtn'
                    onClick={(e) => handleHrefs(e, o.path)}
                    >
                        {o.icon}
                        <p>{o.name}</p>
                    </TextButton>
                )}
                <TextButton 
                className='themeBtn'
                onClick={chageTheme}
                >
                    {theme.icon}
                    <p>테마</p>
                </TextButton>
            </ul>
        </S.Container>
    </>)
}
