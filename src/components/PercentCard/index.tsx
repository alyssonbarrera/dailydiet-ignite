import { Container, Icon, PercentCardStyleProps, Subtitle, Title } from "./styles";

type Props = {
    percent: number;
}

export function PercentCard({ percent = 0 }: Props) {
    return (
        <Container percentType={ percent >= 50 ? 'POSITIVE' : 'NEGATIVE' }>
            <Icon percentType={ percent >= 50 ? 'POSITIVE' : 'NEGATIVE' } />
            <Title> 
                { percent }%
            </Title>
            <Subtitle>
                das refeições dentro da dieta
            </Subtitle>
        </Container>
    )
}
 