import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};

    justify-content: space-between;
`;

export const Content = styled.View`
    padding: 40px 24px 0;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border-radius: 20px;

    width: 100%;

    transform: translateY(-25px);

    flex-grow: 1;
`;

export const MealTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLORS.GRAY_100};
    `}
`;

export const MealDescription = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_200};
    `}

    margin-bottom: 24px;
`;

export const MealDateAndHourTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_100};
    `}

    margin-bottom: 8px;
`

export const MealDateAndHour = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_200};
    `}

    margin-bottom: 24px;
`;

export const Footer = styled.View`
    padding: 0 24px 24px;
`;