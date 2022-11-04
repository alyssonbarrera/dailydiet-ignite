import { TouchableOpacity } from "react-native";
import { Plus } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity).attrs({
    activeOpacity: 0.9
})`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 50px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_200};

    border-radius: 6px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-left: 12px;
`

export const Icon = styled(Plus).attrs(({ theme }) => ({
    color: theme.COLORS.WHITE,
    size: 18,
}))``;