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

    main {
        grid-area: content;

        padding: 0 124px;
        overflow-y: auto;
    }
`

export const Brand = styled.div`
    display: flex;
    align-items: flex-end;

    position: relative;

    margin-top: 110px;

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
            font-size: 40px;
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