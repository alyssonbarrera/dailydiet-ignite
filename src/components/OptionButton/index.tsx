import { useTheme } from "styled-components/native";
import { Container, Icon, OptionButtonStyleProps, Text } from "./styles";

type Props = {
    title: 'Sim' | 'Não' | undefined;
    type?: OptionButtonStyleProps;
    onPress: () => void;
};

export function OptionButton({ title, type, ...rest }: Props) {

    const { COLORS } = useTheme();

    return (
        <Container
            type={type}
            title={title}
            {...rest}
        >
            <Icon
                color={title === 'Sim' ? COLORS.GREEN_DARK : COLORS.RED_DARK}
            />
            <Text>{ title }</Text>
        </Container>
    )
}
