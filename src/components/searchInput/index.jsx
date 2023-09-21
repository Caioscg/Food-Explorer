import { Container } from "./styles";

import { BsSearch } from "react-icons/bs"

export function SearchInput() {
    return(
        <Container>
            <BsSearch size={19.5}/>
            <input type="text" placeholder="Busque por pratos ou ingredientes"/>
        </Container>
    )
}