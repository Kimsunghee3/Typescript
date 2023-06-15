import { LoginImg } from "@paths/login"
import { Backspace, Icons, LoginWrapper, IconWrap } from "@styled/loginStyle"

export const LoginHeader = () => {
    return(
        <>
            <LoginWrapper>
                        <Backspace src={LoginImg.backSpace} alt="backSpace" />
                <IconWrap>
                    <>
                        <Icons src={LoginImg.one} alt=""/>
                        <Icons src={LoginImg.afterLine} alt=""/>
                        니모닉 생성
                        <Icons src={LoginImg.afterLine} alt=""/>
                    </>
                    <>
                        <Icons src={LoginImg.two} alt="" />
                        <Icons src={LoginImg.afterLine} alt=""/>
                        니모닉 확인
                        <Icons src={LoginImg.afterLine} alt=""/>
                        
                    </>
                    <>
                        <Icons src={LoginImg.three} alt="" />
                        <Icons src={LoginImg.afterLine} alt=""/>
                        정보 입력
                        <Icons src={LoginImg.afterLine} alt=""/>
                        
                    </>
                    <>
                        <Icons src={LoginImg.four} alt="" />
                        지갑생성
                    </>
                </IconWrap>
            </LoginWrapper>
        </>
    )
}