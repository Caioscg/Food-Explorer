import { Route, Routes } from "react-router-dom"

import { Details } from "../pages/user/details"
import { AdminDetails } from "../pages/admin/details"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/admin/details/:id" element={<AdminDetails />} />
        </Routes>
    )
}