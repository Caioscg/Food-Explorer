import { Container } from "./styles";

import { PiCaretLeft } from "react-icons/pi"

import { useNavigate } from "react-router-dom"

export function GoBack() {
    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    return(
        <Container onClick={() => handleBack()}>
            <PiCaretLeft size={32}/>
            <span>voltar</span>
        </Container>
    )
}