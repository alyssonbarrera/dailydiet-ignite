import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { OptionButton } from "@components/OptionButton";
import { Button as ButtonComponent } from "@components/Button";

import {
    Button,
    ButtonContainer,
    ButtonText,
    Container,
    Content,
    DateAndHour,
    Footer,
    OptionText,
    Options,
    Title,
} from "./styles";


export function NewMeal() {

    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [mealName, setMealName] = useState('');
    const [showDate, setShowDate] = useState(false);
    const [showHour, setShowHour] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [mealDescription, setMealDescription] = useState('');

    function handleNewMeal() {
        console.log({
            mealName,
            mealDescription,
            date,
            hour,
            selectedOption
        });
    }

    return (
        <Container>
            <Header
                title="Nova refeição"
                navigate="home"
            />
            <Content>
                <Input
                    label="Nome"
                    onChangeText={setMealName}
                />
                <Input 
                    label="Descrição"
                    type="SECONDARY"
                    onChangeText={setMealDescription}    
                />
                <DateAndHour>
                    <ButtonContainer style={{
                        marginRight: 24
                    }}>
                        <Title>
                            Data
                        </Title>
                        <Button onPress={() => setShowDate(true)}>
                            <ButtonText>
                                { date }
                            </ButtonText>
                        </Button>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Title>
                            Hora
                        </Title>
                        <Button onPress={() => setShowHour(true)}>
                            <ButtonText>
                                { hour }
                            </ButtonText>
                        </Button>
                    </ButtonContainer>
                </DateAndHour>
                <OptionText>
                    Está dentro da dieta?
                </OptionText>
                <Options>
                    <OptionButton
                        title="Sim"
                        type={selectedOption === 'Sim' ? 'PRIMARY' : undefined}
                        onPress={() => selectedOption === 'Sim' ? setSelectedOption('') : setSelectedOption('Sim')}
                    />
                    <OptionButton
                        title="Não"
                        type={selectedOption === 'Não' ? 'SECONDARY' : undefined}
                        onPress={() => selectedOption === 'Não' ? setSelectedOption('') : setSelectedOption('Não')}
                    />
                </Options>
                {
                    showDate && (
                        <DateTimePicker
                            value={new Date()}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onChange={(event, date) => {
                                setShowDate(false);
                                setDate(event.type === "set" ? date?.getDate().toString().padStart(2, '0') + '/' + (date?.getMonth() + 1) + '/' + date?.getFullYear() : prevDate => prevDate);
                            }}
                            locale="pt-BR"
                            positiveButtonLabel="Confirmar"
                        />
                    )
                }
                {
                    showHour && (
                        <DateTimePicker
                            value={new Date()}
                            mode={'time'}
                            is24Hour={true}
                            display="default"
                            onChange={(event, hour) => {
                                setShowHour(false);
                                setHour(event.type === "set" ? hour?.getHours() + ':' + hour?.getMinutes().toString().padStart(2, '0') : prevHour => prevHour);
                            }}
                            locale="pt-BR"
                            positiveButtonLabel="Confirmar"
                        />
                    )
                }
            </Content>
            <Footer>
                <ButtonComponent
                    title="Cadastrar refeição"
                    type="SECONDARY"
                    onPress={handleNewMeal}
                />
            </Footer>
        </Container>
    )
}
