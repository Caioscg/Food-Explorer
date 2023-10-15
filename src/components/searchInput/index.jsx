import { Container } from "./styles";

import { BsSearch } from "react-icons/bs"

export function SearchInput({ onChange, ...rest }) {
    return(
        <Container {...rest}>
            <BsSearch size={19.5}/>
            <input type="text" placeholder="Busque por pratos ou ingredientes" onChange={onChange}/>
        </Container>
    )
}