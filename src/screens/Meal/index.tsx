import { useState } from 'react';
import { PencilLine, Trash } from 'phosphor-react-native'
import { useTheme } from "styled-components/native";
import { Modal } from 'react-native'

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Tag } from "@components/Tag";

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
import { useNavigation } from '@react-navigation/native';

export function Meal() {

    const [modalVisible, setModalVisible] = useState(false);

    const { COLORS } = useTheme();
    const navigation = useNavigation();

    function handleRemoveMeal() {
        setModalVisible(false)
    }

    return (
            <Container>            
                <Header
                title="Refeição"
                navigate="home"
                color="GREEN_LIGHT"
                />
                <Content>
                    <MealTitle>
                        Refeição
                    </MealTitle>
                    <MealDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </MealDescription>
                    <MealDateAndHourTitle>
                        Data e hora
                    </MealDateAndHourTitle>
                    <MealDateAndHour>
                        12.08.22 - 12:00
                    </MealDateAndHour>
                    <Tag type="PRIMARY" />
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
                        onPress={() => navigation.navigate('newMeal')}
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
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                statusBarTranslucent
            >
                <ModalContainer>
                    <Filter></Filter>
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
