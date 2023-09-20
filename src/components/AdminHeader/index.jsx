import { Container, Logo, Input, Order } from "./styles";

import { PiSignOutBold } from "react-icons/pi"
import { BsSearch } from "react-icons/bs"

import logoHeader from "../../assets/logo-header.svg"

export function AdminHeader() {
    return(
        <Container>
            <Logo>
                <img src={logoHeader} alt="Logo Food Explorer" />
                <div>
                    <span className="title">food explorer</span>
                    <span className="admin">admin</span>
                </div>
            </Logo>

            <Input>
                <BsSearch size={19.5}/>
                <input type="text" placeholder="Busque por pratos ou ingredientes"/>
            </Input>

            <Order>
                <span>Novo prato</span>
            </Order>

            <PiSignOutBold size={32}/>
        </Container>
    )
}