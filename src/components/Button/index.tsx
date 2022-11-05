import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import { Container, Title, ButtonColorStyleProps } from './styles'

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonColorStyleProps;
    icon?: React.ReactNode;
};

export function Button({ title, type, icon, ...rest }: Props) {
    return (
        <Container type={type} {...rest} activeOpacity={0.9}>
            { icon }
            <Title type={type}>
                { title }
            </Title>
        </Container>
    )
}
