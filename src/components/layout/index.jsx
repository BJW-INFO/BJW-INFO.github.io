import * as S from './index.style';
import { Header } from "./header";
import { Business } from "./business"
import { usePages } from '@/hooks';

export function Layout({ children }) {
    const { path } = usePages();
    return (<>
        <S.Container>
            <S.Main>
                { children }
            </S.Main>
            <Header />
        </S.Container>
        { path && <Business /> }
    </>)
}