import { StatisticCard } from "@components/StatisticCard";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { Button, CardGroup, Container, Content, ContentTitle, Description, Header, Icon, Title } from "./styles";

export function Statistics() {

    const { COLORS } = useTheme();
    const navigation = useNavigation();

    return (
        <Container>
            <Header isPositive={true}>
                <Button onPress={() => navigation.navigate('home')}>
                    <Icon
                        color={COLORS.GREEN_DARK}
                    />
                </Button>
                <Title>
                    90,86%
                </Title>
                <Description>
                    das refeições dentro da dieta
                </Description>
            </Header>
            <Content>
                <ContentTitle>
                    Estatísticas gerais
                </ContentTitle>
                <StatisticCard
                    title="22"
                    description="melhor sequência de pratos dentro da dieta"
                />
                <StatisticCard
                    title="109"
                    description="refeições registradas"
                />
                <CardGroup>
                    <StatisticCard
                        title="99"
                        description="refeições dentro da dieta"
                        style={{ marginRight: 12, backgroundColor: COLORS.GREEN_LIGHT }}
                    />
                    <StatisticCard
                        title="10"
                        description="refeições fora da dieta"
                        style={{ backgroundColor: COLORS.RED_LIGHT }}
                    />
                </CardGroup>
            </Content>
        </Container>
    )
}
