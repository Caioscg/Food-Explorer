import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 104px auto 70px;
    grid-template-areas:
    "header"
    "content"
    "footer";

    > main {
        grid-area: content;
        overflow-y: auto;

        display: flex;
        flex-direction: column;
        gap: 32px;

        width: 100%;

        padding: 40px clamp(10px, 8px + 5vw, 122px);

        > h1 {
            font-weight: 500;
            font-size: 32px;
            line-height: 140%;
        }

        @media(max-width: 1030px) {
            form {
                gap: 24px;
                .first, .second, .third {
                    flex-direction: column;
                    gap: 24px;
                }
                .image, .preco {
                    min-width: 100%;
                    max-width: 200px;
                }

                .button {
                    width: 100%;
                }
            }
        }
    }
`

export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 32px;

    input, textarea, select {
        width: 100%;

        border: none;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        padding: 16px 14px 12px 14px;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        border-radius: 8px;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 100%;

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

        gap: clamp(10px, 5px + 5vw ,76px);

        width: 100%;

        > label {
            max-width: fit-content;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};


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
            //max-width: 500px;

            select {
                appearance: none;
                -webkit-appearance: none;

                background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
                background-repeat: no-repeat;
                background-position: right 21px, top center;

                color: ${({ theme }) => theme.COLORS.LIGHT_400};

                font-family: 'Roboto', sans-serif;
                line-height: 160%;
                font-size: 14px;

                outline: none;
            }
        }
    }

    .second {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 76px;

        .preco {
            width: 300px;

            input {
                padding: 20px;
            }
        }

        .ingredientes {
            .add {
                display: flex;
                gap: 16px;

                flex-wrap: wrap;
    
                padding: 8px;
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
    
                border-radius: 8px;
                
                input {
                    padding: 0;
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};
                    font-size: 14px;
                }
            }
        }
    }

    .third {
        width: 100%;

        > textarea {
            height: 172px;
            resize: none;
        }
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
    > .button {
        padding: 12px 24px;
        width: fit-content;

        border-radius: 5px;
        border: none;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};

        cursor: pointer;
    }
`