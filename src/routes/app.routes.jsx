import { Route, Routes } from "react-router-dom"

import { Details } from "../pages/user/details"
import { AdminDetails } from "../pages/admin/details"
import { AddMeal } from "../pages/admin/AddMeal"
import { EditMeal } from "../pages/admin/EditMeal"
import { Home } from "../pages/user/home"
import { AdminHome } from "../pages/admin/home"
import { AdminMenu } from "../pages/admin/menu"
import { UserMenu } from "../pages/user/menu"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<Home />} />
            <Route path="/menu/" element={<UserMenu />} />
            <Route path="/admin/details" element={<AdminDetails />} />
            <Route path="/admin/add" element={<AddMeal />} />
            <Route path="/admin/edit" element={<EditMeal />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/menu" element={<AdminMenu />} />
        </Routes>
    )
}