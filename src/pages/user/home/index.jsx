import { Container, Brand } from "./styles";

import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import { Meal } from "../../../components/meal"

import image from "../../../assets/brand.png"
import dishImage from "../../../assets/Dish.png"

export function Home() {
    return(
        <Container>
            <Header />

            <main>

                <Brand>
                    <img src={image} alt="" />
                    <div>
                        <h2>Sabores inigualáveis</h2>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                    </div>
                </Brand>

                <Meal 
                    image={dishImage} 
                    title="Salada Ravanello >" 
                    description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                    price="49,97"
                    favorite={false}
                />

            </main>

            <Footer />
        </Container>
    )
}