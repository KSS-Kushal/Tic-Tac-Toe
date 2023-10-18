import {StyleSheet} from 'react-native';
import { Colors } from '../../constant/color';

export const style = StyleSheet.create({
    mainContainer: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor:Colors.primary
      },
      scoreContainer: {
        width: "80%",
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 40
      },
      scorePlayerName: {
        fontSize: 20,
        fontWeight: "500",
        color: Colors.playerText,
      },
      score: {
        fontSize: 25,
        fontWeight: "500",
        color: Colors.white
      },
      vsText: {
        color:Colors.white,
        fontSize: 20,
        fontWeight: "500",
        fontStyle: 'italic'
      },
      container: {
        width: '95%',
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20
      },
      nameContainer: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between"
      },
      playerText: {
        fontSize: 30,
        fontWeight: '700',
        color: Colors.playerText,
      },
      playerName: {
        color: Colors.playerName,
      },
      turn: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.white,
        marginTop: 20,
      },
      modalMainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        width: '75%',
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.playerText,
        borderRadius: 10,
        shadowColor: Colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 10,
      },
      winnerText: {
        fontSize: 30,
        color: Colors.playerName,
        fontWeight: "600"
      }
})