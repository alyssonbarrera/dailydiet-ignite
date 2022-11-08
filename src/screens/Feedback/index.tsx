import { Container, Title, Description, Image, TextBold, Footer, FeedbackStyleProps } from "./styles";

import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

import illustration_1 from "../../assets/illustration-1.png"
import illustration_2 from "../../assets/illustration-2.png"

type RouteParams = {
    isPositive: boolean;
};

export function Feedback() {

    const navigation = useNavigation();

    const route = useRoute();

    const { isPositive } = route.params as RouteParams;

    return (
        <Container>
            <Title isPositive={isPositive}>
                {
                    isPositive
                    ? "Continue assim!"
                    : "Que pena!"
                }
            </Title>
            {
                isPositive ? (
                    <Description>
                        Você continua <TextBold>dentro da dieta</TextBold>. Muito bem!
                    </Description>
                ) : (
                    <Description>
                        Você <TextBold>saiu da dieta</TextBold> dessa vez, mas continue se esforçando e não desista!
                    </Description>
                )
            }
            {
                isPositive
                ? <Image source={illustration_1} />
                : <Image source={illustration_2} />
            }
            <Footer>
                <Button 
                    title="Ir para a página inicial"
                    type="SECONDARY"
                    onPress={() => navigation.navigate("home")}
                />
            </Footer>
        </Container>
    )
}
