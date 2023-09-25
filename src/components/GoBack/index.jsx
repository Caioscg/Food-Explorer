import { Container } from "./styles";

import { PiCaretLeft } from "react-icons/pi"

export function GoBack() {
    return(
        <Container to="/">
            <PiCaretLeft size={32}/>
            <span>voltar</span>
        </Container>
    )
}