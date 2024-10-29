import { StyleSheet } from "react-native";
import { theme } from "../../../../theme";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingHorizontal: 20,
        width:'100%',
        height:70,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    input: {
        width: '100%',
        height: 45,
        marginVertical: 10,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 12,
        backgroundColor: theme.light.backgroundInputs,
        borderColor: theme.light.placeholder,
    },
});

export default styles