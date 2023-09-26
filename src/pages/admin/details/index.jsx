import { Container, Meal } from "./styles"

import { AdminHeader } from "../../../components/AdminHeader"

import { Footer } from "../../../components/footer"
import { Ingredients } from "../../../components/ingredients"
import { GoBack } from "../../../components/GoBack"

import image from "../../../assets/Dish.png"

import { useNavigate } from "react-router-dom"

export function AdminDetails() {
    const navigate = useNavigate()

    function handleEditMeal() {
        navigate("/admin/edit")
    }

    return (
        <Container>
            <AdminHeader />

            <main>
                <GoBack className="goBack"/>

                <Meal className="meal">
                    <img src={image} alt="Foto do prato" />

                    <div>
                        <h1 className="slide-right">Salada Ravanello</h1>
                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                        <div className="ingredients">
                            <Ingredients name="alface"/>
                            <Ingredients name="cebola"/>
                            <Ingredients name="pão naan"/>
                            <Ingredients name="pepino"/>
                            <Ingredients name="rabanete"/>
                            <Ingredients name="tomate"/>
                        </div>
                       <button onClick={() => handleEditMeal()}>Editar prato</button>
                    </div>
                </Meal>
            </main>

            <Footer />
        </Container>
    )
}