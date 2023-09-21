import { Container, Logo  } from "./styles";

import logoFooter from "../../assets/logo-footer.svg"

export function Footer() {
    return(
        <Container>
            <Logo className="logo">
                <img src={logoFooter} alt="Logo Food Explorer" />
                <span>food explorer</span>
            </Logo>

            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    )
}