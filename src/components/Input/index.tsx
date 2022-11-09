import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container, Label, InputName, InputStyleProps } from "./styles";

type Props = TextInputProps & {
    label: string;
    type?: InputStyleProps;
};

export function Input({ label, type = 'PRIMARY', ...rest }: Props) {

    const { COLORS } = useTheme();

    return (
        <Container type={label}>
            <Label>
                { label }
            </Label>
            <InputName
                inputType={type}
                textAlignVertical="top"
                textBreakStrategy='simple'
                multiline={type === 'SECONDARY'}
                selectionColor={COLORS.GRAY_500}
                {...rest}
            />
        </Container>
    )
}