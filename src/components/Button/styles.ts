import { TouchableOpacity } from "react-native";
import { Plus } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type ButtonColorStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type Props = {
    type: ButtonColorStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 50px;

    background-color: ${({ theme, type }) => type === 'PRIMARY' || type === 'SECONDARY' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};
    border: ${({ theme, type }) => type === 'TERTIARY' ? `1px solid ${theme.COLORS.GRAY_100}` : 'none'};
    border-radius: 6px;
`;

export const Title = styled.Text<Props>`
    ${({ theme }) => css<Props>`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${({ type }) => type !== 'TERTIARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    `}
    margin-left: ${({ type }) => type !== 'SECONDARY' ? 12 : 0}px;
`;