import { Container } from "./styles";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { LiaHeart, LiaHeartSolid } from "react-icons/lia"

export function MealCard({ image, title, description, favorite, price, ...rest }) {
    return(
        <Container {...rest}>
            {   
                favorite ? <LiaHeartSolid size={28} className="heart"  id="Fav"/> : <LiaHeart size={28} className="heart" id="noFav"/>
            }

            <img src={image} alt="Imagem do prato"/>

            <h3>{title}</h3>

            <span className="description">{description}</span>

            <div className="price">R$ {price}</div>

            <div className="incluir">
                <div className="amount">
                    <AiOutlinePlus size={24}/>
                    <span>01</span>
                    <AiOutlineMinus size={24}/>
                </div>
                <button>incluir</button>
            </div>

        </Container>
    )
}