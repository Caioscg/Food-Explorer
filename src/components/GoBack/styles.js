import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: fit-content;

    cursor: pointer;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    span {
        font-size: 24px;
        line-height: 140%;
        font-weight: bold;
    }

    @media (max-width: 1000px) {
        > span {
            font-size: 20px;
        }
        > svg {
            width: 28px;
        }
    }
`