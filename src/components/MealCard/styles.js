import styled from "styled-components"

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    position: relative;

    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

    min-width: 300px;

    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    cursor: pointer;

    .heart {
        position: absolute;
        top: 16px;
        right: 18px;
    }

    #noFav {
        transition: .5s;

        &:hover {
            color: ${({ theme }) => theme.COLORS.TOMATO_300};
        }
    }

    #Fav {
        color: ${({ theme }) => theme.COLORS.TOMATO_300};
        transition: .5s;
        &:hover {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            
        }
    }

    svg {
            cursor: pointer;
    }

    > img {
        width: 176px;
        height: 176px;
    }

    > h3 {
        font-size: 24px;
        line-height: 140%;
        font-weight: bold;
    }

    > span {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        text-align: center;

        max-width: 256px;
    }

    .price {
        font-family: 'Roboto', sans-serif;
        font-size: 32px;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    .incluir {
        display: flex;
        align-items: center;
        gap: 12px;

        .amount {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        span {
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            line-height: 160%;
            font-weight: bold;
        }

        button {
            font-size: 14px;
            line-height: 24px;
            font-weight: 500;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

            border: 0;
            border-radius: 5px;

            padding: 12px 24px;
        }
    }

    @media (max-width: 750px) {
        min-width: 250px;

        .description {
            display: none;
        }
        .price {
            font-size: 24px;
        }
        h3 {
            font-size: 20px;
            font-weight: 500;
        }
        img {
            width: 140px;
        }
        .incluir {
            width: 100%;
            flex-direction: column;

            button {
                width: 100%;
                font-weight: 400;
            }
        }
    }
    @media (max-width: 400px) {
        min-width: 230px;

        .price {
            font-size: 20px;
        }
        h3 {
            font-size: 18px;
            font-weight: 500;
        }
        img {
            width: 120px;
        }
        .incluir {
            width: 100%;
            flex-direction: column;

            button {
                width: 100%;
                font-weight: 400;
            }
        }
    }
`