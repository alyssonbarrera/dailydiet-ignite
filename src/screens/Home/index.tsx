import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Plus } from "phosphor-react-native";

import { Button } from "@components/Button";
import { PercentCard } from "@components/PercentCard";
import { MealsContainer } from "@components/MealsContainer";

import {
    Container,
    Ellipse,
    Header,
    Logo,
    MealsSectionContent,
    MealsSection,
    MealsSectionHeader,
    MealsTitle,
    PercentSection
} from "./styles";

import logoImg from "@assets/logo.png";
import ellipseImg from "@assets/ellipse.png";

export function Home() {

    const navigation = useNavigation();

    const { COLORS } = useTheme();

    return (
        <ScrollView>
            <Container>
                <Header>
                    <Logo source={logoImg} />
                    <Ellipse source={ellipseImg} />
                </Header>
                <PercentSection>
                    <PercentCard percent={90.86} onPress={() => navigation.navigate('statistics')} />
                </PercentSection>

                <MealsSection>
                    <MealsSectionHeader>
                        <MealsTitle>
                            Refeições
                        </MealsTitle>
                        <Button
                            title="Nova refeição"
                            type="PRIMARY"
                            onPress={() => navigation.navigate('newMeal')}
                            icon={<Plus size={18} color={COLORS.WHITE} />}
                        />
                    </MealsSectionHeader>

                    <MealsSectionContent>
                        <MealsContainer date="12.08.22" />
                        <MealsContainer date="12.08.22" />
                        <MealsContainer date="12.08.22" />
                        <MealsContainer date="12.08.22" />
                    </MealsSectionContent>

                </MealsSection>
            </Container>
        </ScrollView>
    )
}
