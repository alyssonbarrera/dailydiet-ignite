import { Highlight } from "@components/Highlight";
import { ViewProps } from "react-native";
import { Container } from "./styles";

type Props = ViewProps & {
    title: string;
    description: string;
};

export function StatisticCard({ title, description, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Highlight
                title={title}
                description={description}
            />
        </Container>
    )
}
