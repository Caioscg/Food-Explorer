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

    > main {
        grid-area: content;

        padding: 24px 122px;
        overflow-y: auto;

        @media (max-width: 1200px) {
            padding : 24px 80px;
            .meal {
                > img {
                    width: 300px;
                    height: 300px;

                    margin-top: 50px;
                }

                .mobile {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;

                    font-size: 14px;

                    padding: 10px;
                }

                .desktop {
                    display: none;
                }

                button {
                    width: 100%;
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
    }

        @media (max-width: 850px) {
            padding : 24px 50px;

            .goBack {
                margin-right: 10px;
            }

            .meal {
                flex-direction: column;
                gap: 0;
                align-items: center;

                padding : 0 30px;

                > img {
                    width: 270px;
                    height: 270px;

                    margin-top: 0;
                }

                div {
                    text-align: center;
                }

                .ingredients {
                    justify-content: center;
                }

                .car {
                    margin-bottom: 44px;
                    gap: 16px;
                }
            }
        }

        @media (max-width: 470px) {
            padding : 24px 25px;
        }
    }
`

export const Meal = styled.div`
    height: 100%;
    margin-top: 56px;

    display: flex;
    gap: 56px;

    .mobile {
        display: none;
    }

    > img {
        width: 390px;
        height: 390px;
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
        align-items: center;
        gap: 12px;

        -webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both .4s;
	    animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both .4s;
    }

    .car {
        display: flex;
        align-items: center;
        gap: 33px;

        margin-top: 24px;

        .amount {
            display: flex;
            gap: 14px;
            align-items: center;

            svg {
                cursor: pointer;
            }

            span {
                font-family: 'Roboto', sans-serif;
                font-weight: bold;
                font-size: 20px;
                line-height: 160%;
            }
        }

        button {
            background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            border-radius: 5px;
            padding: 12px 24px;

            border: none;

            cursor: pointer;
        }
    }
`