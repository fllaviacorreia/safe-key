import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import global from "../../../styles/global";
import { FontAwesome } from "@expo/vector-icons";

type CardProps = {
    title: string;
    createdAt: string;
    id: string;
}
export default function Card({ title, createdAt, id }: CardProps) {
    return (
        <View style={styles.container} id={id}>
            <View style={styles.dataContainer}>
                <Text style={global.title}>{title}</Text>
                <Text style={[global.text, styles.date]}>{createdAt}</Text>
            </View>
            <View style={styles.separator}>
                <Pressable onPress={() => alert("Clicou no botão")}>
                <FontAwesome name="angle-double-right" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
}