import { MealsCard } from "@components/MealsCard";
import { Container, Title } from "./styles";

type Props = {
    date: string;
}

export function MealsContainer({ date }: Props) {
    return (
        <Container>
            <Title>
                { date }
            </Title>
                <MealsCard time="20:00" title="X-tudo" type="PRIMARY" />
                <MealsCard time="20:00" title="Whey protein com leite" type="SECONDARY" />
                <MealsCard time="20:00" title="Salada Cesar com frango" type="SECONDARY" />
        </Container>
    )
}
