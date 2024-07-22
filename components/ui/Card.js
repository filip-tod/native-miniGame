import {View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
    return(
    <View style={styles.card}>
        {children}
    </View>
    );
}
export default Card;
const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 100,
        padding: 16,
        backgroundColor: Colors.primary800,
        elevation: 4, //Android only concept, like box shadow
        shadowColor: "black", //ios only concept, like box shadow
        shadowOffset: { width: 0, height: 2 }, //ios only concept, like box shadow
        shadowOpacity: 0.5, //ios only concept, like box shadow
        shadowRadius: 6, //ios only concept, like box shadow
    },
})