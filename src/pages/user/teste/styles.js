import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;
  
  margin: 0 auto;

  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas:
  "header"
  "main"
  "footer";
  
  overflow-y: hidden;
  overflow-x: hidden;

  > main { 
    grid-area: main;

    margin: 0 auto;

    padding-top: 4.2rem;
    
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-color: transparent transparent; 

    &::-webkit-scrollbar {
        background: transparent;
    }

    @media (min-width: 768px) {
      padding-top: 7rem;
    }

    @media (min-width: 1024px) {
      padding-top: 10rem;
    }

    @media (min-width: 1300px) {
      padding-top: 14.5rem;
    }

    @media (min-width: 1024px) {
      max-width: 102.4rem;
    }
    
    @media (min-width: 1300px) {
      max-width: 140.0rem;
    }
   }
`;

export const Content = styled.div`
  max-width: 100%;
  height: 100vh;

  animation: leftRight 0.4s ease;


 > .Banner {
    margin: 0 auto;

    display: flex;
    align-items: end;
  
    height: 12.0rem; 

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

    border-radius: 3px;

    @media (min-width: 280px) {
     max-width: 25rem;
    }

    @media (min-width: 320px) {
     max-width: 32rem;
    }

    
    @media (min-width: 425px) {
     max-width: 38rem;
    }
  
    @media (min-width: 768px) {
      max-width: 69.5rem;
      height: 16.5rem;

      gap: 5rem;
    }

    @media (min-width: 1024px) {
      max-width: 93rem;
      height: 21.0rem;

      gap: 6rem;
    }

    @media (min-width: 1300px) {
      max-width: 127.0rem;
      height: 30rem;

      gap: 8rem;
    }

    img {  
      margin-left: -3rem; 

      @media (min-width: 280px) {
        width: 12.0rem;
      }
      
      @media (max-width: 320px) {
        width: 14.0rem;
      }

      @media (min-width: 768px) {
        width: 28.0rem;
      }

      @media (min-width: 1024px) {
        width: 45.0rem;
        margin-left: -5rem;
      }

      @media (min-width: 1300px) {
        width: 60.0rem;
        height: 42rem;

        margin-left: -6rem;
      }
    }

    .wrapperBanner {
      margin-bottom: 2.2rem;

      @media (min-width: 768px) {
        margin-bottom: 4.5rem;
      }

      @media (min-width: 1024px) {
        margin-bottom: 7.5rem;
      }

      @media (min-width: 1300px) {
        margin-bottom: 10rem; 
      }

      > h2 {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        
        @media (max-width: 280px) {
          font-size: 1.3rem;
        }
       
        @media (max-width: 320px) {
          font-size: 1.4rem;
        }

        @media (min-width: 768px) {
          font-weight: 500;
          font-size: 3rem;

          white-space: nowrap;
        }

        @media (min-width: 1024px) {
          font-size: 4rem;
        }

        @media (min-width: 1300px) {
          font-size: 5.5rem;
        }
      }
      
      > p {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.WHITE_300};
       
        @media (max-width: 280px) {
          font-size: 1rem;
        }
        
        @media (max-width: 320px) {
          font-size: 1rem;
        }

        @media (min-width: 768px) {
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 100%; 

          white-space: nowrap;
        }

         @media (min-width: 1300px) {
          font-size: 1.6rem;
        }
    }
   }
  }
  
  > section {
    position: relative;
    margin: 0 auto;
  
    @media (max-width: 280px) {
      padding: 0 2rem;
      max-width: 25rem;
    }

    @media (min-width: 320px) {
      padding: 0 2rem;
      max-width: 25rem;
    }

    @media (min-width: 768px) {
      padding: 0 4rem;
      max-width: 67rem;
    }

    @media (min-width: 1024px) {
      max-width: 90rem;
    }

    @media (min-width: 1300px) {
      max-width: 123rem;
    }

    > div {
      display: flex;
      align-items: center;
      overflow-x: hidden;
      flex-direction: row;
      gap: 1.5rem;

      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
    }
  }
`;

export const Arrow = styled.button`
  position: absolute;
  top: 53.5%;
  transform: translateY(-50%);
  border: none;
  filter: opacity(0.7);
  height: 33.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 3.5rem;
  background: transparent;

  ${({ direction }) => direction === 'prev' ? ` 
      left: 1rem;
    `: ` 
      right: 2rem;
    `}

 @media (min-width: 320px) {
    ${({ direction }) => direction === 'prev' ? ` 
      left: -1rem;
    `: ` 
      right: 1rem;
    `}
  }
  
  @media (min-width: 375px) {
    ${({ direction }) => direction === 'prev' ? ` 
      left: -1rem;
    `: ` 
      right: -1rem;
    `}
  }

  @keyframes leftRight {
        0% {
            transform: translateX(-360px)
        }

        100% {
            transform: translateX(0)
        }
    }
    
    @keyframes lowOpacity {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`