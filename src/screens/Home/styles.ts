import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};

    padding: 24px;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 32px;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const Ellipse = styled.Image`
    width: 40px;
    height: 40px;
`;
export const PercentSection = styled.View`
    margin-bottom: 40px;
`;

export const MealsSection = styled.View`
`;

export const MealsSectionHeader = styled.View`
    margin-bottom: 32px;
`;

export const MealsTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 8px;
`;

export const MealsSectionContent = styled.View`
`;

export const Gradient = styled(LinearGradient).attrs({
    colors: ["rgba(250, 250, 250, 0)", "rgba(250, 250, 250, 1)"],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1.3 },
})`
    width: 100%;
    height: 150px;

    position: absolute;
    bottom: 0;
`;