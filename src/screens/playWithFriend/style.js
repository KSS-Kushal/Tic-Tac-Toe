import { StyleSheet } from "react-native";
import { Colors } from "../../constant/color";

export const style = StyleSheet.create({
    mainContainer: {
        height: "100%",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
    },
    container: {
        width: "95%",
        height: "70%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    playerText: {
        fontSize: 40,
        fontWeight: "700",
        color: Colors.playerText
    },
    playerName: {
        color: Colors.playerName
    },
    turn: {
        fontSize: 20,
        fontWeight: "600",
        color: Colors.turn,
        marginTop: 20
    },
})