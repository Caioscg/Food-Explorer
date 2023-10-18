import { Container, Meal } from "./styles"

import { AdminHeader } from "../../../components/AdminHeader"

import { Footer } from "../../../components/footer"
import { Ingredients } from "../../../components/ingredients"
import { GoBack } from "../../../components/GoBack"

import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { api } from "../../../services/api"

export function AdminDetails() {
    const [ data, setData ] = useState("")

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        async function fetchMeal() {
            const response = await api.get(`/meals/${params.id}`)
            setData(response.data)
        }
        fetchMeal()
    }, [])

    function handleEditMeal(meal_id) {
        navigate(`/edit/${meal_id}`)
    }

    return (
        <Container>
            <AdminHeader />

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

            <Footer />
        </Container>
    )
}