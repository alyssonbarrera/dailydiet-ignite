import { Title, Description } from "./styles";

type Props = {
    title: string;
    description: string;
};

export function Highlight({ title, description }: Props) {
    return (
        <>
            <Title>
                { title }
            </Title>

            <Description>
                { description }
            </Description>
        </>

    )
}
