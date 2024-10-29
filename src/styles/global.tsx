import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const global = StyleSheet.create({
    text: {
        color: theme.light.text,
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 5,
        marginTop: 10,
        fontFamily: 'Text',
    },
    title: {
        color: theme.light.text,
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
        marginTop: 10,
        fontFamily: 'Title',
    }
});

export default global