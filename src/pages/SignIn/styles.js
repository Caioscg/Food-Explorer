import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 0 clamp(20px, 10px + 10vw ,108px) 0 clamp(35, 20px + 10vw ,150px);

    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: flex-end;
        
        div:nth-child(1) {
            margin-bottom: 0;
        }

        form {
            margin-bottom: 20%;
            background-color: transparent;

            > h2 {
                display: none;
            }

            input {
                border: none;
                border-radius: 8px;

                background-color: ${({ theme }) => theme.COLORS.DARK_900};
            }
        }
    }

    @media (max-width: 375px) {
        div:nth-child(1) {
            width: 100%;
            margin-left: 50px;
        }
        padding: 0;
        form {
            margin-left: 50px;
        }
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 19px;

    margin-bottom: 50px;

    h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-family: 'Roboto', sans-serif;
        font-size: 42px;
    }

    svg {
        width: 50px;
        height: 48px;
    }
`

export const Form = styled.form`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    min-width: 470px;

    padding: 64px;

    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;

    border-radius: 16px;

    h2 {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 32px;
        line-height: 140%;
        font-weight: 500;
    }

    .email {
        width: 100%;

        -webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both .2s;
	    animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both .2s;
    }

    .senha {
        width: 100%;

        -webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both .3s;
	    animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both .3s;
    }

    label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 100%;
    }
    input {
        width: 100%;

        border-radius: 5px;
        border: 1px solid white;

        padding: 16px 14px;

        background: none;

        font-size: 16px;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        margin-top: 5px;

        &::placeholder {
            color: ${ ({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    button {
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

        padding: 12px;

        width: 100%;

        border-radius: 5px;
        border: none;
    }

    > a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        font-size: 14px;
        line-height: 24px;

        cursor: pointer;
    }
`