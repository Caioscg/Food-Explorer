import { Container } from "./styles";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { LiaHeart, LiaHeartSolid } from "react-icons/lia"

import { api } from "../../services/api"

export function MealCard({ data, favorite, ...rest }) {

    async function removeFavorite() {
        await api.patch("/meals/1", { favorite: false })
    }
    async function addFavorite() {
        await api.patch("/meals/1", { favorite: true })
    }

    const avatarURL = `${api.defaults.baseURL}/files/${data.avatar}`

    return(
        <Container {...rest}>
            {   
                favorite ? 
                    <LiaHeartSolid 
                        size={28} 
                        className="heart"  
                        id="Fav"
                        onClick={removeFavorite}
                    /> 
                : 
                    <LiaHeart 
                        size={28} 
                        className="heart" 
                        id="noFav"
                        onClick={addFavorite}
                    />
            }

            <img src={avatarURL} alt="Imagem do prato"/>

            <h3>{data.name}</h3>

            <span className="description">{data.description}</span>

            <div className="price">R$ {data.price}</div>

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