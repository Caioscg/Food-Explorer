import styled from "styled-components"

export const Container = styled.div`
    padding: 28px clamp(64px, 30px + 5vw ,123px);

    background-color: ${ ({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    align-items: center;
    gap: 48px;

    grid-area: header;

    > svg {
        cursor: pointer;
        width: clamp(62px, 200px - 10vw ,104px);
    }

    .menu {
        display: none;
    }

    @media (max-width: 1045px) {
        padding: 28px;

        .order, .signOut {
            display: none;
        }
        .menu {
            display: block;
            margin-top: 14px;
            cursor: pointer;
        }
        .logo {
            margin-left: 154px;
            align-items: flex-end;
        }
    }
    @media (max-width: 630px) {
        .logo {
            margin-left: 54px;
        }
    }

    @media (max-width: 550px) {
        padding: 12px;
        gap: 12px;

        .logo {
            margin-left: 0;
            min-width: fit-content;
        }
    }
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
    height: 48px;
    padding: 16px 46.5px;

    display: flex;
    align-items: center;
    gap: 6px;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    border-radius: 5px;

    cursor: pointer;

    span {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`