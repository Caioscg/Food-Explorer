import { Container, Logo, Input, Order } from "./styles";

import { PiSignOutBold } from "react-icons/pi"
import { FiMenu } from "react-icons/fi"

import { SearchInput } from "../searchInput";

import logoHeader from "../../assets/logo-header.svg"

import { useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth";

export function AdminHeader() {
    const navigate = useNavigate()

    const { signOut } = useAuth()

    function handleNewMeal() {
        navigate("/add")
    }

    function handleRefresh() {
        navigate("/")
    }

    return(
        <Container>
            <FiMenu size={32} className="menu"/>
            <Logo className="logo" onClick={() => handleRefresh()}>
                <img src={logoHeader} alt="Logo Food Explorer" />
                <div>
                    <span className="title">food explorer</span>
                    <span className="admin">admin</span>
                </div>
            </Logo>

            <SearchInput />

            <Order className="order" onClick={() => handleNewMeal()}>
                <span>Novo prato</span>
            </Order>

            <PiSignOutBold size={32} className="signOut" onClick={signOut}/>
        </Container>
    )
}