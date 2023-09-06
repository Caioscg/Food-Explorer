import styled from "styled-components"

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 5px;

    padding: 4px 8px;
    width: fit-content;

    span {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-size: 14px;
        line-height: 24px;
        font-weight: 500;
    }
`