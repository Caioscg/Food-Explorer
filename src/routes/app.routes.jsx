import { Route, Routes } from "react-router-dom"

import { Details } from "../pages/user/details"
import { AdminDetails } from "../pages/admin/details"
import { AddMeal } from "../pages/admin/AddMeal"
import { EditMeal } from "../pages/admin/EditMeal"
import { Home } from "../pages/user/home"
import { AdminHome } from "../pages/admin/home"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignUp />}/>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/home/:id" element={<Home />} />
            <Route path="/admin/details/:id" element={<AdminDetails />} />
            <Route path="/admin/add" element={<AddMeal />} />
            <Route path="/admin/edit" element={<EditMeal />} />
            <Route path="/admin/home" element={<AdminHome />} />
        </Routes>
    )
}