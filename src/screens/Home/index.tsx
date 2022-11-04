import { ScrollView } from "react-native";
import { Container, Ellipse, Header, Logo, MealsSectionContent, MealsSection, MealsSectionHeader, MealsTitle, PercentSection } from "./styles";

import { Button } from "@components/Button";
import { PercentCard } from "@components/PercentCard";
import { MealsContainer } from "@components/MealsContainer";

import logoImg from "@assets/logo.png";
import ellipseImg from "@assets/ellipse.png";

export function Home() {
    return (
        <ScrollView>
            <Container>
                <Header>
                    <Logo source={logoImg} />
                    <Ellipse source={ellipseImg} />
                </Header>
                <PercentSection>
                    <PercentCard />
                </PercentSection>

                <MealsSection>
                    <MealsSectionHeader>
                        <MealsTitle>
                            Refeições
                        </MealsTitle>
                        <Button />
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
