import styled from "styled-components"

export const Container = styled.div`
    background-color: ${ ({ theme }) => theme.COLORS.DARK_600};
    grid-area: header;

    padding: 28px clamp(64px, 30px + 5vw ,123px);
    display: flex;
    align-items: center;
    gap: 48px;


    svg {
        cursor: pointer;
        width: clamp(62px, 200px - 10vw ,104px);
    }

    .menu, .mobileOrder {
        display: none;
    }

    @media (max-width: 1045px) {
        padding: 28px;
        justify-content: space-around;

        .order, .signOut {
            display: none;
        }
        .menu, .mobileOrder {
            display: block;
            cursor: pointer;
            margin-top: 4px;
        }

        .mobileOrder {
            position: relative;
            margin-top: 10px;

            span {
                position: absolute;
                right: 30px;
                top: -2px;

                font-size: 12px;
                font-weight: 500;

                padding: 0 5px;

                background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
                border-radius: 50%;
            }
        }

        .logo {
            align-items: flex-end;
        }
    }

    @media (max-width: 570px) {
        padding: 0;
        gap: 0;

        .logo {
            min-width: fit-content;
            border: 1px solid red

            span {
                font-size: 20px;
            }
        }
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    min-width: 200px;

    cursor: pointer;
    transition: filter 700ms;

    &:hover {
        filter: drop-shadow(0 0 1.8em ${({ theme }) => theme.COLORS.CAKE_200});
    }

    span {
        color: ${ ({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: bold;
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