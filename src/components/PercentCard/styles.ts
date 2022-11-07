import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type PercentCardStyleProps = "POSITIVE" | "NEGATIVE";

type Props = {
    percentType: PercentCardStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 100%;
    height: 102px;
    justify-content: center;
    position: relative;

    background-color: ${({ theme, percentType }) => percentType === "POSITIVE" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

    border-radius: 8px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXXL}px;
        color: ${theme.COLORS.GRAY_100};
    `}
    text-align: center;
`

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
    `}
    text-align: center;
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, percentType }) => ({
    color: percentType === "POSITIVE" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 24,
}))<Props>`
    position: absolute;
    right: 8px;
    top: 8px;
`;