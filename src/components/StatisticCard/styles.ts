import styled from "styled-components/native";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 8px;

    width: 100%;
    min-height: 89px;

    padding: 16px;
    margin-bottom: 12px;

    flex-shrink: 1;
`;