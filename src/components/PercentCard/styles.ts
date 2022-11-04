import { ArrowUpRight } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 1
})`
    width: 100%;
    height: 102px;
    justify-content: center;
    position: relative;

    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

    border-radius: 8px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    text-align: center;
`

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    text-align: center;
`

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_DARK,
    size: 24,
}))`
    position: absolute;
    right: 8px;
    top: 8px;
`;