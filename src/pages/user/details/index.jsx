import { Container, Meal } from "./styles"

import { Header } from "../../../components/header"

import { Footer } from "../../../components/footer"
import { Ingredients } from "../../../components/ingredients"
import { GoBack } from "../../../components/GoBack"

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { PiReceipt } from "react-icons/pi"

import { api } from "../../../services/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function Details() {
    const [ data, setData ] = useState(null)

    const params = useParams()

    useEffect(() => {
        async function fetchMeal() {
            const response = await api.get(`/meals/${params.id}`)
            setData(response.data)
        }
        fetchMeal()
    }, [])

    return (
        <Container>
            <Header />

            <main>
                <GoBack className="goBack"/>

                {
                    data &&
                    <Meal className="meal">
                        <img src={`${api.defaults.baseURL}/files/${data.avatar}`} alt="Foto do prato" />

                        <div>
                            <h1 className="slide-right">{data.name}</h1>
                            <p>{data.description}</p>
                            <div className="ingredients">
                                {
                                    data.ingredients.map(ing => (
                                        <Ingredients
                                            key={String(ing.id)}
                                            name={ing.name}
                                        />
                                    ))
                                }
                            </div>
                            <div className="car">
                                <div className="amount">
                                    <AiOutlineMinus size={24}/>
                                    <span>01</span>
                                    <AiOutlinePlus size={24}/>
                                </div>
                                <button className="desktop">incluir ∙ R$ {data.price}</button>
                                <button className="mobile"><PiReceipt size={20}/>pedir ∙ R$ {data.price}</button>
                            </div>
                        </div>
                    </Meal>
                }
            </main>

            <Footer />
        </Container>
    )
}