import { Container } from "./styles";

import { PiPencilSimple } from "react-icons/pi"

export function AdminMealCard({ image, title, description, price }) {
    return(
        <Container>
            
            <PiPencilSimple size={34} className="edit"/>

            <img src={image} alt="Imagem do prato"/>

            <h3>{title}</h3>

            <span className="description">{description}</span>

            <div className="price">R$ {price}</div>

        </Container>
    )
}