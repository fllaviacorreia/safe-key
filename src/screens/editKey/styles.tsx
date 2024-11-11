import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
     dataContainer: {
        width: "80%",
        alignItems: "center",
        justifyContent: "flex-end",
        height: 600,
    },
    buttonsContainer: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
    },
    itemData:{
        width: '100%',
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        height: 120    
    }
});

export default styles;