"use client";
import styled from "@emotion/styled"
import * as DefualStyle from "src/components/default"
import OhSaengkul from "src/components/projects/ohSaengkul";
import MusicShare from "src/components/projects/musicShare";
import ChapssaltteokMarket from "src/components/projects/chapssaltteokMarket";
import JavaMarket from "src/components/projects/javaMarket";
import { css } from "@emotion/react";
import { media } from "@/utils";
import React, { useEffect, useRef } from "react"; // Keep React import
import { usePages } from "@/hooks";
import BjwInfo from "src/components/projects/bjwInfo";

const portfolios = [
    { name: "OhSaengkul", component: OhSaengkul },
    { name: "MusicShare", component: MusicShare },
    { name: "JavaMarket", component: JavaMarket },
    { name: "ChapssaltteokMarket", component: ChapssaltteokMarket },
    { name: "BjwInfo", component: BjwInfo },
];

export default function Projects() {
    const itemRefs = useRef({});
    const { params, path, go } = usePages();
    const { current } = params;
    const isMain = !path ? true : false;

    useEffect(() => {
        console.log(itemRefs.current);
        if (current !== undefined && itemRefs.current[current]) {
            console.log(current);
            itemRefs.current[current].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [current])

    const handleHrefs = (e, path) => {
        e.preventDefault();
        window.open(path, '_blank');
    }

    console.log(portfolios);

    return (<>
        <DefualStyle.Section>
            <DefualStyle.Title>
                Portfolio
            </DefualStyle.Title>
            <Contents main={isMain}>{
                portfolios.map((o, k) => {
                    const ProtFolio = o.component;
                    return (<ProtFolio
                        key={k}
                        ref={(el) => (itemRefs.current[o.name] = el)}
                        main={isMain}
                        handleHrefs={handleHrefs}
                    />)
                })
            }</Contents>
        </DefualStyle.Section>
    </>)
}

const Contents = styled.ul`
    all: unset;
    width: calc( 100% - ${({ main }) => main ? '10' : '60'}px );
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px 5px;
    & > li {
        all: unset;
        display: flex;
        flex-direction: column;
        flex-basis: calc( 50% - 10px );
        background:${({ theme }) => theme.bgColor[2]};
        border-radius: 5px;
        & > .title, .tip, .desc, .url, .technique, 
        .thing, .thing > p
        {
            display: block;
            padding: 5px 10px;
        }
        & > .thing, .thing > p {
            line-height: 1.75;
        }

        & > .title {
            font-size: 1rem;
            border-radius: 5px 5px 0px 0px;
            background: ${({ theme }) => theme.bgColor[3]};
        }
        & > .tip {
            display: flex;
            flex-direction: column;
            gap: 1px;
            font-size: ${({ main }) => main ? '0.8rem' : '1rem'};
            font-weight: 500;
            & > strong, small {
                display: block;
            }
            & > strong {
                padding: 5px 0px;
                font-size: 1.25em;
                width: fit-content;
            }
        }
        & > .desc {
            font-size: 0.9rem;
            & > ul > li {
                padding-bottom: 0.75rem;
            }
        }
        & > .url {
            display: flex;
            flex-direction: column;
            gap: 5px;
            & > div {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 1rem;
                border-left: 5px solid ${({ theme }) => theme.yellow[1]};
                padding: 0px 10px;
                width: fit-content;
                background: ${({ theme }) => theme.yellow[0]};
                & > a {
                    color: white;
                    text-decoration: none;
                }
            }
        }
        & > .readMeBtn {
            display: flex;
            & > p {
                padding: 2.5px 10px;
                margin-left: auto;
                margin-right: 5px;
                border-radius: 5px;
                background:${({ theme }) => theme.bgColor[1]};
                border: 0.75px solid white
                color: white;
                font-weight: 700;
                font-size: 0.75rem;
                transition: all 0.3s ease;
                & :hover {
                    background:${({ theme }) => theme.yellow[0]};
                }
            }
        }
        & > .technique {
            margin-top: auto;
            margin-bottom: 10px;
            & > p {
                all: unset;
                width: fit-content;
                height: fit-content;
                display: block;
                padding: 5px 10px;
                font-size: 0.8rem;
                font-weight: 700;
                margin-left: 10px;
                margin-top: 5px;
                color: ${({ theme }) => theme.blue[3]};
                border: 1px solid ${({ theme }) => theme.blue[0]};
                border-left: 5px solid ${({ theme }) => theme.blue[0]};
                ${({ theme }) => css`
                    background: ${theme.bgColor[1]};
                `}
            }
            & > p:last-child {
                color: ${({ theme }) => theme.yellow[0]};;
                border: 1px solid ${({ theme }) => theme.yellow[0]};
                border-left: 5px solid ${({ theme }) => theme.yellow[0]};
            }
        }

        &:hover {
            & > .title {
                background:${({ theme }) => theme.yellow[0]};  
            }
        }
    }
    & > li:last-child {
        width: 100%;
        flex-basis: calc( 100% - 10px );
    }
    ${({ main }) => main
        ? (media.desktop`
            flex-direction: column;
        `)
        : (media.tablet`
            flex-direction: column;
        `)
    }
`