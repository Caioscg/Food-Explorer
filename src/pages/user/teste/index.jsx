import { useRef } from 'react';

import { Container, Content, Arrow } from './styles';
import { Section } from '../home/styles';
import { Meal } from '../../../components/meal'; 
import { Header } from '../../../components/header';
import { Footer } from '../../../components/footer';
import dishImage from "../../../assets/Dish.png"

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import image from "../../../assets/brand.png"

export function Teste() {
  const scrollMealList = useRef(null);
  const scrollDrinkList = useRef(null);
  const scrollDessertList = useRef(null);

  const handlePrevMealList = () => {
    scrollMealList.current.scrollBy({
    left: -120,
    behavior: 'smooth'
  });
  }

  const handleNextMealList = () => {
      scrollMealList.current.scrollBy({
      left: 120,
      behavior: 'smooth'
    });
  }

  const handlePrevDrinkList = () => {
      scrollDrinkList.current.scrollBy({
        left: -120,
        behavior: 'smooth'
      });
    }

  const handleNextDrinkList = () => {
      scrollDrinkList.current.scrollBy({
        left: 120,
        behavior: 'smooth'
      });
    }

  const handlePrevDessertList = () => {
      scrollDessertList.current.scrollBy({
        left: -120,
        behavior: 'smooth'
      });
    }

  const handleNextDessertList = () => {
    scrollDessertList.current.scrollBy({
      left: 120,
      behavior: 'smooth'
    });
  }

  return (

      <Container>
        <Header />
        <main>

          <Content>
            <div className="Banner">
              <img
                  src={image}
                  alt="Imagem de 'polígono azul'."
                />
              <div className="wrapperBanner">
                <h2>Sabores Inigualáveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
              </div>
            </div>

              <Section>
                <h2>Refeições</h2>  
                <div ref={scrollMealList} className='meal'>
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
                <div ref={scrollDessertList} className='meal'>
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
                <div ref={scrollDrinkList} className='meal'>
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

          </Content>

        </main>

        <Footer />

      </Container>      
  )
}