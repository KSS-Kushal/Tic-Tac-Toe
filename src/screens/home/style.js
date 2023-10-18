import { StyleSheet } from "react-native";
import { Colors } from "../../constant/color";

export const style = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        height: "100%",
        backgroundColor: Colors.primary,
    },
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20
    },
    name: {
        fontSize: 40,
        fontWeight: "600",
        color: Colors.white,
        fontStyle: "italic",
        marginTop: 30
    },
    imgContainer: {
        width:"100%",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    img: {
        width: "80%",
        height: "80%",
        transform: [{rotate: "20deg"}],
    },
    buttonContainer: {
        width: "70%",
        height: "80%",
        justifyContent: "space-around",
        alignItems: "center",
    }
})