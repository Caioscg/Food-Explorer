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
    }

    .price {
        font-family: 'Roboto', sans-serif;
        font-size: 32px;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

`