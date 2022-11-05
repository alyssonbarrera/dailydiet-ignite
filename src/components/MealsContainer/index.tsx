import { MealsCard } from "@components/MealsCard";
import { useNavigation } from "@react-navigation/native";
import { Container, Title } from "./styles";

type Props = {
    date: string;
}

export function MealsContainer({ date }: Props) {

    const navigation = useNavigation();

    return (
        <Container>
            <Title>
                { date }
            </Title>
                <MealsCard time="20:00" title="X-tudo" type="PRIMARY" onPress={() => navigation.navigate("meal")} />
                <MealsCard time="20:00" title="Whey protein com leite" type="SECONDARY" onPress={() => navigation.navigate("meal")} />
                <MealsCard time="20:00" title="Salada Cesar com frango" type="SECONDARY" onPress={() => navigation.navigate("meal")} />
        </Container>
    )
}
