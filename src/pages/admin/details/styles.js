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

    button {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        border: none;

        border-radius: 5px;
        padding: 12px 24px;

        width: fit-content;
        margin-top: 24px;
    }
    
`