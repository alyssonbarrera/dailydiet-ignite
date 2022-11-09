import { ReactNode } from "react";
import { Container, Title } from "./styles";

type Props = {
    date: string;
    children: ReactNode;
}

export function MealsContainer({ date, children }: Props) {

    return (
        <Container>
                <Title>
                    { date.split('/').join('.') }
                </Title>
                { children }
        </Container>
    )
}
