import { Container, Brand, Section, Arrow } from "./styles";

import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import { MealCard } from "../../../components/MealCard"

import image from "../../../assets/brand.png"
import dishImage from "../../../assets/Dish.png"
import dessertImage from "../../../assets/dessert.png"
import drinkImage from "../../../assets/drink.png"

import { useRef } from 'react';
import { useNavigate } from "react-router-dom";

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export function Home() {
    const scrollMealList = useRef(null);
    const scrollDrinkList = useRef(null);
    const scrollDessertList = useRef(null);

    const paddingMeal = useRef(null);
    const paddingDrink = useRef(null);
    const paddingDessert = useRef(null);

    const navigate = useNavigate()

    function showMeal() {
        navigate("/details/1")
    }

    const handlePrevMealList = () => {
        paddingMeal.current.id="padding"
        scrollMealList.current.scrollBy({
        left: -420,
        behavior: 'smooth'
        });
    }

    const handleNextMealList = () => {
        paddingMeal.current.id="padding"
        scrollMealList.current.scrollBy({
            left: 420,
            behavior: 'smooth'
        });
    }

    const handlePrevDrinkList = () => {
        paddingDrink.current.id="padding"
        scrollDrinkList.current.scrollBy({
        left: -420,
        behavior: 'smooth'
        });
    }

    const handleNextDrinkList = () => {
        paddingDrink.current.id="padding"
        scrollDrinkList.current.scrollBy({
        left: 420,
        behavior: 'smooth'
        });
    }

    const handlePrevDessertList = () => {
        paddingDessert.current.id="padding"
        scrollDessertList.current.scrollBy({
        left: -420,
        behavior: 'smooth'
        });
    }

    const handleNextDessertList = () => {
        paddingDessert.current.id="padding"
        scrollDessertList.current.scrollBy({
            left: 420,
            behavior: 'smooth'
        });
    }

    return(
        <Container>
            <Header />

            <main>

                <Brand className="brand">
                    <img src={image} alt="" />
                    <div>
                        <h2>Sabores inigualáveis</h2>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                    </div>
                </Brand>

                <Section ref={paddingMeal} className="section">
                    <h2>Refeições</h2>
                    <div ref={scrollMealList} className="meals">
                        <MealCard 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={true}
                            onClick={() => showMeal()}
                        />
                        <MealCard 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                        <MealCard 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                        <MealCard 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                        <MealCard 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                        <MealCard 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                        <MealCard 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                    </div>
                    <Arrow
                        direction="prev"
                    >
                        <FiChevronLeft className="arrow" onClick={handlePrevMealList}/>
                    </Arrow>

                    <Arrow
                        direction="next"
                    >
                        <FiChevronRight className="arrow" onClick={handleNextMealList}/>
                    </Arrow>
                </Section>
                <Section ref={paddingDessert} className="section">
                    <h2>Sobremesas</h2>
                    <div ref={scrollDessertList} className="meals" id="dessert">
                        <MealCard 
                            image={dessertImage} 
                            title="Peachy pastrie >" 
                            description="Delicioso folheado de pêssego com folhas de hortelã."
                            price="32,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                        <MealCard 
                            image={dessertImage} 
                            title="Peachy pastrie >" 
                            description="Delicioso folheado de pêssego com folhas de hortelã."
                            price="32,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                        <MealCard 
                            image={dessertImage} 
                            title="Peachy pastrie >" 
                            description="Delicioso folheado de pêssego com folhas de hortelã."
                            price="32,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                        <MealCard 
                            image={dessertImage} 
                            title="Peachy pastrie >" 
                            description="Delicioso folheado de pêssego com folhas de hortelã."
                            price="32,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                        <MealCard 
                            image={dessertImage} 
                            title="Peachy pastrie >" 
                            description="Delicioso folheado de pêssego com folhas de hortelã."
                            price="32,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />

                    </div>
                    <Arrow
                        direction="prev"
                    >
                        <FiChevronLeft className="arrow" onClick={handlePrevDessertList}/>
                    </Arrow>

                    <Arrow
                        direction="next"
                    >
                        <FiChevronRight className="arrow" onClick={handleNextDessertList}/>
                    </Arrow>
                </Section>
                <Section ref={paddingDrink} className="section">
                    <h2>Bebidas</h2>
                    <div ref={scrollDrinkList} className="meals" id="drink">
                        <MealCard 
                            image={drinkImage} 
                            title="Tè d'autunno >" 
                            description="Chá de anis, canela e limão. Sinta o outono italiano."
                            price="19,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                        <MealCard 
                            image={drinkImage} 
                            title="Tè d'autunno >" 
                            description="Chá de anis, canela e limão. Sinta o outono italiano."
                            price="19,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                        <MealCard 
                            image={drinkImage} 
                            title="Tè d'autunno >" 
                            description="Chá de anis, canela e limão. Sinta o outono italiano."
                            price="19,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                        <MealCard 
                            image={drinkImage} 
                            title="Tè d'autunno >" 
                            description="Chá de anis, canela e limão. Sinta o outono italiano."
                            price="19,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                        <MealCard 
                            image={drinkImage} 
                            title="Tè d'autunno >" 
                            description="Chá de anis, canela e limão. Sinta o outono italiano."
                            price="19,97"
                            favorite={false}
                            onClick={() => showMeal()}
                        />
                    </div>
                    <Arrow
                        direction="prev"
                    >
                        <FiChevronLeft className="arrow" onClick={handlePrevDrinkList}/>
                    </Arrow>

                    <Arrow
                        direction="next"
                    >
                        <FiChevronRight className="arrow" onClick={handleNextDrinkList}/>
                    </Arrow>
                </Section>

            </main>

            <Footer />
        </Container>
    )
}