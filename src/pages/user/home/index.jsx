import { Container, Brand, Section, Arrow } from "./styles";

import { Header } from "../../../components/header"
import { Footer } from "../../../components/footer"
import { Meal } from "../../../components/meal"

import image from "../../../assets/brand.png"
import dishImage from "../../../assets/Dish.png"
import dessertImage from "../../../assets/dessert.png"
import drinkImage from "../../../assets/drink.png"

import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export function Home() {
    const scrollMealList = useRef(null);
    const scrollDrinkList = useRef(null);
    const scrollDessertList = useRef(null);

    const handlePrevMealList = () => {
        scrollMealList.current.scrollBy({
        left: -420,
        behavior: 'smooth'
        });
        }

    const handleNextMealList = () => {
        scrollMealList.current.scrollBy({
        left: 420,
        behavior: 'smooth'
        });
    }

    const handlePrevDrinkList = () => {
        scrollDrinkList.current.scrollBy({
        left: -420,
        behavior: 'smooth'
        });
    }

    const handleNextDrinkList = () => {
        scrollDrinkList.current.scrollBy({
        left: 420,
        behavior: 'smooth'
        });
    }

    const handlePrevDessertList = () => {
        scrollDessertList.current.scrollBy({
        left: -420,
        behavior: 'smooth'
        });
    }

    const handleNextDessertList = () => {
        scrollDessertList.current.scrollBy({
            left: 420,
            behavior: 'smooth'
        });
    }

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
                    <div ref={scrollMealList} className="meals">
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
                    <Arrow
                        direction="prev"
                        onClick={handlePrevMealList}
                    >
                        <FiChevronLeft />
                    </Arrow>

                    <Arrow
                        direction="next"
                        onClick={handleNextMealList}
                    >
                        <FiChevronRight />
                    </Arrow>
                </Section>
                <Section>
                    <h2>Sobremesas</h2>
                    <div ref={scrollDessertList} className="meals">
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
                    <Arrow
                        direction="prev"
                        onClick={handlePrevDessertList}
                    >
                        <FiChevronLeft />
                    </Arrow>

                    <Arrow
                        direction="next"
                        onClick={handleNextDessertList}
                    >
                        <FiChevronRight />
                    </Arrow>
                </Section>
                <Section>
                    <h2>Bebidas</h2>
                    <div ref={scrollDrinkList} className="meals">
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
                    <Arrow
                        direction="prev"
                        onClick={handlePrevDrinkList}
                    >
                        <FiChevronLeft />
                    </Arrow>

                    <Arrow
                        direction="next"
                        onClick={handleNextDrinkList}
                    >
                        <FiChevronRight />
                    </Arrow>
                </Section>

            </main>

            <Footer />
        </Container>
    )
}