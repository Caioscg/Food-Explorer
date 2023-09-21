import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 48px;
    padding: 16px 32px;

    display: flex;
    align-items: center;
    gap: 14px;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    border-radius: 5px;

    @media (max-width: 1045px) {
        display: none;
    }

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