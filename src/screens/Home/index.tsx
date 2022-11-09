import { useState, useCallback } from "react";
import { ScrollView } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Plus } from "phosphor-react-native";

import { Button } from "@components/Button";
import { PercentCard } from "@components/PercentCard";
import { MealsContainer } from "@components/MealsContainer";
import { Loading } from "@components/Loading";
import { MealsCard } from "@components/MealsCard";

import { getAllMeals } from "@storage/meal/mealGetAll";
import { MealProps } from "@storage/meal/mealType";
import { getStatistic } from "@storage/meal/mealGetStatistic";

import {
    Container,
    Ellipse,
    Header,
    Logo,
    MealsSectionContent,
    MealsSection,
    MealsSectionHeader,
    MealsTitle,
    PercentSection,
    Gradient
} from "./styles";

import logoImg from "@assets/logo.png";
import ellipseImg from "@assets/ellipse.png";

type Meal = {
    meal: MealProps;
};

export function Home() {

    const navigation = useNavigation();
    const { COLORS } = useTheme();

    const [loading, setLoading] = useState(false);
    const [meals, setMeals] = useState<MealProps[]>([]);
    const [mealsPercent, setMealsPercent] = useState(0);
    const [dates, setDates] = useState<string[]>([]);

    async function fetchMeals() {
        try {
            setLoading(true);

            const data = await getAllMeals();
            
            setMeals(data);
            setDates(data.map((meal: MealProps) => meal.date).filter((value, index, self) => self.indexOf(value) === index));

            const { calculateMealsWithinTheDiet } = await getStatistic();
            setMealsPercent(calculateMealsWithinTheDiet);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchMeals();
    }, []));

    return (
        <>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: 130,
                    backgroundColor: COLORS.GRAY_700
                }}
            >
                <Container>
                    <Header>
                        <Logo source={logoImg} />
                        <Ellipse source={ellipseImg} />
                    </Header>
                    <PercentSection>
                        <PercentCard loading={loading} percent={mealsPercent} onPress={() => navigation.navigate('statistics')} />
                    </PercentSection>

                    <MealsSection>
                        <MealsSectionHeader>
                            <MealsTitle>
                                Refeições
                            </MealsTitle>
                            <Button
                                title="Nova refeição"
                                type="PRIMARY"
                                onPress={() => navigation.navigate('addOrEditMeal', { type: 'add'})}
                                icon={<Plus size={18} color={COLORS.WHITE} />}
                            />
                        </MealsSectionHeader>

                        <MealsSectionContent>
                            {
                                loading ? <Loading /> : dates.map((date, index) => (                                
                                    <MealsContainer key={index} date={date}>
                                    {
                                        meals.filter(meal => meal.date === date).map(meal => (
                                            <MealsCard
                                                key={meal.id}
                                                time={meal.time}
                                                title={meal.name}
                                                type={meal.withinTheDiet ? 'PRIMARY' : 'SECONDARY'}
                                                onPress={() => navigation.navigate('meal', { meal } as Meal)}
                                            />
                                        )).sort((a, b) => b.props.time.localeCompare(a.props.time))
                                    }
                                    </MealsContainer>
                                )).sort((a, b) => {
                                    const dateA = new Date(a.props.date);
                                    const dateB = new Date(b.props.date);
                                    return dateB.getTime() - dateA.getTime();
                                })
                            }
                        </MealsSectionContent>

                    </MealsSection>
                </Container>
            </ScrollView>
            <Gradient />
        </>
    )
}
