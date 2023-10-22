import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 144px auto 70px;
    grid-template-areas:
    "header"
    "content"
    "footer";

    //position: absolute;
    //z-index: 2;

    header {
        grid-area: header;

        width: 100%;

        background-color: ${({ theme }) => theme.COLORS.DARK_700};

        padding: 56px 28px 24px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 22px;

        display: flex;
        align-items: center;
        gap: 16px;
    }

    main {
        grid-area: content;

        padding: 36px 28px;

        display: flex;
        flex-direction: column;
        gap: 36px;
    }
`

export const Input = styled.div`
    width: 100%;
    height: 48px;
    padding: 16px 32px;

    display: flex;
    align-items: center;
    gap: 14px;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    border-radius: 5px;

    input {
        width: 100%;
        background: none;
        border: none;

        color: ${ ({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Roboto', sans-serif;

        font-size: 16px;
        line-height: 100%;

        &::placeholder {
            color: ${ ({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`