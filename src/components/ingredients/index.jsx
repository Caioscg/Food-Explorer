import { Container } from "./styles";

export function Ingredients({ name }) {
    return(
        <Container>
            <span>{name}</span>
        </Container>
    )
}