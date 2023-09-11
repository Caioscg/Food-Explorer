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
`

export const Form = styled.div`
    width: 100%;

    grid-area: content;
    padding: 40px 122px;

    display: flex;
    flex-direction: column;
    gap: 32px;

    .first {
        display: flex;
    }

    .second {
        display: flex;
    }
`