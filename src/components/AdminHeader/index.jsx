import { Container, Logo, Input, Order } from "./styles";

import { PiSignOutBold } from "react-icons/pi"
import { FiMenu } from "react-icons/fi"

import { SearchInput } from "../searchInput";

import logoHeader from "../../assets/logo-header.svg"

export function AdminHeader() {
    return(
        <Container>
            <FiMenu size={32} className="menu"/>
            <Logo className="logo">
                <img src={logoHeader} alt="Logo Food Explorer" />
                <div>
                    <span className="title">food explorer</span>
                    <span className="admin">admin</span>
                </div>
            </Logo>

            <SearchInput />

            <Order className="order">
                <span>Novo prato</span>
            </Order>

            <PiSignOutBold size={32} className="signOut"/>
        </Container>
    )
}