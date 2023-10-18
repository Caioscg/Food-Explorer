import { Container } from "./styles";

import { PiPencilSimple } from "react-icons/pi"

import { api } from "../../services/api";

export function AdminMealCard({ data, ...rest }) {
    const avatarURL = `${api.defaults.baseURL}/files/${data.avatar}`

    return(
        <Container {...rest}>
            
            <PiPencilSimple size={34} className="edit"/>

            <img src={avatarURL} alt="Imagem do prato"/>

            <h3>{data.name}</h3>

            <span className="description">{data.description}</span>

            <div className="price">R$ {data.price}</div>

        </Container>
    )
}