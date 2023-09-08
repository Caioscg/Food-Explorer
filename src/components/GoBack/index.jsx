import { Container } from "./styles";

import { PiCaretLeft } from "react-icons/pi"

export function GoBack() {
    return(
        <Container>
            <PiCaretLeft size={32}/>
            <span>voltar</span>
        </Container>
    )
}