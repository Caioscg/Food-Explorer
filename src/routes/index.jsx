import { BrowserRouter } from "react-router-dom"

import { UserRoutes } from "./user.routes"
import { AdminRoutes } from "./admin.routes"
import { AuthRoutes } from "./auth.routes"

import { useAuth } from "../hooks/auth"

export function Routes() {
    const { user } = useAuth()
    
    return (
        <BrowserRouter>
            { !user ? <AuthRoutes /> : user.is_admin ? <AdminRoutes /> : <UserRoutes /> }
        </BrowserRouter>
    )
}