import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "100%",
        height: "100%",
    },
    dataContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 400,
    },
    buttonsContainer: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
    },
});

export default styles;