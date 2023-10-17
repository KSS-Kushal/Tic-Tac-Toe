import { StyleSheet } from "react-native";
import { Colors } from "../../constant/color";

export const style = StyleSheet.create({
    button:{
        width: 200,
        height: 55,
        minWidth: 50,
        minHeight: 20,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: Colors.primary,
        borderRadius: 8,
        elevation: 4
    },
    buttonText: {
        fontSize: 20,
        color: Colors.white,
        fontWeight: "500"
    }
})