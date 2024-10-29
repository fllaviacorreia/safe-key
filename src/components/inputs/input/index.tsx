import { Text, TextInput, TextInputProps, View } from "react-native";
import styles from "./styles";
import global from '../../../styles/global';

type InputProps = TextInputProps & {
    title: string
}
export default function Input({ title, ...rest }: InputProps) {
    return (
        <View style={styles.container}>
            <Text style={global.text}>{title}</Text>
            <TextInput style={[styles.input, global.text]} {...rest}/>
        </View>
    )
}