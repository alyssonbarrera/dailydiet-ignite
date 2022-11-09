import { useState } from 'react';
import { Modal } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from "styled-components/native";
import { PencilLine, Trash } from 'phosphor-react-native'

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Tag } from "@components/Tag";

import { MealProps } from '@storage/meal/mealType';
import { removeMeal } from '@storage/meal/mealRemove';

import {
    Container,
    Content,
    Filter,
    Footer,
    MealDateAndHour,
    MealDateAndHourTitle,
    MealDescription,
    MealTitle,
    ModalButtons,
    ModalContainer,
    ModalContent,
    ModalText
} from "./styles";

type Meal = {
    meal: MealProps;
};

export function Meal() {

    const [modalVisible, setModalVisible] = useState(false);
    const { COLORS } = useTheme();
    
    const navigation = useNavigation();
    const route = useRoute();

    const { meal } = route.params as Meal;
    
    async function handleRemoveMeal() {
        try {
            await removeMeal(meal.id);
            navigation.navigate('home');
        } catch (error) {
            console.log(error);
        }
    }

    return (
            <Container>            
                <Header
                title="Refeição"
                navigate="home"
                color={meal.withinTheDiet ? "GREEN_LIGHT" : "RED_LIGHT"}
                />
                <Content>
                    <MealTitle>
                        { meal.name }
                    </MealTitle>
                    <MealDescription>
                        { meal.description }
                    </MealDescription>
                    <MealDateAndHourTitle>
                        Data e hora
                    </MealDateAndHourTitle>
                    <MealDateAndHour>
                        { meal.date.replace('/', '.').replace('/', '.') } - { meal.time }
                    </MealDateAndHour>
                    { meal.withinTheDiet ? <Tag type="PRIMARY" /> : <Tag type="SECONDARY" /> }
                </Content>
                <Footer>
                    <Button
                        title="Editar refeição"
                        style={{
                            marginBottom: 9
                        }}
                        type="PRIMARY"
                        icon={
                            <PencilLine
                                size={18}
                                color={COLORS.WHITE}
                            />
                        }
                        onPress={() => navigation.navigate('addOrEditMeal', { meal, type: 'edit' })}
                    />
                    <Button
                        title="Excluir refeição"
                        type="TERTIARY"
                        icon={
                            <Trash
                                size={18}
                                color={COLORS.GRAY_100}
                            />
                        }
                        onPress={() => setModalVisible(true)}
                    />
                </Footer>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                statusBarTranslucent
            >
                <ModalContainer>
                    <Filter />
                    <ModalContent>
                        <ModalText>
                            Deseja realmente excluir o registro da refeição?
                        </ModalText>
                        <ModalButtons>
                            <Button
                                title='Cancelar'
                                type='QUATERNARY'
                                style={{ marginRight: 12 }}
                                onPress={() => setModalVisible(false)}
                            />
                            <Button
                                title='Sim, excluir'
                                type='SECONDARY'
                                onPress={handleRemoveMeal}
                            />
                        </ModalButtons>
                    </ModalContent>
                </ModalContainer>
            </Modal>
            </Container>
    )
}
