import { Circle } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native';

import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 49px;

    padding: 0 16px;

    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

    margin-bottom: 8px;
`;

export const Time = styled.Text`
    margin-right: 12px;

    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text`
    flex: 1;
    margin-left: 12px;

    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Divider = styled.View`
    width: 1px;
    height: 14px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Status = styled(Circle).attrs(() => ({
    size: 14,
    weight: 'fill',
}))``;