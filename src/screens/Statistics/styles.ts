import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
    isPositive: boolean;
};

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Header = styled.View<Props>`
    justify-content: center;
    align-items: center;
    
    background-color: ${({ theme, isPositive }) => isPositive ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    height: 200px;
`;

export const Button = styled(TouchableOpacity)`
    align-self: flex-start;

    width: 40px;
    margin: 0 24px;
`;

export const Icon = styled(ArrowLeft).attrs({
    size: 24,
})``;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXXL}px;
        color: ${theme.COLORS.GRAY_100};
    `}
    text-align: center;
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
    `}
    text-align: center;
`;

export const Content = styled.View`
    padding: 33px 24px 0;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border-radius: 20px;

    width: 100%;

    transform: translateY(-25px);

    flex-grow: 1;
`;

export const ContentTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_100};
    `}
    text-align: center;
    margin-bottom: 23px;
`;

export const CardGroup = styled.View`
    flex-direction: row;
`;