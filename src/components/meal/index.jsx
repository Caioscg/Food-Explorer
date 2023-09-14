import { Container } from "./styles";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

export function Meal({ image, title, description, favorite, price }) {
    return(
        <Container>
            <img src={image} alt="Imagem do prato"/>
            <h3>{title}</h3>
            <span>{description}</span>
            <div className="preco">R$ {price}</div>
            <div className="incluir">
                <AiOutlinePlus />
                <span>01</span>
                <AiOutlineMinus />
                <button>incluir</button>
            </div>
        </Container>
    )
}