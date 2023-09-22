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
            padding: 5px;

            margin-top: 10px;

            span {
                position: absolute;
                right: 0;
                top: 0;

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

    @media (max-width: 550px) {
        padding: 12px;
        gap: 12px;

        .logo {
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