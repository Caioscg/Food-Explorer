import { Container, Logo, Input, Order } from "./styles";

import { PiReceipt, PiSignOutBold } from "react-icons/pi"
import { BsSearch } from "react-icons/bs"

import logoHeader from "../../assets/logo-header.svg"

export function Header() {
    return(
        <Container>
            <Logo>
                <img src={logoHeader} alt="Logo Food Explorer" />
                <span>food explorer</span>
            </Logo>

            <Input>
                <BsSearch size={19.5}/>
                <input type="text" placeholder="Busque por pratos ou ingredientes"/>
            </Input>

            <Order>
                <PiReceipt size={32}/>
                <span>Pedidos</span>
                <span>(0)</span>
            </Order>

            <PiSignOutBold size={32}/>
        </Container>
    )
}