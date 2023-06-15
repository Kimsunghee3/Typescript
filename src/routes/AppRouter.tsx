import { Route, Routes } from "react-router-dom"
import { LoginHeader } from "@login/LoginHeader"

export const AppRouter = () => {

    return(
        <>
            <Routes>
                <Route path="/login" element={<LoginHeader />} />
            </Routes>
        </>
    )
}