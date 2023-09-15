import { Container, Brand, Section } from "./styles";

import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import { Meal } from "../../../components/meal"

import image from "../../../assets/brand.png"
import dishImage from "../../../assets/Dish.png"
import dessertImage from "../../../assets/dessert.png"
import drinkImage from "../../../assets/drink.png"

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

                <Section>
                    <h2>Refeições</h2>
                    <div className="meals">
                        <Meal 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                        />
                        <Meal 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                        />
                        <Meal 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                        />
                        <Meal 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                        />
                        <Meal 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                        />
                    </div>
                </Section>
                <Section>
                    <h2>Sobremesas</h2>
                    <div className="meals">
                        <Meal 
                            image={dessertImage} 
                            title="Peachy pastrie >" 
                            description="Delicioso folheado de pêssego com folhas de hortelã."
                            price="32,97"
                            favorite={false}
                        />
                        <Meal 
                            image={dessertImage} 
                            title="Peachy pastrie >" 
                            description="Delicioso folheado de pêssego com folhas de hortelã."
                            price="32,97"
                            favorite={false}
                        />
                        <Meal 
                            image={dessertImage} 
                            title="Peachy pastrie >" 
                            description="Delicioso folheado de pêssego com folhas de hortelã."
                            price="32,97"
                            favorite={false}
                        />
                        <Meal 
                            image={dessertImage} 
                            title="Peachy pastrie >" 
                            description="Delicioso folheado de pêssego com folhas de hortelã."
                            price="32,97"
                            favorite={false}
                        />
                        <Meal 
                            image={dessertImage} 
                            title="Peachy pastrie >" 
                            description="Delicioso folheado de pêssego com folhas de hortelã."
                            price="32,97"
                            favorite={false}
                        />

                    </div>
                </Section>
                <Section>
                    <h2>Bebidas</h2>
                    <div className="meals">
                        <Meal 
                            image={drinkImage} 
                            title="Tè d'autunno >" 
                            description="Chá de anis, canela e limão. Sinta o outono italiano."
                            price="19,97"
                            favorite={false}
                        />
                        <Meal 
                            image={drinkImage} 
                            title="Tè d'autunno >" 
                            description="Chá de anis, canela e limão. Sinta o outono italiano."
                            price="19,97"
                            favorite={false}
                        />
                        <Meal 
                            image={drinkImage} 
                            title="Tè d'autunno >" 
                            description="Chá de anis, canela e limão. Sinta o outono italiano."
                            price="19,97"
                            favorite={false}
                        />
                        <Meal 
                            image={drinkImage} 
                            title="Tè d'autunno >" 
                            description="Chá de anis, canela e limão. Sinta o outono italiano."
                            price="19,97"
                            favorite={false}
                        />
                        <Meal 
                            image={drinkImage} 
                            title="Tè d'autunno >" 
                            description="Chá de anis, canela e limão. Sinta o outono italiano."
                            price="19,97"
                            favorite={false}
                        />
                    </div>
                </Section>

            </main>

            <Footer />
        </Container>
    )
}