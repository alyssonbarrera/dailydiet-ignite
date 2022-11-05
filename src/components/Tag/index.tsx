import { useTheme } from "styled-components/native";
import { Container, Icon, Title } from "./styles";

type Props = {
    type?: "PRIMARY" | "SECONDARY";
};

export function Tag({ type = 'PRIMARY' }: Props) {

    const { COLORS } = useTheme();

    return (
        <Container>
            <Icon
                color={type === 'PRIMARY' ? COLORS.GREEN_DARK : COLORS.RED_DARK}
            />
            <Title>
                { type === 'PRIMARY' ? 'dentro da dieta' : 'fora da dieta' }
            </Title>
        </Container>
    )
}
