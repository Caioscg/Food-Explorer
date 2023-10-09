import { Route, Routes } from "react-router-dom"

import { AdminDetails } from "../pages/admin/details"
import { AddMeal } from "../pages/admin/AddMeal"
import { EditMeal } from "../pages/admin/EditMeal"
import { AdminHome } from "../pages/admin/home"
import { AdminMenu } from "../pages/admin/menu"

export function AdminRoutes() {
    return(
        <Routes>
            <Route path="/details/:id" element={<AdminDetails />} />
            <Route path="/add" element={<AddMeal />} />
            <Route path="/edit/:id" element={<EditMeal />} />
            <Route path="/" element={<AdminHome />} />
            <Route path="/menu" element={<AdminMenu />} />
        </Routes>
    )
}