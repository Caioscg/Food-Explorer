import styled from "styled-components"

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    position: relative;

    border-radius: 8px;

    width: 300px;
    padding: 24px;

    > img {
        width: 176px;
    }

    > h3 {
        font-size: 24px;
        line-height: 140%;
        font-weight: bold;
    }
`