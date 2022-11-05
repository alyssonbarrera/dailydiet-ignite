import { Circle } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import styled, { css } from "styled-components/native";

export type OptionButtonStyleProps = "PRIMARY" | "SECONDARY" | undefined;

type Props = {
    type: OptionButtonStyleProps;
    title: 'Sim' | 'Não' | undefined;
}

export const Container = styled(TouchableOpacity).attrs<Props>({
    activeOpacity: 0.8,
})<Props>`
    background-color: ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : type === "SECONDARY" ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600};
    border: 1px solid ${({ theme, type }) => type === "PRIMARY" ? theme.COLORS.GREEN_DARK : type === "SECONDARY" ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_600};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 50px;
    width: 100%;

    margin-right: ${({ title }) => title === 'Sim' ? 8 : 0}px;

    flex-shrink: 1;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_100};
    `}

    margin-left: 8px;
`;

export const Icon = styled(Circle).attrs(() => ({
    size: 14,
    weight: 'fill',
}))``;