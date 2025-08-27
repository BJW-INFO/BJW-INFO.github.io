import { useRef, useState, useCallback, useEffect } from "react";
import * as S from './index.stlye';
import { TextButton } from '../../textButton'
import { FaTimes } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbBrandGithub } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";

export function Business() {
    const buttonRef = useRef();
    const businessRef = useRef();
    const [business, setBusiness] = useState(0);

    const updateBusinessHeight = useCallback(() => {
        if (businessRef.current) {
            setBusiness(businessRef.current.clientHeight - buttonRef.current.clientHeight);
        }
    }, []);

    const handleBusiness = useCallback((e) => {
        e.preventDefault();
        setBusiness(business === 0 ? businessRef.current.clientHeight - 52 : 0);
    }, [business, setBusiness]);


    useEffect(() => {
        updateBusinessHeight();
        window.addEventListener('resize', updateBusinessHeight);
        const handleClickOutside = (e) => {
            if (businessRef.current && !businessRef.current.contains(e.target) &&
                buttonRef.current && !buttonRef.current.contains(e.target)) {
                updateBusinessHeight();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('resize', updateBusinessHeight);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [updateBusinessHeight]);

    return (
        <S.Container style={{ display: 'flex', justifyContent: 'center' }}>
            <S.Business ref={businessRef} $height={business}>
                <S.Card>
                    <div className="imageBox">
                        <img src="/myPhoto.Art.png"/>
                    </div>
                    <span>
                        <h3>
                            백종욱
                            <small style={{ fontSize: '0.75em' }}> (1995,31)</small>
                        </h3>
                        <p>
                            <BiSolidPhoneCall />
                            010-5549-1292
                        </p>
                        <p>
                            <IoMdMail />
                            beak19950102@gmail.com
                        </p>
                        <div>
                            <TextButton>
                                <TbBrandGithub />
                                <p>GIT HUB</p>
                            </TextButton>
                            <TextButton>
                                <CgFileDocument />
                                <p> DOC </p>
                            </TextButton>
                        </div>
                    </span>
                </S.Card>
                <S.CardButton ref={buttonRef}>
                    <TextButton
                        $notHover
                        $blink={business !== 0}
                        style={{ borderRadius: '0px 0px 10px 10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.25)' }}
                        onClick={handleBusiness}
                    >
                        {business !== 0 ? <BiSolidPhoneCall /> : <FaTimes />}
                    </TextButton>
                </S.CardButton>
            </S.Business>
        </S.Container>
    );
}
