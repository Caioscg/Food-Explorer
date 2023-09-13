import { Container, Meal } from "./styles"

import { AdminHeader } from "../../../components/AdminHeader"

import { Footer } from "../../../components/footer"
import { Ingredients } from "../../../components/ingredients"
import { GoBack } from "../../../components/GoBack"

import image from "../../../assets/Dish.png"

export function AdminDetails() {
    return (
        <Container>
            <AdminHeader />

            <main>
                <GoBack />

                <Meal>
                    <img src={image} alt="Foto do prato" />

                    <div>
                        <h1>Salada Ravanello</h1>
                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                        <div className="ingredients">
                            <Ingredients name="alface"/>
                            <Ingredients name="cebola"/>
                            <Ingredients name="pão naan"/>
                            <Ingredients name="pepino"/>
                            <Ingredients name="rabanete"/>
                            <Ingredients name="tomate"/>
                        </div>
                       <button>Editar prato</button>
                    <input type="text" value="ola" readOnly={false}/>
                    </div>
                </Meal>
            </main>

            <Footer />
        </Container>
    )
}