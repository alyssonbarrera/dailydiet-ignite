import { Loading } from "@components/Loading";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Subtitle, Title } from "./styles";

type Props = TouchableOpacityProps & {
    percent: number;
    loading: boolean;
}

export function PercentCard({ loading, percent = 0, ...rest }: Props) {
    return (
        <Container activeOpacity={0.8} percentType={ percent >= 50 ? 'POSITIVE' : 'NEGATIVE' } {...rest}>
            <Icon percentType={ percent >= 50 ? 'POSITIVE' : 'NEGATIVE' } />
            <Title> 
                { loading ? <Loading /> : percent.toFixed(2).toString().replace('.', ',') + '%' }
            </Title>
            <Subtitle>
                das refeições dentro da dieta
            </Subtitle>
        </Container>
    )
}
 