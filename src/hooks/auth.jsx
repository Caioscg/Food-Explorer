import { useState, useEffect, createContext, useContext } from "react";

import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [data, setData] = useState({})
    const [meals, setMeals] = useState([])

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
            localStorage.setItem("@foodexplorer:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`  // aplica o token para todas no cabeçalho de todas requisições desse user
            setData({ user, token }) // armazena no estado

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            }
            else {
                alert("Não foi possível entrar.")
            }
        }
    }

    async function signOut() {
        localStorage.removeItem("@foodexplorer:token")
        localStorage.removeItem("@foodexplorer:user")

        setData({}) // para levar pro auth routes
    }

    async function searchForMeal(search) {
        const response1 = await api.get(`/meals?name=${search}`)
        const response2 = await api.get(`/meals?ingredient=${search}`)

        const response = Object.assign(response1.data, response2.data)

        

        setMeals(response)
    }

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token")
        const user = localStorage.getItem("@foodexplorer:user")

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}` //aplica o token para todas as req

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user,
            meals,
            searchForMeal
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }