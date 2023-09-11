import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 104px auto 104px;
    grid-template-areas:
    "header"
    "content"
    "footer";
`

export const Form = styled.div`
    width: 100%;

    grid-area: content;
    padding: 40px 122px;

    display: flex;
    flex-direction: column;
    gap: 32px;

    h1 {
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
    }

    input, textarea {
        width: 100%;

        border: none;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        padding: 16px 14px 12px 14px;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        border-radius: 8px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};


        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
            font-size: 16px;
            line-height: 100%;
            font-family: 'Roboto', sans-serif;
        }
    }

    .first {
        display: flex;
        align-items: flex-end;
        justify-content: stretch;

        gap: 86px;

        width: 100%;

        > label {
            max-width: fit-content;


            input {
               display: none;
            }
            p {
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
                display: flex;
                align-items: center;
                gap: 8px;

                padding: 12px 32px;
                background-color: ${({ theme }) => theme.COLORS.DARK_800};

                border-radius: 8px;
                cursor: pointer;
            }
        }

        .categoria {
            max-width: 500px;
        }
    }

    .second {
        display: flex;
        width: 100%;
    }

    .third {
        width: 100%;
    }

    .normal {
        width: 100%;

        display: flex;
        flex-direction:column;

        gap: 12px;

        label {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            line-height: 100%;
        }
    }
`