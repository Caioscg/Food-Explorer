import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    border-radius: 8px;

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 100%;

    padding: 6px 16px;

    > button {
        border: none;
        background: none;
        margin-top: 2px;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    > input {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        border: none;
        border-radius: 0%;
        min-width: fit-content;

        margin-left: 2px;
    }

    .input-new {
            background-color: transparent;
        }

    .input-old {
        background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
    }
`