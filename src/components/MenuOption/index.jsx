import { Container } from "./styles";

export function MenuOption({ title, onClick, ...rest }) {
    return(
        <Container onClick={onClick} {...rest}>
            <span>{title}</span>
        </Container>
    )
}