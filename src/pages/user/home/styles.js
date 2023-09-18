import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 104px auto 104px;
    grid-template-areas:
    "header"
    "content"
    "footer";

    ::-webkit-scrollbar {
        width: 20px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
        margin-block: 12px;
        margin-bottom: 40px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.CAKE_100};
        border-radius: 100vw;
        border: 5px solid ${ ({ theme }) => theme.COLORS.DARK_400};
    }


    main {
        grid-area: content;

        padding: 120px 184px 48px;
        overflow-y: auto;

        #padding {
            .meals {
                padding: 0 150px;
            }
        }
        
    }
`

export const Brand = styled.div`
    display: flex;
    align-items: flex-end;

    position: relative;

    width: 100%;

    img {
        position: absolute;
        z-index: 2;

        margin-left: -50px;
    }

    > div {
        height: 300px;
        width: 100%;

        background-image: linear-gradient(
            ${({ theme}) => theme.COLORS.DARK_900} 60%, ${({ theme}) => theme.COLORS.DARK_600}
        );

        display: flex;
        flex-direction: column;
        gap: 8px;

        padding: 100px;
        padding-left: 35%;

        border-radius: 8px;

        h2 {
            font-size: 50px;
            line-height: 140%;
            font-weight: 500;

            text-align: center;
        }

        span {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            line-height: 100%;

            text-align: center;
        }
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-top: 48px;

    position: relative;

    > h2 {
        font-size: 32px;
        line-height: 140%;
        font-weight: 500;
    }
    .meals {
        display: flex;
        gap: 28px;
        overflow-x: hidden;

        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;
    }
`

export const Arrow = styled.button`
    position: absolute;
    top: 55.5%;
    transform: translateY(-50%);
    border: none;
    height: 29.5rem;
    width: 190px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.5rem;
    background: ${({ theme }) => theme.COLORS.DARK_400};
    
    &:hover {
        filter: brightness(1);
    }

    ${({ direction }) => direction === 'prev' ? ` 
        left: 1rem;
        -webkit-mask-image: -webkit-gradient(linear, left top, right top,
        from(rgba(0,0,0,1)), to(rgba(0,0,0, .1)));
        text-align: left;
        `: ` 
        right: 2rem;
        -webkit-mask-image: -webkit-gradient(linear, right top, left top, 
        from(rgba(0,0,0,1)), to(rgba(0,0,0, .1)));
        text-align: right;
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
`