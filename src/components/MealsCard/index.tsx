import { TouchableOpacityProps } from 'react-native';
import { Container, Divider, Status, Time, Title } from "./styles"
import { useTheme } from "styled-components/native"

type Props = TouchableOpacityProps & {
    time: string;
    title: string;
    type?: 'PRIMARY' | 'SECONDARY';
};

export const MealsCard = ({ time, title, type = 'PRIMARY', ...rest }: Props) => {

    const { COLORS } = useTheme();

    return (
        <Container {...rest} activeOpacity={0.8}>
            <Time>
                { time }
            </Time>
            <Divider />
            <Title>
                { title.length > 30 ? title.substring(0, 22) + '...' : title }
            </Title>
            <Status
                color={ type === 'PRIMARY' ? COLORS.GREEN_MID : COLORS.RED_MID }
            />
        </Container>
    )
}
