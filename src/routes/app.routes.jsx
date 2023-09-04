import { Route, Routes } from "react-router-dom"

import { Details } from "../pages/details"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    )
}