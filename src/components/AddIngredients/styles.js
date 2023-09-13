import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: fit-content;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 100%;

    padding: 0;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    > input {
        padding: 8px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        background-color: transparent;

        border: none;
    }
`