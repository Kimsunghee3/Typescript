import { LoginImg } from "@paths/login"
import { Backspace, Icons, LoginWrapper, IconWrap } from "@styled/loginStyle"
import { AccountProduce, LoadAccount} from "@array/Stepper"

interface walletInfo {
    imgPath: string
    content: string
}

export const LoginHeader = () => {

    const renderWalletHeader = (walletArray:walletInfo[]) => {
        return(
            walletArray.map((v,index, array) => {
                return(
                    <>
                        <Icons src={v.imgPath} alt=""/>
                        {v.content}
                        {index === array.length-1 ? <></> : <Icons src={LoginImg.afterLine} alt=""/>}
                    </>
                )
            })
        )
}
    return(
        <>
            <LoginWrapper>
                        <Backspace src={LoginImg.backSpace} alt="backSpace" />
                <IconWrap>
                    {renderWalletHeader(AccountProduce)}
                </IconWrap>
            </LoginWrapper>
        </>
    )
}
//