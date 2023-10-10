import { Route, Routes } from "react-router-dom"

import { Details } from "../pages/user/details"
import { Home } from "../pages/user/home"
import { UserMenu } from "../pages/user/menu"

export function UserRoutes() {
    return (
        <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<UserMenu />} />
        </Routes>
    )
}