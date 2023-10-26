import { Container } from "./styles";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { LiaHeart, LiaHeartSolid } from "react-icons/lia"

import { api } from "../../services/api"
import { useState } from "react";

export function MealCard({ data, favorite, onClick, ...rest }) {
    const [amount, setAmount] = useState(1)
    const [fav, setFav] = useState(favorite)

    async function removeFavorite() {
        await api.delete(`/favorites/${data.id}`)
        setFav(false)
    }
    
    async function addFavorite() {
        await api.post(`/favorites/${data.id}`)
        setFav(true)
    }

    function increase() {
        let x = amount + 1
        setAmount(x)
    }
    function decrease() {
        let x = amount - 1
        if (x < 0) return
        setAmount(x)
    }

    const avatarURL = `${api.defaults.baseURL}/files/${data.avatar}`

    return(
        <Container {...rest}>
            {   
                fav ? 
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
            <div className="details" onClick={onClick}>

                <img src={avatarURL} alt="Imagem do prato"/>

                <h3>{data.name}</h3>

                <span className="description">{data.description}</span>

                <div className="price">R$ {data.price}</div>
            </div>

            <div className="incluir">
                <div className="amount">
                    <AiOutlineMinus size={24} onClick={decrease}/>
                    <span>{amount}</span>
                    <AiOutlinePlus size={24} onClick={increase}/>
                </div>
                <button>incluir</button>
            </div>

        </Container>
    )
}
