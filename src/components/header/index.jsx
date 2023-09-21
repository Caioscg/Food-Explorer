import { Container, Logo, Input, Order } from "./styles";

import { PiReceipt, PiSignOutBold } from "react-icons/pi"
import { FiMenu } from "react-icons/fi"

import { SearchInput } from "../searchInput";

import logoHeader from "../../assets/logo-header.svg"

export function Header() {
    return(
        <Container>
            <FiMenu size={32} className="menu"/>
            <Logo className="logo">
                <img src={logoHeader} alt="Logo Food Explorer" />
                <span>food explorer</span>
            </Logo>

            <SearchInput />

            <Order className="order">
                <PiReceipt size={32}/>
                <span>Pedidos</span>
                <span>(0)</span>
            </Order>

            <PiSignOutBold size={42} className="signOut"/>
        </Container>
    )
}