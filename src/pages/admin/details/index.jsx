import { Container, Meal } from "./styles"

import { AdminHeader } from "../../../components/AdminHeader"

import { Footer } from "../../../components/footer"
import { Ingredients } from "../../../components/ingredients"
import { GoBack } from "../../../components/GoBack"
import { AdminMenu } from "../menu";

import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

import { api } from "../../../services/api"

import PropagateLoader from "react-spinners/PropagateLoader";

export function AdminDetails() {
    const [ data, setData ] = useState("")

    const [ loading, setLoading] = useState(false)

    const menuPage = useRef(null)

    const navigate = useNavigate()
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

    function handleEditMeal(meal_id) {
        navigate(`/edit/${meal_id}`)
    }

    function openMenu() {
        menuPage.current.id="visible"
    }

    function closeMenu() {
        menuPage.current.id="not-visible"
    }

    return (
        <Container>
            <AdminHeader onClick={openMenu}/>
            <div className="mob" ref={menuPage}>
                <AdminMenu onClick={closeMenu}/>
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
                            <button onClick={() => handleEditMeal(data.id)}>Editar prato</button>
                            </div>
                        </Meal>
                    }
                </main>
            }

            <Footer />
        </Container>
    )
}