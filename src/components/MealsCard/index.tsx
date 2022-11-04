import { Container, Divider, Status, Time, Title } from "./styles"
import { useTheme } from "styled-components/native"

type Props = {
    time: string;
    title: string;
    type?: 'PRIMARY' | 'SECONDARY';
};

export const MealsCard = ({ time, title, type = 'PRIMARY', ...rest }: Props) => {

    const { COLORS } = useTheme();

    return (
        <Container {...rest}>
            <Time>
                { time }
            </Time>
            <Divider />
            <Title>
                { title }
            </Title>
            <Status
                color={ type === 'PRIMARY' ? COLORS.GREEN_MID : COLORS.RED_MID }
            />
        </Container>
    )
}
