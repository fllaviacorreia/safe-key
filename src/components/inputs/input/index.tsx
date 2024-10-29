import { Text, TextInput, TextInputProps, View } from "react-native";
import styles from "./styles";

type InputProps = TextInputProps & {
    title: string
}
export default function Input({ title, ...rest }: InputProps) {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <TextInput style={styles.input} {...rest}/>
        </View>
    )
}