import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type HeaderColorStyleProps = 'GRAY_500' | 'GREEN_LIGHT' | 'RED_LIGHT';

type Props = {
    color: HeaderColorStyleProps;
};

export const Container = styled.View<Props>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme, color }) => theme.COLORS[color]};

    height: 132px;
    width: 100%;

    padding: 0 24px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLORS.GRAY_100};
    `}

    flex: 1;
    text-align: center;

    transform: translateX(-10px);
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_200,
    size: 24
}))``;

export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8
})`
    width: 40px;
`;
