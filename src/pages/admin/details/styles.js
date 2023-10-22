import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

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

    > main {
        grid-area: content;

        padding: 24px 122px;
        overflow-y: auto;

        @media (max-width: 850px) {
            padding : 24px 50px;

            .goBack {
                margin-right: 10px;
            }

            .meal {
                flex-direction: column;
                gap: 0;
                align-items: center;

                padding : 0 30px 24px;

                > img {
                    width: 270px;
                    height: 270px;

                    margin-top: 0;
                }

                > div {
                    text-align: center;

                    button {
                        width: 100%;
                    }
                }

                .ingredients {
                    justify-content: center;
                }
            }
        }

        @media (max-width: 370px) {
            padding : 24px 25px;
        }
    }
`

export const Meal = styled.div`
    height: 100%;
    margin-top: 56px;

    display: flex;
    gap: 56px;

    > img {
        width: 390px;
        height: 390px;

        border-radius: 15px;
    }

    > div {
        margin-top: 45px;
        display: flex;
        flex-direction: column;
        gap: 24px;

        > h1 {
            font-size: 40px;
            line-height: 140%;
            font-weight: 500;
        }

        > p {
            font-size: 24px;
            line-height: 140%;

            -webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both .3s;
	        animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both .3s;
        }
    }

    .ingredients {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;

        align-items: center;

        -webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both .4s;
	    animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both .4s;
    }

    button {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        border: none;

        border-radius: 5px;
        padding: 12px 24px;

        width: fit-content;
        margin-top: 24px;
    }

    @media (max-width: 1200px) {
        > img {
            width: 300px;
            height: 300px;

            margin-top: 50px;
        }

        > div {
            h1 {
                font-size: 36px;
            }
            p {
                font-size: 20px;
            }
        }

    }
    
`