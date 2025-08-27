// style.js
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { media } from '@/utils';

export const Container = styled.header`
    position: sticky;
    top: 0px;
    right: 20px;
    margin-left: 0px;
    height: 100vh;
    background: rgba(233, 227, 223, 0.25);
    transition: position 0.2s ease-in;

    ${media.desktop`
        position: fixed;
    `}

    & > ul {
        all: unset;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0px 10px;
        padding-bottom: 0px;
        transition: all 0.2s ease;
        gap: 5px;

        ${media.desktop`
            padding: 0px 5px;
        `}

        & > span {
            font-size: 1.25rem;
            font-weight: 700;
            color: ${({theme})=>theme.textColor[0]};

            ${media.desktop`
                font-size: 1rem;
            `}
        }
        & > .linkBtn {
            background: ${({theme})=>theme.blue[3]};
        }

        & > .themeBtn {
            background: ${({theme})=>theme.bgColor[3]};
        }
    }
`;
