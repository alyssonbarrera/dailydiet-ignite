import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type FeedbackStyleProps = {
    isPositive: boolean;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text<FeedbackStyleProps>`
    ${({ theme, isPositive }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXL}px;
        color: ${isPositive ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `}
    text-align: center;
    margin-bottom: 8px;
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_100};
    `}
    text-align: center;

    margin: 0 32px 40px;
`;

export const TextBold = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_100};
    `}
`;

export const Image = styled.Image`
    align-self: center;

    width: 224px;
    height: 288px;
`;

export const Footer = styled.View`
    padding: 0 92px;
    margin-top: 32px;
`;