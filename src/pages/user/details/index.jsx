import { Container, GoBack, Meal } from "./styles"

import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import { Ingredients } from "../../../components/ingredients"

import { PiCaretLeft } from "react-icons/pi"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

import image from "../../../assets/Dish.png"

export function Details() {
    return (
        <Container>
            <Header />

            <main>
                <GoBack>
                    <PiCaretLeft size={32}/>
                    <span>voltar</span>
                </GoBack>

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
                        <div className="car">
                            <div className="amount">
                                <AiOutlineMinus size={24}/>
                                <span>01</span>
                                <AiOutlinePlus size={24}/>
                            </div>
                            <div className="price">
                                <span>incluir ∙</span>
                                <span>R$ 25,00</span>
                            </div>
                        </div>
                    </div>
                </Meal>
            </main>

            <Footer />
        </Container>
    )
}