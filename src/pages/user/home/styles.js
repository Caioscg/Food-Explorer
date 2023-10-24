import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 104px auto 70px;
    grid-template-areas:
    "header"
    "content"
    "footer";

    .mob {
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: 3;

        visibility: hidden;
    }

    #visible {
        visibility: visible;
    }

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

    @media (max-width: 750px) {
        ::-webkit-scrollbar {
            width: 15px;
        }
    }

    @media (max-width: 655px) {
        ::-webkit-scrollbar {
            width: 0;
        }
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

        @media (max-width: 1600px) {
            padding: 100px 104px 48px;

            .brand {
                img {
                    width: 500px;
                }
                div {
                    height: 240px;

                    padding: 70px;

                    h2 {
                        font-size: 42px;
                        text-align: end;
                    }

                    span {
                        font-size: 15px;
                        text-align: end;
                    }
                }
            }
        }

        @media (max-width: 1070px) {
            padding: 70px 84px 42px;

            .brand {
                img {
                    width: 400px;
                }

                div {
                    height: 200px;

                    padding: 50px;

                    h2 {
                        font-size: 36px;
                    }

                    span {
                        font-size: 13px;
                    }
                }
            }
        }

        @media (max-width: 900px) {
            padding: 50px 64px 36px;

            .brand {
                img {
                    width: 350px;
                }

                div {
                    height: 170px;

                    padding: 40px;

                    h2 {
                        font-size: 32px;
                    }
                }
            }
        }
        
        @media (max-width: 750px) {
            padding: 50px 36px 36px;

            .brand {
                img {
                    width: 300px;
                }
                div {
                    padding: 40px 12px;
                    height: 150px;
                }
            }

            section {
                h2 {
                    font-size: 26px;
                    font-weight: 400;
                }
                button {
                    top: 65%;
                }
            }
        }

        @media (max-width: 655px) {
            padding: 40px 20px 0;

            .brand {
                img {
                    width: 230px;
                    margin-left: -20px;
                }
                div {
                    padding: 20px 12px;
                    height: 120px;

                    h2 {
                        font-size: 22px;
                    }

                    span {
                        max-width: 270px;
                        align-self: flex-end;
                    }
                }
            }
            section {
                .meals {
                    overflow-x: auto;
                }

                button {
                    display: none;
                }
            }
        }

        @media (max-width: 490px) {
            padding-right: 0;

            .brand {
                img {
                    width: 200px;
                    margin-left: -20px;
                }
                div {
                    margin-right: 20px;
                    padding: 10px;
                    height: 100px;

                    h2 {
                        font-size: 22px;
                        z-index: 5;
                    }

                    span {
                        z-index: 5;
                        max-width: 200px;
                        align-self: flex-end;
                        margin-right: 20px;
                    }
                }
            }
        }
        
        @media (max-width: 400px) {
            .brand {
                img {
                    width: 200px;
                    margin-left: -20px;
                }
                div {
                    margin-right: 20px;
                    padding: 10px;
                    height: 100px;

                    h2 {
                        font-size: 17px;
                    }

                    span {
                        max-width: 150px;
                        align-self: flex-end;
                        margin-right: 20px;
                    }
                }
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

            -webkit-animation: slide-right 1s cubic-bezier(.25,.5,.19,1.11) both;
            animation: slide-right 1s cubic-bezier(.25,.5,.19,1.11) both;
        }

        span {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            line-height: 100%;

            text-align: center;

            -webkit-animation: slide-right 1s cubic-bezier(.25,.5,.19,1.11) both;
            animation: slide-right 1s cubic-bezier(.25,.5,.19,1.11) both;
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