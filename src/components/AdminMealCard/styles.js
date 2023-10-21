import styled from "styled-components"

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    position: relative;

    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

    min-width: 300px;
    padding: 66px 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    cursor: pointer;

    .edit {
        position: absolute;
        top: 16px;
        right: 18px;

        transition: .5s;

        &:hover {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    svg {
            cursor: pointer;
    }

    > img {
        width: 176px;
        height: 176px;
        border-radius: 7px;
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
    }

`