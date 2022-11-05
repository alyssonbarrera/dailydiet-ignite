import { Circle } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 144px;
    height: 34px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 1000px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_100};
    `}
    margin-left: 8px;
`;

export const Icon = styled(Circle).attrs({
    size: 8,
    weight: 'fill'
})``;