import { useState, useCallback } from "react";
import { ScrollView } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
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
import { getAllMeals } from "../../storage/meal/mealGetAll";
import { Loading } from "@components/Loading";
import { MealProps } from "src/storage/meal/mealType";
import { MealsCard } from "@components/MealsCard";


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
            setDates(data.map(meal => meal.date).filter((value, index, self) => self.indexOf(value) === index));
            setMealsPercent(data.length > 0 ? (data.filter(meal => meal.withinTheDiet === true).length / data.length) * 100 : 0);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }


    const data = [
        {
            date: '01/01/2021',
            meals: [
                {
                    id: '1',
                    name: 'Café da manhã',
                    description: 'Café, pão com manteiga e queijo',
                    time: '08:00',
                    withinTheDiet: true
                },
                {
                    id: '2',
                    name: 'Almoço',
                    description: 'Arroz, feijão, carne e salada',
                    time: '12:00',
                    withinTheDiet: true
                }
            ]
        },
        {
            date: '02/01/2021',
            meals: [
                {
                    id: '3',
                    name: 'Café da manhã',
                    description: 'Café, pão com manteiga e queijo',
                    time: '08:00',
                    withinTheDiet: true
                }
            ]
        }
    ]

    useFocusEffect(useCallback(() => {
        fetchMeals();
    }, []));

    return (
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
            }}
        >
            <Container>
                <Header>
                    <Logo source={logoImg} />
                    <Ellipse source={ellipseImg} />
                </Header>
                <PercentSection>
                    <PercentCard percent={mealsPercent} onPress={() => navigation.navigate('statistics')} />
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
                        {
                            loading ? <Loading /> : dates.map(date => (                                
                                <MealsContainer date={date}>
                                {
                                    meals.filter(meal => meal.date === date).map(meal => (
                                        <MealsCard
                                            key={meal.id}
                                            time={meal.time}
                                            title={meal.name}
                                            type={meal.withinTheDiet ? 'PRIMARY' : 'SECONDARY'}
                                            onPress={() => navigation.navigate('meal', { meal } as any)}
                                        />
                                    ))
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
    )
}
