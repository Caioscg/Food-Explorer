import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    
    background-color: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    font-size: 22px;

    padding: 12px;

    font-weight: 300;
`