import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        position: "relative",
    },
    boardImg: {
        width: 350,
        height: 350
    },
    buttonContainer: {
        position: "absolute",
        top: 13,
        left: 13,
    },
    button: {
        width: 101,
        height: 101,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    XOStyle: {
        width: 80,
        height: 80
    }
})