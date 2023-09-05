import styled from "styled-components"

export const Container = styled.div`
    padding: 28px 123px;

    background-color: ${ ({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    align-items: center;
    gap: 48px;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    min-width: 200px;

    span {
        color: ${ ({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: bold;
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

export const Order = styled.div`
    height: 56px;
    padding: 16px 46.5px;

    display: flex;
    align-items: center;
    gap: 6px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    border-radius: 5px;

    span {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`