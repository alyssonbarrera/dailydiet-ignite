import { TouchableOpacity } from "react-native";
import { Circle } from "phosphor-react-native";

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

export const DateAndHour = styled.View`
    flex-direction: row;
`;

export const Options = styled.View`
    flex-direction: row;
`;

export const OptionText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
    `}
    margin-bottom: 8px;
`;

export const Icon = styled(Circle).attrs(() => ({
    size: 14,
    weight: 'fill',
}))``;

export const ButtonContainer = styled.View`
    margin-bottom: 24px;
    width: 100%;
    
    flex-shrink: 1;
`;

export const ButtonText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_100};
    `}
`;

export const Button = styled(TouchableOpacity).attrs({
    activeOpacity: 0.8
})`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG}px;
        background-color: ${theme.COLORS.GRAY_700};
        border: 1px solid ${theme.COLORS.GRAY_500};
    `}
    padding: 12px;
    border-radius: 6px;
    height: 48px;

    justify-content: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
    `}
    margin-bottom: 4px;
`;

export const Footer = styled.View`
    padding: 0 24px;
    margin-bottom: 40px;
`;