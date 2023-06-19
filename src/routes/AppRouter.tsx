import { Route, Routes } from "react-router-dom"
import { LoginHeader } from "@login/LoginHeader"
import { Description, Test } from "@pages/description"

export const AppRouter = () => {

    return(
        <>
            <Routes>
                <Route path="/login" element={<LoginHeader />} />
                <Route path="/description" element={<Description />} />
                <Route path="/test" element={<Test/>}/>
            </Routes>
        </>
    )
}