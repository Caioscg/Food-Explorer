import { Container, Brand, Section, Arrow } from "./styles";

import { AdminHeader } from "../../../components/AdminHeader"
import { Footer } from "../../../components/footer"
import { AdminMealCard } from "../../../components/AdminMealCard"

import image from "../../../assets/brand.png"
import dishImage from "../../../assets/Dish.png"
import dessertImage from "../../../assets/dessert.png"
import drinkImage from "../../../assets/drink.png"

import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export function AdminHome() {
    const scrollMealList = useRef(null);
    const scrollDrinkList = useRef(null);
    const scrollDessertList = useRef(null);

    const paddingMeal = useRef(null);
    const paddingDrink = useRef(null);
    const paddingDessert = useRef(null);

    const navigate = useNavigate()

    const { meals } = useAuth()

    const mealCategory = meals.filter((meal) => meal.category === "Refeição")
    const dessertCategory = meals.filter((meal) => meal.category === "Sobremesa")
    const drinkCategory = meals.filter((meal) => meal.category === "Bebida")

    function showMeal(meals_id) {
        navigate(`/details/${meals_id}`)
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
            <AdminHeader />

            <main>

                <Brand className="brand">
                    <img src={image} alt="" />
                    <div>
                        <h2>Sabores inigualáveis</h2>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                    </div>
                </Brand>

                {   
                    mealCategory.length ?
                    <Section ref={paddingMeal} className="section">
                        <h2>Refeições</h2>
                        <div ref={scrollMealList} className="meals">
                            {
                                mealCategory.map(meal => (
                                    <AdminMealCard 
                                        key={String(meal.id)}
                                        data={meal}
                                        onClick={() => showMeal(meal.id)}
                                    />
                                ))
                            }
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
                    : ""
                }

                {
                    dessertCategory.length ?
                    <Section ref={paddingDessert}>
                        <h2>Sobremesas</h2>
                        <div ref={scrollDessertList} className="meals" id="dessert">
                        {
                            dessertCategory.map(dessert => (
                                <AdminMealCard 
                                    key={String(dessert.id)}
                                    data={dessert}
                                    onClick={() => showMeal(dessert.id)}
                                />
                            ))
                        }
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
                    : ""
                }
                {
                    drinkCategory.length ?
                    <Section ref={paddingDrink}>
                        <h2>Bebidas</h2>
                        <div ref={scrollDrinkList} className="meals" id="drink">
                        {
                            drinkCategory.map(drink => (
                                <AdminMealCard 
                                    key={String(drink.id)}
                                    data={drink}
                                    onClick={() => showMeal(drink.id)}
                                />
                            ))
                        }
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
                    : ""
                }

            </main>

            <Footer />
        </Container>
    )
}