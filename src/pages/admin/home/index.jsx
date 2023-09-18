import { Container, Brand, Section, Arrow } from "./styles";

import { AdminHeader } from "../../../components/AdminHeader"
import { Footer } from "../../../components/footer"
import { AdminMealCard } from "../../../components/AdminMealCard"

import image from "../../../assets/brand.png"
import dishImage from "../../../assets/Dish.png"
import dessertImage from "../../../assets/dessert.png"
import drinkImage from "../../../assets/drink.png"

import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export function AdminHome() {
    const scrollMealList = useRef(null);
    const scrollDrinkList = useRef(null);
    const scrollDessertList = useRef(null);

    const paddingMeal = useRef(null);
    const paddingDrink = useRef(null);
    const paddingDessert = useRef(null);

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
            <AdminHeader />

            <main>

                <Brand>
                    <img src={image} alt="" />
                    <div>
                        <h2>Sabores inigualáveis</h2>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                    </div>
                </Brand>

                <Section ref={paddingMeal}>
                    <h2>Refeições</h2>
                    <div ref={scrollMealList} className="meals">
                        <AdminMealCard 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={true}
                        />
                        <AdminMealCard 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                        />
                        <AdminMealCard 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                        />
                        <AdminMealCard 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                        />
                        <AdminMealCard 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                        />
                        <AdminMealCard 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                        />
                        <AdminMealCard 
                            image={dishImage} 
                            title="Salada Ravanello >" 
                            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
                            price="49,97"
                            favorite={false}
                        />
                    </div>
                    <Arrow
                        direction="prev"
                    >
                        <FiChevronLeft onClick={handlePrevMealList}/>
                    </Arrow>

                    <Arrow
                        direction="next"
                    >
                        <FiChevronRight onClick={handleNextMealList}/>
                    </Arrow>
                </Section>
                <Section ref={paddingDessert}>
                    <h2>Sobremesas</h2>
                    <div ref={scrollDessertList} className="meals" id="dessert">
                        <AdminMealCard 
                            image={dessertImage} 
                            title="Peachy pastrie >" 
                            description="Delicioso folheado de pêssego com folhas de hortelã."
                            price="32,97"
                            favorite={false}
                        />
                        <AdminMealCard 
                            image={dessertImage} 
                            title="Peachy pastrie >" 
                            description="Delicioso folheado de pêssego com folhas de hortelã."
                            price="32,97"
                            favorite={false}
                        />
                        <AdminMealCard 
                            image={dessertImage} 
                            title="Peachy pastrie >" 
                            description="Delicioso folheado de pêssego com folhas de hortelã."
                            price="32,97"
                            favorite={false}
                        />
                        <AdminMealCard 
                            image={dessertImage} 
                            title="Peachy pastrie >" 
                            description="Delicioso folheado de pêssego com folhas de hortelã."
                            price="32,97"
                            favorite={false}
                        />
                        <AdminMealCard 
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
                <Section ref={paddingDrink}>
                    <h2>Bebidas</h2>
                    <div ref={scrollDrinkList} className="meals" id="drink">
                        <AdminMealCard 
                            image={drinkImage} 
                            title="Tè d'autunno >" 
                            description="Chá de anis, canela e limão. Sinta o outono italiano."
                            price="19,97"
                            favorite={false}
                        />
                        <AdminMealCard 
                            image={drinkImage} 
                            title="Tè d'autunno >" 
                            description="Chá de anis, canela e limão. Sinta o outono italiano."
                            price="19,97"
                            favorite={false}
                        />
                        <AdminMealCard 
                            image={drinkImage} 
                            title="Tè d'autunno >" 
                            description="Chá de anis, canela e limão. Sinta o outono italiano."
                            price="19,97"
                            favorite={false}
                        />
                        <AdminMealCard 
                            image={drinkImage} 
                            title="Tè d'autunno >" 
                            description="Chá de anis, canela e limão. Sinta o outono italiano."
                            price="19,97"
                            favorite={false}
                        />
                        <AdminMealCard 
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