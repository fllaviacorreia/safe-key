import { StyleSheet } from "react-native";
import { theme } from "../../../../theme";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',    
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        padding: 10,
        marginVertical: 7,
    },
    dataContainer: {
        flexDirection: 'column',
        width: 250,
        height: "90%",
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    date: {
        color: theme.light.placeholder,
    },
    separator: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 100,
    }
    });

export default styles;