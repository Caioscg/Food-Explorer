import styled from "styled-components"

export const Container = styled.div`
    padding: 24px 123px;

    background-color: ${ ({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    align-items: center;
    justify-content: space-between;

    grid-area: footer;
    
    > span {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 160%;

        margin-top: 4px;
    }

    @media (max-width: 750px) {
        padding: 24px 56px;

        .logo {
            > span {
                font-size: 22px;
            }
        }
    }

    @media (max-width: 540px) {
        padding: 24px;

        .logo {
            gap: 3px;
            > span {
                font-size: 18px;
            }
        }

        > span {
            font-size: 12px;
        }
    }

    @media (max-width: 400px) {
        padding: 4px;

        .logo {
            gap: 3px;
            min-width: fit-content;
            > span {
                font-size: 18px;
            }

            >img {
                width: 20px;
            }
        }

        > span {
            font-size: 12px;
        }
    }

    @media (max-width: 340px) {
        gap: 12px;
        padding: 12px;
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    span {
        color: ${ ({ theme }) => theme.COLORS.LIGHT_700};
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: bold;
    }
`