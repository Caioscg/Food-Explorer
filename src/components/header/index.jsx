import { Container, Logo, Order } from "./styles";

import { PiReceipt, PiSignOutBold } from "react-icons/pi"
import { FiMenu } from "react-icons/fi"

import { SearchInput } from "../searchInput";

import logoHeader from "../../assets/logo-header.svg"

import { useAuth } from "../../hooks/auth";

export function Header() {
    const { signOut } = useAuth()

    return(
        <Container>
            <FiMenu size={32} className="menu"/>
            <Logo className="logo">
                <img src={logoHeader} alt="Logo Food Explorer" />
                <span>food explorer</span>
            </Logo>

            <SearchInput />

            <div className="mobileOrder">
                <PiReceipt size={32}/>
                <span>0</span>
            </div>

            <Order className="order">
                <PiReceipt size={32}/>
                <span>Pedidos</span>
                <span>(0)</span>
            </Order>

            <PiSignOutBold size={42} className="signOut" onClick={signOut}/>
        </Container>
    )
}