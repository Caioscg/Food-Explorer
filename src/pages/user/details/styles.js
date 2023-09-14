import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 104px auto 104px;
    grid-template-areas:
    "header"
    "content"
    "footer";

    > main {
        grid-area: content;

        padding: 24px 122px;
        overflow-y: auto;
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
        }
    }

    .ingredients {
        display: flex;
        gap: 12px;
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

        .price {
            background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

            border-radius: 5px;
            padding: 12px 24px;

            display: flex;
            gap: 5px;

            cursor: pointer;
        }
    }
`