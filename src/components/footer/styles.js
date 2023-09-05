import styled from "styled-components"

export const Container = styled.div`
    padding: 28px 123px;

    background-color: ${ ({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 160%;
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    min-width: 200px;

    span {
        color: ${ ({ theme }) => theme.COLORS.LIGHT_700};
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: bold;
    }
`