import { Container, Meal } from "./styles"

import { Header } from "../../../components/header"

import { Footer } from "../../../components/footer"
import { Ingredients } from "../../../components/ingredients"
import { GoBack } from "../../../components/GoBack"
import { UserMenu } from "../menu"

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { PiReceipt } from "react-icons/pi"

import { api } from "../../../services/api"
import { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"

import PropagateLoader from "react-spinners/PropagateLoader";

export function Details() {
    const [ data, setData ] = useState(null)

    const [ loading, setLoading] = useState(false)

    const menuPage = useRef(null)

    const params = useParams()

    useEffect(() => {
        async function fetchMeal() {
            setLoading(true)

            const response = await api.get(`/meals/${params.id}`)
            setData(response.data)

            setLoading(false)
        }
        fetchMeal()
    }, [])

    function openMenu() {
        menuPage.current.id="visible"
    }

    function closeMenu() {
        menuPage.current.id="not-visible"
    }

    return (
        <Container>
            <Header onClick={openMenu}/>
            <div className="mob" ref={menuPage}>
                <UserMenu onClick={closeMenu}/>
            </div>

            {
                loading ? <PropagateLoader
                            color={"#065E7C"}
                            loading={loading}
                            size={25}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            className="spinner"
                        />
                :
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
            }

            <Footer />
        </Container>
    )
}