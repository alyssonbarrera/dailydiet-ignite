import { PencilLine, Trash } from 'phosphor-react-native'
import { useTheme } from "styled-components/native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Tag } from "@components/Tag";

import {
    Container,
    Content,
    Footer,
    MealDateAndHour,
    MealDateAndHourTitle,
    MealDescription,
    MealTitle
} from "./styles";

export function Meal() {

    const { COLORS } = useTheme()

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
                />
            </Footer>
        </Container>
    )
}
